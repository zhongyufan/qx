var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    obj['data']['is_actived'] = true;
}

body = JSON.stringify(obj);

$done(body);