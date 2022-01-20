var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    obj['data'] = []
}

body = JSON.stringify(obj);

$done(body);
