var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data'] && obj['data']['orderInfo']) {
    let info = obj['data']['orderInfo'];
    info['activity'] = [];
    info['packagePayment'] = null;
    info['orderUserRightsList'] = [];

    // 外卖
    if (info['pickup_type'] === '外卖') {
        let fee = Number(info['deliveryDiscount']['deliveryOriginFee']); // 基础费用
        let nFee = Number(info['deliveryDiscount']['deliveryNightIncreaseFee']); // 夜间加价
        info['delivery_fee'] = fee + nFee;
        info['payment'] = Number(info['total_fee']) + fee + nFee;
    } else {
        info['delivery_fee'] = '0.00';
        info['payment'] = info['total_fee'];
    }

    // 拼单
    info['showPaymentDetails'] = null;
    info['spell_unique_id'] = null;
    info['spell_user_info'] = null;

    // 计价
    let bFee = Number(info['box_fee'])
    if (bFee) info['payment'] = Number(info['payment']) + bFee
    info['discount_fee'] = '0.00';
    info['coupon_fee'] = '0.00';

    // 退款
    if (!info['button'].some(i => i.code === 'apply_refund')) {
        info['button'].push(
            {
                code: 'apply_refund',
                describe: '申请退款'
            }
        )
    }

}

body = JSON.stringify(obj);

$done(body);
