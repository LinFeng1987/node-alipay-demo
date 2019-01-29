'use strict';

const Controller = require('../extend/App/AppController');


class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }

    async home() {
        const user = {
            uid: 1,
            username: "admin",
            password: "admin123 111"
        }
        console.log(user);
        this.ctx.helper.success(user, 'ok')
    }

    async alipayTest(){
        const path = require('path');
        const Alipay = require('alipay-node-sdk');
        let outTradeId = Date.now().toString();

        let ali = new Alipay({
            appId: this.app.config.alipay.appId,
            notifyUrl: 'http://www.xxx.com/callback/alipay',
            rsaPrivate: path.resolve(this.app.config.alipay.privateKey),
            rsaPublic: path.resolve(this.app.config.alipay.alipayPublicKey),
            sandbox: true,
            signType: 'RSA'
        });

        let params = ali.wapPay({
            subject: '测试商品',
            body: '测试商品描述',
            outTradeId: outTradeId,
            timeout: '10m',
            amount: '0.01',
            goodsType: '0'
        });
        console.log(params);

    }
}

module.exports = HomeController;
