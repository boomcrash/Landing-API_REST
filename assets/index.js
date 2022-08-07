const API='https://youtube-v31.p.rapidapi.com/search?channelId=UC23F8gnq63KA9numoB3ODvg&part=snippet%2Cid&order=date&maxResults=5';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07e9688475msh0fc7970a68a3871p116595jsndf506e7faa09',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;
}

const content=document.getElementById('contenedor');
const urlYt="https://www.youtube.com/embed/";
(async () => {
    try{
        const videos=await fetchData(API);
        let bloque=`${videos.items.map(
            video => `<div><iframe src="${urlYt}${video.id.videoId}?autoplay=1&mute=1"></iframe>
            <label><strong>${video.snippet.title}</strong></label></div>
                    `).slice(0,4).join('')}`;
        content.innerHTML=bloque;
    }catch(error){
        console.error(error);
    }
})();

