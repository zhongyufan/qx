var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data'] && obj['data']['records']) {
    let records = obj['data']['records'];

    records.forEach(i => {
        i['button'] = [
            {
                code: 'buy_again',
                describe: '再来一单'
            }
        ]
    })
}

body = JSON.stringify(obj);

$done(body);
