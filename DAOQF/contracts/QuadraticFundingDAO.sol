// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract QuadraticFundingDAO is Ownable {
    using SafeMath for uint256;

    struct Proposal {
        uint256 id;
        address payable proposer;
        string title;
        string description;
        uint256 totalContributions;
        uint256 contributionCount;
    }

    uint256 private _proposalCounter;
    mapping(uint256 => Proposal) private _proposals;
    mapping(address => uint256) private _contributions;

    uint256 public fundingStartTime;
    uint256 public fundingEndTime;
    uint256 public totalFunds;

    event ProposalCreated(uint256 id, address proposer, string title, string description);
    event ContributionMade(uint256 id, address contributor, uint256 amount);
    event FundsDistributed(uint256 id, uint256 amount);

    constructor(uint256 _fundingStartTime, uint256 _fundingEndTime) {
        require(_fundingStartTime < _fundingEndTime, "Funding start time must be before end time");
        fundingStartTime = _fundingStartTime;
        fundingEndTime = _fundingEndTime;
    }

    modifier onlyDuringFunding() {
        require(block.timestamp >= fundingStartTime && block.timestamp <= fundingEndTime, "Not within funding period");
        _;
    }

    function createProposal(string memory title, string memory description) external onlyDuringFunding {
        _proposalCounter = _proposalCounter.add(1);

        _proposals[_proposalCounter] = Proposal({
            id: _proposalCounter,
            proposer: payable(msg.sender),
            title: title,
            description: description,
            totalContributions: 0,
            contributionCount: 0
        });

        emit ProposalCreated(_proposalCounter, msg.sender, title, description);
    }

    function contribute(uint256 proposalId) external payable onlyDuringFunding {
        require(_proposals[proposalId].id != 0, "Proposal not found");
        require(msg.value > 0, "Contribution must be greater than 0");

        uint256 squareRoot = sqrt(msg.value);
        _proposals[proposalId].totalContributions = _proposals[proposalId].totalContributions.add(squareRoot);
        _proposals[proposalId].contributionCount = _proposals[proposalId].contributionCount.add(1);
        _contributions[msg.sender] = _contributions[msg.sender].add(msg.value);
        totalFunds = totalFunds.add(msg.value);

        emit ContributionMade(proposalId, msg.sender, msg.value);
    }

    function sqrt(uint256 x) internal pure returns (uint256) {
        if (x == 0) return 0;
        uint256 z = (x + 1) / 2;
        uint256 y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }

        function getProposal(uint256 proposalId) external view returns (uint256 id, address proposer, string memory title, string memory description, uint256 totalContributions, uint256 contributionCount) {
        require(_proposals[proposalId].id != 0, "Proposal not found");
        Proposal storage proposal = _proposals[proposalId];
        return (
            proposal.id,
            proposal.proposer,
            proposal.title,
            proposal.description,
            proposal.totalContributions,
            proposal.contributionCount
        );
    }

    function getContribution(address contributor) external view returns (uint256) {
        return _contributions[contributor];
    }

    function withdrawExcessFunds() external onlyOwner {
        require(block.timestamp > fundingEndTime, "Funding period not over");

        uint256 excessFunds = address(this).balance.sub(totalFunds);
        payable(owner()).transfer(excessFunds);
    }

    function distributeFunds() external onlyOwner {
    require(block.timestamp > fundingEndTime, "Funding period not over");

    uint256 matchingPool = totalFunds;
    uint256 totalSquaredContributions = 0;

    for (uint256 i = 1; i <= _proposalCounter; i++) {
        Proposal storage proposal = _proposals[i];
        totalSquaredContributions = totalSquaredContributions.add(proposal.totalContributions.mul(proposal.totalContributions));
    }

    for (uint256 i = 1; i <= _proposalCounter; i++) {
        Proposal storage proposal = _proposals[i];
        uint256 proposalSquaredContributions = proposal.totalContributions.mul(proposal.totalContributions);
        uint256 amount = matchingPool.mul(proposalSquaredContributions).div(totalSquaredContributions);
        proposal.proposer.transfer(amount);
        emit FundsDistributed(proposal.id, amount);
    }

    totalFunds = 0;
}

}

