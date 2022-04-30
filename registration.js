const Consumer_key = 'ck_934a04dcbbb51c850487ec382b9c9ba7be5e97b1';
const Consumer_secret = 'cs_3f881ab2f8ded6676babf263a2e7f0f5a6e545da';

const registration = async () =>{
    await fetch('https://instaaplan.com/wp-json/wc/v3/products', {
        method: 'GET',
        headers: {
            Consumer_key:Consumer_key,
            Consumer_secret:Consumer_secret,
        },
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

registration();



// ----------------------------------****-----------------------------------------
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// https://open.spotify.com/playlist/4937q7wMwMxaitIif1xlX2?si=BaAZnH0uRHunW7B4U8m5AQ

// spotify integration
// window.onSpotifyWebPlaybackSDKReady = () => {
//     const token = 'BQAK991bfq_eszngJ5jS0Jo5PQDQtD0wkJiXk1mq7VOAsfWDPEJ5Lq2VbGvvqG4v7dsOCRDrTyAmo1mRh4re5WaAwbJVYmlF-Fvl8qH_iw0547OkoXIPNDjprgalxQire0oFe-Xg3XtFoCXMp4Hy_JUk227e1K7KmQE5COllXfS3LBClYZLJJII';

//     const player = new Spotify.Player({
//         name: 'rawLive',
//         getOAuthToken: cb => { cb(token); },
//         volume: 0.5
//     });

//     // Ready
//     player.addListener('ready', ({ device_id }) => {
//         console.log('Ready with Device ID', device_id);
//     });

//     // Not Ready
//     player.addListener('not_ready', ({ device_id }) => {
//         console.log('Device ID has gone offline', device_id);
//     });

//     player.addListener('initialization_error', ({ message }) => { 
//         console.error(message);
//     });
  
//     player.addListener('authentication_error', ({ message }) => {
//         console.error(message);
//     });
  
//     player.addListener('account_error', ({ message }) => {
//         console.error(message);
//     });



//     document.getElementById('togglePlay').onclick = function() {
//         player.togglePlay();
//     };

//     player.connect();
// }



// ==================instaplan woocommerse API KEY=====================================
// Consumer key = ck_934a04dcbbb51c850487ec382b9c9ba7be5e97b1
// Consumer secret = cs_3f881ab2f8ded6676babf263a2e7f0f5a6e545da



// ==================instaplan smsto API KEY=====================================
// API_TOKEN = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGg6ODA4MC9hcGkvdjEvdXNlcnMvYXBpL2tleS9nZW5lcmF0ZSIsImlhdCI6MTY0NDY1MjgzMCwibmJmIjoxNjQ0NjUyODMwLCJqdGkiOiJCZW5xbzFjM1o2bE5EUDZ6Iiwic3ViIjozNDY0MzIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.GonQa_P3Gw1NHbBkI65BtPpRvHSwbR-lgVQQp2RWiAg