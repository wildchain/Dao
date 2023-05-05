# Welcome to WildFund Demo Contracts

If you are curious about the work done for our DEMO see Demo Branch->

This project is inspired by the Allo Protocol seen here: https://docs.allo.gitcoin.co/getting-started/introduction

Allo Protocol is essentially a set of DAO smart contracts that allows you to start public funding rounds for donations
Currently the protocol natively supports chains like Fantom, Optimism , Ethereum etc 

We have decided to be the 1st to implement it on Celo, an EVM Compatible Chain
If you come across any vulnerabilties, do create an issue / raise a PR to help improve the contracts. ^_^

## Contract Work Done
As we did not work directly with Allo, we have minted instances of their protocol on the Alfajores Testnet for Celo
The contract addresses are as follows (note that we have not verified them as we are in the midst of doing so)

Contract Adresses:


## Directory Structure for the Allo Protocol

This is purely for ease of reference for what the protcol does

```
.
├── contracts                           # Smart contracts
├   ├── utils                           # useful utils
├   ├── program                         # program contracts
├   ├   ├── ProgramFactory.sol          # factory contract which deploys program
├   ├   ├── ProgramImplementation.sol   # program contract
├   ├── round                           # round contracts
├   ├   ├── RoundFactory.sol            # factory contract which deploys round
├   ├   ├── RoundImplementation.sol     # round contract 
├   ├── votingStrategy                  # voting strategy
├   ├   ├── IVotingStrategy.sol         # voting strategy interface
├   ├   ├── QuadraticFundingVotingStrategy.sol      # QF voting strategy
├── scripts                             # Deploy scripts for smart contracts
├── docs                                # documentation 
├── test                                # Test for smart contracts
├── .env.example                        # .env template
├── .eslintrc.js                        # Eslint config
├── .prettierrc                         # Prettier config
├── .solhint.json                       # Solhint config
├── hardhat.config.json                 # Hardhat configuration
├── package.json                        # Package configuration
├── tsconfig.json                       # Typescript configuration
└── README.md
```


## Terminology

- **Program Operators**: wallets that have the permission to create & manage the program
- **Program**: maintained by Program Operators which together form a team
- **Round Operators**: wallets that have the permission to create & manage the round
- **Round**: created by a Program and deal with everything relating to running a round
- **Voter** : wallet who cast a vote to a grant during the round

##Celo Compatibility
For the Below Steps, follow the instructions from the docs provided. Note that it is deployable on Alfajores by simply running the command Alfajores as the network perimeter. For Judges it could be more helpful to go through Deploy Steps Only

##### Deploy Steps

To know how the contracts should be setup, refer [DEPLOY_STEPS.md]


##### Chain Deployment List

To know the addresses are deployed on which network. refer [CHAINS.md]
##### Development
s
To contribute to this project, fork the project and follow the instructions at [DEV.md]

This is built and maintained using [hardhat]

## General Setup

These steps would have to be done per chain but there are intended to be deployed only once

**Program**
1. Deploy `ProgramFactory`
2. Deploy `ProgramImplementation`
3. Link `ProgramImplementation` to ProgramFactory contract 

**Round**
1. Deploying all voting strategy (contracts under `votingStrategy/`)
2. Deploy `RoundFactory`
3. Deploy `RoundImplementation`
4. Link `RoundImplementation` to `RoundFactory` contract


## Program Setup

1. To create a program, you would not deploy a contract but instead, rely on the create function on the `ProgramFactory` to create a clone of the already deployed `ProgramImplementation` contract
2. Any interaction in terms of updating parameters etc can be performed against the `ProgramImplementation` contract itself


The ProgramFactory enables us to have upgradable contracts on ProgramImplementation


## Round Setup

1. To create a round, you would not deploy a contract but instead, rely on the create function on the `RoundFactory` to create a new `RoundImplementation` contract.
2. The user would have to choose a voting strategy like `QuadraticFundingVotingStrategy` (already deployed via instruction mention in DEPLOY_STEPS.md)
3. Any interaction in terms of updating parameters etc can be performed against the `RoundImplementation` contract itself


The `RoundFactory` enables us to have upgradable contracts on `RoundImplementation`.


## Deploy Steps

To know how the contracts should be setup, refer [DEPLOY_STEPS.md](docs/DEPLOY_STEPS.md)


## Chain Deployment List

To know the addresses are deployed on which network. refer [CHAINS.md](docs/CHAINS.md)

## Development

To contribute to this project, fork the project and follow the instructions at [DEV.md](docs/DEV.md)

## Contract Documentation

The contract documentation has been generated using [primitive-dodoc](https://github.com/primitivefinance/primitive-dodoc) and can be found over at [docs/contracts](docs/contracts/)


Since , allo protocol was not compatible with celo blockchain, we decided to port the protocol to celo and deploy the first allo contracts over alfajores network(celo-testnet). You can find the contract details below-

ProgramFactory to 0x7D53F28D54D86e5a3afA2FaBcA9eAD7e9Dbb5314

Deploying ProgramImplementation to 0x3a3C635DFB296C28e6eB77b5E16F330b6d30f8aA

ProgramImplementation Contract Linked to ProgramFactory contract 0x2e105dc8de9508a5cf96a50b348b820491707a9f3fb7bb784d47bdc6f96344a3

Deploying Upgradable QuadraticFundingVotingStrategyFactory to 0xE5d1Cd8CB29eA4E83e97C2991a99745849922769

Deploying QuadraticFundingVotingStrategyImplementation to 0xC6F2C738464686c97De32703287D1B5669388485

QuadraticFundingVotingStrategyImplementation Contract Linked to QuadraticFundingVotingStrategyFactory contract
Txn hash 0x548a44c4b6e03a4d2edbd9b8baf8440aff2792e7873fa64dbd06d70201cb36aa

Deploying Upgradable MerklePayoutStrategyFactory to 0xbDe3Bd14D5e65e95ca790899feA5B1E5556685b1

Deploying MerklePayoutStrategyImplementation to 0x86bbD8e981Dc4D2F6368B976b2a089B244B8c809

MerklePayoutStrategyImplementation Contract linked to Merkle Payout Strategy Contract 0x4e16be214827403ea8c9630b4e7d1133b576f4b6efd5d0fd76f206c509130684

Deploying Upgradable RoundFactory to 0xA23ffE01381ffDa06Dcf30813EFAebe70B5D1F0E

Deploying RoundImplementation to 0x0Bd5476c8fc1535B0b23E6B65f64EbCe315c2791

RoundImplementation Contract linked to Round Contract 0xae7118256a376d5ca876b52348cc5ff63a3a3992fe1116712237b90e0b129656

Deploying Upgradable AlloSettings to 0x7c9ee0553E9548A1ccB435D33b7e422828354819

setting protocol fee percentage to: 5000, Txn hash: 0xd94404bd35ce58a02d120fd96e2047c44108f447156e2aa3429e8e207a4a37bd

Deploying ProjectRegistry...

tx hash 0xc740e4de5fd3b9c9d36b8e83f71d6da870f80a196d659bcaccdb6ddf6e08d5c1

gas used: 606_600

ProjectRegistry deployed to: 0xbE356Fe53E0277E596a66fBf330FDe0639302001

programContract -Txn hash: 0x6ac8bf8651cb74bd08c1812b8f5a1c47e718322448e070d3b69ffbbf689cecec

Program created:  0xA54c2C524b5Ff9f6cf7b3e57EF0aD303C0dB6Fe4

QFContract -  Txn hash: 0x3e8100ac4997d7323554a4df628b1b4b7df802616ac70fccb6ffa3f89cf3935f

QF Voting contract created:  0x5a558B888AD0bC96B33D4b59D21A5dce5DAd3218

payoutStrategContract -Txn hash: 0x589058bf1507563273dba8c0c7be47ecb8da3d9391d3e8d6977527231d328bdYYy

Merkle Payout contract created:  0x9Ce08C1184C53Cf333b48A50B9f89c5D2793F45D

roundContract - Txn hash: 0x50dc68da2bb3ddba3ecb085f9715bb332216ffcda063e3e3719cbe2ed3b529a8

Round created:  0x80A999D66F4D58762EdA069fa7F21643D480a9D7
 


