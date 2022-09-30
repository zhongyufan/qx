var body = $response.body;
var obj = JSON.parse(body);

$notify('盒子内容', '', obj.data)
$done();
