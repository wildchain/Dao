// Update this file any time a new contract has been deployed
type RoundParams = {
  roundImplementationContract: string;
  roundFactoryContract: string;
  roundContract ?: string;
  newProtocolFeePercentage?: number;
  newProtocolTreasury?: string;
};

type DeployParams = Record<string, RoundParams>;

export const roundParams: DeployParams = {
  "mainnet": {
    roundFactoryContract: '0x9Cb7f434aD3250d1656854A9eC7A71EceC6eE1EF',
    roundImplementationContract: '0x64ab6F2E11dF8B3Be5c8838eDe3951AC928daE9C',
    roundContract: '',
  },
  "alfajores": {
    roundFactoryContract: '0xA23ffE01381ffDa06Dcf30813EFAebe70B5D1F0E',
    roundImplementationContract: '0x0Bd5476c8fc1535B0b23E6B65f64EbCe315c2791',
    roundContract: '',
  },
  "optimism-mainnet": {
    roundFactoryContract: '0x04E753cFB8c8D1D7f776f7d7A033740961b6AEC2',
    roundImplementationContract: '0x4bE4B959Ee75226C517E1ABe5d9FEAD275583b2A',
    roundContract: ''
  },
  "fantom-mainnet": {
    roundFactoryContract: '',
    roundImplementationContract: '',
    roundContract: ''
  },
  "fantom-testnet": {
    roundFactoryContract: '',
    roundImplementationContract: '',
    roundContract: ''
  },
  "celo-testnet": {
    roundFactoryContract: '0x04E753cFB8c8D1D7f776f7d7A033740961b6AEC2',
    roundImplementationContract: '0x4bE4B959Ee75226C517E1ABe5d9FEAD275583b2A',
    roundContract: ''
  }
};