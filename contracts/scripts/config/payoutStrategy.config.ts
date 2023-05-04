// Update this file any time a new Payout Strategy contract has been added
type MerklePayoutParams = {
  factory: string;
  implementation: string;
  contract: string;
};

type DeployParams = Record<string, MerklePayoutParams>;

export const MerklePayoutParams: DeployParams = {
  mainnet: {
    factory: "0x8F8d78f119Aa722453d33d6881f4D400D67D054F",
    implementation: "0xfF94fAfC740Be8D2010304108266E7b90ed232fc",
    contract: "",
  },
  alfajores: {
    factory: "0xbDe3Bd14D5e65e95ca790899feA5B1E5556685b1",
    implementation: "0x86bbD8e981Dc4D2F6368B976b2a089B244B8c809",
    contract: "0x9Ce08C1184C53Cf333b48A50B9f89c5D2793F45D",
  },
  "optimism-mainnet": {
    factory: "0xB5365543cdDa2C795AD104F4cB784EF3DB1CD383",
    implementation: "0xF347ce7a0678afE4e7498172E5aaC76C5aEdB7de",
    contract: "",
  },
  "fantom-mainnet": {
    factory: "",
    implementation: "",
    contract: "",
  },
  "fantom-testnet": {
    factory: "",
    implementation: "",
    contract: "",
  },
  "celo-testnet": {
    factory: "0xB5365543cdDa2C795AD104F4cB784EF3DB1CD383",
    implementation: "0xF347ce7a0678afE4e7498172E5aaC76C5aEdB7de",
    contract: "",
  }
};
