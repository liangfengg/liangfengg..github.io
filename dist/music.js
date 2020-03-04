const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Try",
        artist: 'Colbie Caillat',
        url: 'http://m10.music.126.net/20200303162150/beb37fa7a90ef85ce3a309926d835f64/ymusic/aa92/eef3/8798/4609a34d085eba915a708b5b1ebe472a.mp3',
        cover: 'https://p2.music.126.net/QBQvSe84znaWIm2PrhQ_ng==/5930765720512200.jpg?param=130y130',
      },
      {
        name: '一棵会开花的树',
        artist: '谢春花',
        url: 'http://m10.music.126.net/20200303163805/7ee0242f31928691f2d503659e5bd747/ymusic/6f33/13b5/ef91/5076e71706f2807fb50d8638e5fb3082.mp3',
        cover: 'https://p1.music.126.net/bbQqsr9hvVPTpDVmqnPaUw==/109951163345567967.jpg?param=130y130',
      }
    ]
});