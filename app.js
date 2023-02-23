const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f50491bdaamsh5a42712bde28b3ap1c4454jsnfaae9c0a4e7c',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Vietnam', options)
	.then(data => data.json())
	.then(data => console.log(data))
     .then(display => {
          display && display.map((data => 
               {
               document.getElementById("fetch").innerHTML = 
               `<div class="covid">
                    <p class="confirmed">${data.confirmed}</p>
               </div>`
               }
          ));
     });