module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388,
      gasPrice: 100000000000,
      // Mnemonic: "copy obey episode awake damp vacant protect hold wish primary travel shy"
      from: "0x7c06350cb8640a113a618004a828d3411a4f32d3"
    }
  }
};
