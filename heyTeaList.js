var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data'] && obj['data']['records']) {
    let records = obj['data']['records'];

    records.forEach(i => {
        if (i['button'].length === 0) {
            i['button'] = [
                {
                    code: 'buy_again',
                    describe: 'εζ₯δΈε'
                }
            ]
        }
    })
}

body = JSON.stringify(obj);

$done(body);
