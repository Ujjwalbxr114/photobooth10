

function setup(){

    // let lat, lon;
    // P5JS: get video from computer's webcam
    noCanvas();
   const video = createCapture(VIDEO);
    video.elt.setAttribute('id', 'vid');
    video.size(width, height);
    video.style.marginBottom = "14%";
    
    
  // video.border(4);
    video.parent('container') // move video webcam screen into specific div
    
    const button = document.getElementById('submit');
    // const photoFilter =document.getElementById('photo-filter');

    button.addEventListener('click', async event => {
        // const mood = document.getElementById('mood').value;
        // alert P5JS to load the video's pixel, so I can then convert it to base64 string.
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        // send Json data to server
        const data = { image64};
        const options = {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // json stringified text
        };

        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
        alert('Submit Success!'); // a pop up window to show user records submitted!
      });
  };


///

  
  
  // function draw() {
  //   tint(255, 0, 150);
  //   image(video, 0, 0,0, height);
  // }

  
  

  