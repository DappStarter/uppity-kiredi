require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name remember place erosion good end army gather'; 
let testAccounts = [
"0x6947d273b208d3637997c3e551d68b263b1b1eab0d000f59d2f1bfdd168568e9",
"0x1a6c83b1f685ca5185ebf337509e8e36217e1fad521eaa2b5196566ee30092d2",
"0x7ca9915c7f552f9b46be9f468d0eacc962ef33ed3c2ec86734b2bdb1d3296ceb",
"0xb495cdae140447d55f32b1e65ebacaac1df2776eb47c7c6df21821f1150ea9bf",
"0xb341b2f37822cc3c24434f2cc12eba80e068ddaafa1e805b1eba0b3dde69e6f7",
"0xd76a39e976c3bb0bcbd2ad0f830c8100c7039b7d9f8cdab7ef1778eeea380f17",
"0xb51c3ea080969e4a7d54615c688afb9fa81f731668cee938ffbda7a275937cf8",
"0xa9bd3b8f1540e405871847d743757cbc97f8e87283ebcfc9bf7dc65502cdf851",
"0xb4e8aa42707c2eb2c26b7d106b152a3c9db47971e8bb6a98eaedb56978f3a38e",
"0xe9aa60baaa53b978a9fed11c007080f9b5a0f41dbbcce41b431d3c7c66b6ac03"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

