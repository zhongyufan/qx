var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    // obj['data']['data'] = obj['data']['data'].filter(i => i.status != 3)
    let arr = obj.data.data.filter(i => i.status != 3)
    if (arr.length < 3) {
        obj.data.data.splice(3)
    } else {
        obj.data.data = arr
    }
}

body = JSON.stringify(obj);

$done(body);