let index = 0
let token = [
    {
        name: '大号',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTc2MSIsInVzZXJfbWFpbl9pZCI6NTU3NjEsImNoYW5uZWwiOiJXIiwic291cmNlIjoiYXBpIiwiaXNfZ3Vlc3QiOmZhbHNlLCJsYWJlbCI6ImNsaWVudDphcHAiLCJpYXQiOjE2MzI2NzE5NDQsIm5iZiI6MTYzMjY3MTk0NCwiZXhwIjoxMTM2MDcwNzE5NDQsImlzcyI6ImhleXRlYSJ9.JcFdp6vf2zfgI8TyhIY2t5ETPHjLOBdt2EJZN0OTiKQ'
    },
    {
        name: '小号一',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDA1MDk5ODY0IiwidXNlcl9tYWluX2lkIjoxMjg1MTIsImNoYW5uZWwiOiJFIiwic291cmNlIjoiYXBpIiwiaXNfZ3Vlc3QiOmZhbHNlLCJsYWJlbCI6ImNsaWVudDphcHAiLCJpYXQiOjE2MzIzOTAxMjgsIm5iZiI6MTYzMjM5MDEyOCwiZXhwIjoxMTM2MDY3OTAxMjgsImlzcyI6ImhleXRlYSJ9.S1B2tbvS0Qxp-ZTt3jf6sHeV5IY7ujUWB2GGHGUBYWE'
    },
    {
        name: '小号二',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTM0MTciLCJ1c2VyX21haW5faWQiOjIxMzQxNywiY2hhbm5lbCI6IlciLCJzb3VyY2UiOiJhcGkiLCJpc19ndWVzdCI6ZmFsc2UsImxhYmVsIjoiY2xpZW50OmFwcCIsImlhdCI6MTYzNzcxNjgwNiwibmJmIjoxNjM3NzE2ODA2LCJleHAiOjExMzYxMjExNjgwNiwiaXNzIjoiaGV5dGVhIn0.73l_WvAUphA9x5rbux6QB6n_hksr4JujvPogTc3QVtw'
    },
    {
        name: '邓',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTUzMjU3IiwidXNlcl9tYWluX2lkIjozOTUzMjU3LCJjaGFubmVsIjoiVyIsInNvdXJjZSI6ImFwaSIsImlzX2d1ZXN0IjpmYWxzZSwibGFiZWwiOiJjbGllbnQ6YXBwIiwiaWF0IjoxNjQyNzYwNDcwLCJuYmYiOjE2NDI3NjA0NzAsImV4cCI6MTEzNjE3MTYwNDcwLCJpc3MiOiJoZXl0ZWEifQ.yfIIduwaW5zkViV7WjRTmWh5rFh8xn3r2FDqkBKC1X0'
    },
    {
        name: '一步之差',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzYwMjMzIiwidXNlcl9tYWluX2lkIjoxNzYwMjMzLCJjaGFubmVsIjoiVyIsInNvdXJjZSI6ImFwaSIsImlzX2d1ZXN0IjpmYWxzZSwibGFiZWwiOiJjbGllbnQ6YXBwIiwiaWF0IjoxNjQzNzcyNzk3LCJuYmYiOjE2NDM3NzI3OTcsImV4cCI6MTEzNjE4MTcyNzk3LCJpc3MiOiJoZXl0ZWEifQ.7aJkIPpFJCTtE1vAb-_hraJtqD7fGUYPyMw25Tmdy8A'
    }
]

var hd = $request.headers;
hd['Authorization'] = `Bearer ${token[index].token}`;

$done({ headers: hd });
