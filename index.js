const start = () => {
    const myTimer = document.getElementById('myTimer'),
    time = myTimer.innerHTML,
    a = time.split(':');
    let h = a[0],
    m = a[1],
    s = a[2];
    if(s == 0) {
        if(m == 0) {
            if(h == 0) {
                alert('TimeOut');
                window.location.reload();
                return
            }
            h--;
            m = 60;
            h < 10 ? h = '0'+h : h
        }
        m--;
        m < 10 ? m = '0'+m : m;
        s = 59;
    } else
    s--;
    s < 10 ? s='0'+s : s
    myTimer.innerHTML = h+':'+m+':'+s
    setTimeout(start, 1000);
}
start();