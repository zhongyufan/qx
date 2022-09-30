var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    let info = obj['data'];

    let arr = []
    let total = 0

    info.orderItems.forEach(i => i.isLineAction = false)

    info.amountLabels.forEach(i => {
        if (i.name === '支付方式') return
        if (i.name === '配送费' || i.name === '满赠优惠') {
            arr.push(i)
        } else {
            let val = i.value.replace(/-?¥+/, '')
            total += Number(val)
        }
    })

    let fact = info.amountLabels.pop()
    fact.value = '¥' + (total.toFixed(2))
    arr.push(fact)

    info.amountLabels = arr
}

body = JSON.stringify(obj);

$done(body);