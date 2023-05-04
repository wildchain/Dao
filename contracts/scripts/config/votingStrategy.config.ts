// Update this file any time a new QF voting contract has been deployed
type QFVotingParams = {
  factory: string;
  implementation: string;
  contract: string
};

type DeployParams = Record<string, QFVotingParams>;

export const QFVotingParams: DeployParams = {
  "mainnet": {
    factory: '0x4a850F463D1C4842937c5Bc9540dBc803D744c9F',
    implementation: '0xB3Ee4800c93cBec7eD2a31050161240e4663Ff5E',
    contract: ''
  },
  "alfajores": {
    factory: '0xE5d1Cd8CB29eA4E83e97C2991a99745849922769',
    implementation: '0xC6F2C738464686c97De32703287D1B5669388485',
    contract: '0x5a558B888AD0bC96B33D4b59D21A5dce5DAd3218'
  },
  "optimism-mainnet": {
    factory: '0x838C5e10dcc1e54d62761d994722367BA167AC22',
    implementation: '0x268ef1E2c19c4D10CDb24A1C8D95b7FcA1bAdD01',
    contract: ''
  },
  "fantom-mainnet": {
    factory: '',
    implementation: '',
    contract: ''
  },
  "fantom-testnet": {
    factory: '',
    implementation: '',
    contract: ''
  },
  "celo-testnet": {
    factory: '0x838C5e10dcc1e54d62761d994722367BA167AC22',
    implementation: '0x268ef1E2c19c4D10CDb24A1C8D95b7FcA1bAdD01',
    contract: ''
  }
};