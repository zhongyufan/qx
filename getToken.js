var request = $request;
let token = request.headers['X-WX-Token'];

$prefs.setValueForKey(token, 'token');
$notify('获取熊猫内卖汇token成功', '', token);
$done();

let t = $prefs.valueForKey('token').replace('jsc2skp.', '')
$task
    .fetch({
        url: `http://1.12.37.3:9091/updateToken?name=${encodeURIComponent('熊猫内卖汇')}&token=${t}`,
    })
    .then(
        (res) => {
            $notify(res.body);
            $done();
        },
        (reason) => {
            $done();
        }
    );
