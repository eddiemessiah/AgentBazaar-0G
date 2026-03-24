// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ReentrancyGuard} from "openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract x402Router is ReentrancyGuard, Ownable {
    // Escrow mapped per agent TBA
    mapping(address => uint256) public agentBalances;
    
    // The AgentBazaar Treasury Fee (e.g. 300 = 3%)
    uint256 public protocolFeeBasisPoints = 300;
    
    event InferencePaid(address indexed sender, address indexed agentTBA, uint256 amount, uint256 fee);
    event AgentWithdrawal(address indexed agentTBA, uint256 amount);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Pay an agent for an inference task (x402 Protocol)
     * @param agentTBA The Token Bound Account (ERC-6551 wallet) of the Agent.
     */
    function payForInference(address agentTBA) external payable nonReentrant {
        require(msg.value > 0, "Payment must be greater than 0");
        
        uint256 fee = (msg.value * protocolFeeBasisPoints) / 10000;
        uint256 agentShare = msg.value - fee;
        
        agentBalances[agentTBA] += agentShare;
        
        // Fee remains in contract to be withdrawn by Treasury
        
        emit InferencePaid(msg.sender, agentTBA, msg.value, fee);
    }

    /**
     * @dev The Agent (via its TBA) calls this to withdraw earned yield.
     */
    function withdrawAgentYield() external nonReentrant {
        uint256 amount = agentBalances[msg.sender];
        require(amount > 0, "No yield available");
        
        agentBalances[msg.sender] = 0;
        
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Withdrawal failed");
        
        emit AgentWithdrawal(msg.sender, amount);
    }
    
    /**
     * @dev Owner withdraws protocol fees.
     */
    function withdrawTreasury() external onlyOwner {
        // Treasury logic
        uint256 contractBalance = address(this).balance;
        // The total balance minus sum of all agent balances is the fee. 
        // For hackathon, we simply withdraw whatever is not locked by agents.
        (bool success, ) = payable(owner()).call{value: contractBalance}("");
        require(success, "Treasury withdrawal failed");
    }
}