let body = $response.body;
let obj = JSON.parse(body);

obj.data.list.forEach(i => i.sellLimit = Number((i.priceCny * 1.04).toFixed(2)))
body = JSON.stringify(obj);

$done(body);