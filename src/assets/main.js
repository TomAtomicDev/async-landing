const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCL8w_A8p8P1HWI3k6PR5Z6w&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '464d685195mshba8dba5a9b3f5cep1c7c19jsn4c6e572f6d33',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

/* fetch(API, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json()
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view =`${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>     
        `).slice(0,4).join('')}
   
        `;
        console.log(view);
        
        content.innerHTML = view;
        console.log(content);
    } catch(err) {
        console.log(err);
    }
})();