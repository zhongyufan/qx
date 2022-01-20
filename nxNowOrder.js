var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data'] && obj['data']['orders']) {
    let orders = obj['data']['orders'];

    orders.forEach(o => {
        let info = o;

        let arr = []
        let total = 0

        info.amountLabels.forEach(i => {
            if (i.name === '配送费') {
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
    })

}

body = JSON.stringify(obj);

$done(body);