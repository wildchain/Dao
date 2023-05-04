// Update this file any time a new contract has been deployed
type AlloSettingsParams = {
  alloSettingsContract: string;
  newProtocolFeePercentage: number;
  newProtocolTreasury: string;
};

type DeployParams = Record<string, AlloSettingsParams>;

export const AlloSettingsParams: DeployParams = {
  "mainnet": {
    alloSettingsContract: '0x9fcC854b145Bd3640a01c49Aa2Cfa725Ed0B4210',
    newProtocolFeePercentage: 0,
    newProtocolTreasury: '',
  },
  "alfajores": {
    alloSettingsContract: '0x7c9ee0553E9548A1ccB435D33b7e422828354819',
    newProtocolFeePercentage: 5000, // 5% == 5_000
    newProtocolTreasury: '',
  },
  "optimism-mainnet": {
    alloSettingsContract: '0xD092e383478Bc565655331f0B88f758eeFa2eEB7',
    newProtocolFeePercentage: 0,
    newProtocolTreasury: '',
  },
  "fantom-mainnet": {
    alloSettingsContract: '',
    newProtocolFeePercentage: 0,
    newProtocolTreasury: '',
  },
  "fantom-testnet": {
    alloSettingsContract: '',
    newProtocolFeePercentage: 0,
    newProtocolTreasury: '',
  },
  "celo": {
    alloSettingsContract: '',
    newProtocolFeePercentage: 0,
    newProtocolTreasury: '',
  }
 
};