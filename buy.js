var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
    obj['data']['activityWaitTime'] = 0;
    obj['data']['active'] = true;
}

body = JSON.stringify(obj);

$done(body);