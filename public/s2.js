
let video;

function setup(){
    let canv =  createCanvas(280,280);
    // canv.style(100);
    canv.elt.setAttribute('id', 'can');
    // canv.style.position = 'fixed';
   const video = createCapture(VIDEO);
//    video.hide();
   pixelDensity(2);
    video.elt.setAttribute('id', 'vid');
    video.size(width,height);
    video.style.marginBottom = "14%";
    video.parent('#container'); 
    imageMode(CENTER);
    
    const button = document.getElementById('submit');
 

    button.addEventListener('click', async event => {
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
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

  function draw(){
    background(200)
     push();
    // translate(video.width,height);  ---
    translate(video);
    scale(-1.0,1.0);
    var aspectRatio = video.height/video.width;
    var h = width* aspectRatio;
     image(video, 0, 0, width, h);
    // image(video, 0, 0,width, h);
    pop();
}


  