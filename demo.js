

initPlayers();



function initPlayers() {
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        video: {
            url: 'https://linqin-1252236879.file.myqcloud.com/VID_20191114_171850_9.mp4',
        },
    });


}
