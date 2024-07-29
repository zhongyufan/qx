var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj['data']) {
	obj['data']['pre_sale_time'] = '2022-07-25 18:00:00';
}

body = JSON.stringify(obj);

$done(body);
