var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    obj['data']['isStar'] = true;
    obj['data']['isRenew'] = true;
}

body = JSON.stringify(obj);

$done(body);