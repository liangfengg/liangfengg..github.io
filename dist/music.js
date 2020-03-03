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
        name: 'Free Loop',
        artist: 'Daniel Powter',
        url: 'http://m10.music.126.net/20200303163512/014ba117d8ac0d1d047508fe917196e1/ymusic/9dec/2b45/d34e/080dc66ffc465fd040d6e312b174f559.mp3',
        cover: 'https://p1.music.126.net/grGdswi38xUoYcDBISdKcg==/92358976750445.jpg?param=130y130',
      },
      {
        name: '一棵会开花的树',
        artist: '谢春花',
        url: 'http://m10.music.126.net/20200303163805/7ee0242f31928691f2d503659e5bd747/ymusic/6f33/13b5/ef91/5076e71706f2807fb50d8638e5fb3082.mp3',
        cover: 'https://p1.music.126.net/bbQqsr9hvVPTpDVmqnPaUw==/109951163345567967.jpg?param=130y130',
      },
      {
        name: 'Try Try Try',
        artist: 'Jason Mraz',
        url: 'http://m10.music.126.net/20200303164032/6b2e9296361aa27874038767d9f62ed9/ymusic/040f/040b/0309/3e92db8a313a2d8fc3ab4c2bbf66e723.mp3',
        cover: 'https://p1.music.126.net/EG3TlLCxPIQf1S055Q-D6g==/908196604592765.jpg?param=130y130',
      }
    ]
});