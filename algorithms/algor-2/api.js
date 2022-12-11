
const WAIFU_URL = 'http://localhost:8010/proxy/random';
fetch(WAIFU_URL)
    .then(res => res.json())
    .then(result => {
       let img = document.createElement('img');
       img.src = result.images[0].url
       img.style.width = '500px';
	   img.style.height = '500px';
       document.querySelector('body').appendChild(img)
    })