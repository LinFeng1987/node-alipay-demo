'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1547454333514_8872';

    // add your config here
    config.middleware = [];

    config.alipay = {
        appId: '2018122462654576',
        privateKey: "./public/alipay/rsa_private_key.pem",
        alipayPublicKey: "./public/alipay/rsa_public_key.pem"
    };
    return config;
};
