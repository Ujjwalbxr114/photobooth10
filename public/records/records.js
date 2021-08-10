// use fetch to get
async function getData(){
    const response = await fetch('/api');
    const data = await response.json();
    for (item of data) {
        const root = document.createElement('p'); 
        root.style.margin='10px';
        const mood = document.createElement('div'); 
        const geo = document.createElement('div');
        const date = document.createElement('div');
       const br = document.createElement('br');
        const image = document.createElement('img');
        image.style.border = '2px solid black';
        // image    .elt.setAttribute('id', 'vid');
        image.setAttribute("id", "Div1");
       
        
       
        

       

        mood.textContent = `Mood: ${item.mood}`; 
        // geo.textContent = `Where: ${item.lat.toFixed(2)}°, ${item.lon.toFixed(2)}°`;
        // convert timestamp string into local time
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = `When: ${dateString}`;
        // show image which is encoded by base64
        image.src = item.image64;

        root.append(image);
        // document.body.append(root);
        document.getElementById('container').append(root);
    };
    console.log(data);
};
getData();

const button = document.getElementById('clear');
button.addEventListener('click', async event => {
    const options = {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
    };
    const response = await fetch('/api/clear', options);
    const json = await response.json();
    console.log(json);
    location.reload(); //once all deleted, refresh page automatically
});



