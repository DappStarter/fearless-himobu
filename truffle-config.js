require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember artwork hope kitchen outer general'; 
let testAccounts = [
"0xed705420c1a7d91ebd7c5aca5a499472a5ed7075f6c3233d0a11dc07ba8550d7",
"0xc1418c53547b8518e19a617f2eb2f959fcaf63a5b774cc14e7fe487473c1f289",
"0x3de6a331c03dd2a39bd8eb9552c0ce68991d807d1df9a7475a7605553badb463",
"0xe2c7c2be54f6218baa4c40350d76bedd76b5361e4253dc0170a708e3d425709d",
"0x71a8ba2ef79169e64cb24d203cd55a75c309892d76a53ed9a80b9052e42e552e",
"0xc4bc3bb852fc53939bfe1335d13828079a7d8cb1e4670c4440e17fdf868dbde3",
"0x3a72dba0f24fcef53704f2c8ebf81f995927b1a85cd6e580898210ea4a08bb59",
"0x9829857b8f88deee9f5af1da62337971b5f669ca1b0343e60d448da7692001d2",
"0x5ad232004e60c82645c3e5209fc3982529eef71f105ce9dc877239884122bf5e",
"0xb5b2038cc1baa5e86e54d9d0faa124793848bba5957788790a62b930eefa3e8a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
