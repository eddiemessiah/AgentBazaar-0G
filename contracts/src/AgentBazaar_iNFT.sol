// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract AgentBazaar_iNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    
    // Mapping from token ID to its 0G Data Availability Root Hash
    mapping(uint256 => string) public zgDataRoots;

    event AgentMinted(uint256 indexed tokenId, address indexed creator, string zgDataRoot);

    constructor() ERC721("AgentBazaar iNFT", "AGENT") Ownable(msg.sender) {}

    /**
     * @dev Mints a new Agent iNFT.
     * @param to The address receiving the NFT.
     * @param zgDataRoot The 0G Data Availability root hash storing the agent's brain/memory.
     * @param uri An optional standard URI (can also just be the 0G root).
     */
    function mintAgent(address to, string memory zgDataRoot, string memory uri) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        zgDataRoots[tokenId] = zgDataRoot;
        
        emit AgentMinted(tokenId, to, zgDataRoot);
        return tokenId;
    }

    // Overrides required by Solidity
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}