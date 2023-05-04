// Update this file any time a new project registry contract has been deployed / upgraded
type ProjectRegistryParams = {
  proxyContactAddress: string;
};

type DeployParams = Record<string, ProjectRegistryParams>;

export const projectRegistryParams: DeployParams = {
  "mainnet": {
    proxyContactAddress: '',
  },
  "alfajores": {
    proxyContactAddress: '0xbE356Fe53E0277E596a66fBf330FDe0639302001',
  },
  "optimism-mainnet": {
    proxyContactAddress: '',
  },
  "fantom-mainnet": {
    proxyContactAddress: '',
  },
  "fantom-testnet": {
    proxyContactAddress: '',
  },
  "celo-testnet": {
    proxyContactAddress: '0xa71864fAd36439C50924359ECfF23Bb185FFDf21',
  }
};