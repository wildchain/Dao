// Update this file any time a new program contract has been deployed
type ProgramParams = {
  programFactoryContract: string;
  programImplementationContract: string;
  programContract: string
};

type DeployParams = Record<string, ProgramParams>;

export const programParams: DeployParams = {
  "mainnet": {
    programFactoryContract: '0x56296242CA408bA36393f3981879fF9692F193cC',
    programImplementationContract: '0x0BFA0AAF5f2D81f859e85C8E82A3fc5b624fc6E8',
    programContract: ''
  },
  "alfajores": {
    programFactoryContract: '0x7D53F28D54D86e5a3afA2FaBcA9eAD7e9Dbb5314',
    programImplementationContract: '0x3a3C635DFB296C28e6eB77b5E16F330b6d30f8aA',
    programContract: '0xA54c2C524b5Ff9f6cf7b3e57EF0aD303C0dB6Fe4'
  },
  "optimism-mainnet": {
    programFactoryContract: '0xd5Fb00093Ebd30011d932cB69bb6313c550aB05f',
    programImplementationContract: '0xBA4999bd9Cea79a76442F1E1Fb0E5E448867E3bE',
    programContract: ''
  },
  "fantom-mainnet": {
    programFactoryContract: '',
    programImplementationContract: '',
    programContract: ''
  },
  "fantom-testnet": {
    programFactoryContract: '',
    programImplementationContract: '',
    programContract: ''
  },
  "celo-testnet": {
    programFactoryContract: '0xd5Fb00093Ebd30011d932cB69bb6313c550aB05f',
    programImplementationContract: '0xBA4999bd9Cea79a76442F1E1Fb0E5E448867E3bE',
    programContract: ''
  }
};