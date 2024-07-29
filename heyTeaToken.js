var headers = $request.headers;
var cacheToken = $prefs.valueForKey("HEYTEA_TOKEN");
var token = headers.Authorization;
$prefs.setValueForKey(token, "HEYTEA_TOKEN");
if (token !== cacheToken) {
	$notify("获取喜茶token成功", "", token);
}

$done();
