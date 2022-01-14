var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data'] && obj['data']['orderInfo']) {
    let info = obj['data']['orderInfo'];
    info['activity'] = [];
    info['packagePayment'] = null;
    info['orderUserRightsList'] = [];

//     info['button'] = [
//         {
//             code: 'buy_again',
//             describe: '再来一单'
//         }
//     ];

    // 外卖
    if (info['pickup_type'] === '外卖') {
        let fee = info['deliveryDiscount']['deliveryOriginFee'];
        info['delivery_fee'] = fee;
        info['payment'] = Number(info['total_fee']) + Number(fee);
    } else {
        info['delivery_fee'] = '0.00';
        info['payment'] = info['total_fee'];
    }

    // 拼单
    info['showPaymentDetails'] = null;
    info['spell_unique_id'] = null;
    info['spell_user_info'] = null;

    // 计价
    info['box_fee'] = '0.00';
    info['discount_fee'] = '0.00';
    info['coupon_fee'] = '0.00';
}

body = JSON.stringify(obj);

$done(body);
