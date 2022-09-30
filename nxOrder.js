var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    let info = obj['data'];

    let key = ['配送费', '满赠优惠']
    let total = 0

    // 处理拼单
    if (info.pieceOrderItems) {
        info.shareOrderStatus = 'SINGLE'
        info.orderItems = info.pieceOrderItems.reduce((prev, next) => prev.concat(next.orderItems), [])
    }

    info.orderItems.forEach(i => {
        i.isLineAction = false
        i.price = i.originalPrice
        total += Number(i.totalAmount.replace('¥', ''))
    })

    info.amountLabels = info.amountLabels.filter(i => key.includes(i.name))

    info.amountLabels.some(i => i.name === '配送费') && (total += 5)

    info.amountLabels.push({
        "name": "实付",
        "value": `¥${total.toFixed(2)}`,
        "color": "#000000",
        "copyFlag": false
    })
}

body = JSON.stringify(obj);

$done(body);