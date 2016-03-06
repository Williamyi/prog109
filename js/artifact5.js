myPhotos = ["http://cdn.playbuzz.com/cdn/925704be-9b8e-4dfc-852e-f24d720cb9c5/bcf39e88-5731-43bb-9d4b-e5b3b2b1fdf2.jpg","https://wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_2560x1080.jpg","http://www.amaraholisticwellbeing.com/wp-content/uploads/2015/01/Fall-beautiful-nature-22666764-900-562.jpg","https://www.cse.iitb.ac.in/~pawangc/nature1.jpg","http://www.intrawallpaper.com/nature#static/images/1250654-for-laptop-nature.jpg"];
var i=0;
var slideShow = document.getElementById("newImage");

//Get elements from html

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

//Next function
function nextImage(){
 console.log("i: " + i);
 console.log("array: " + myPhotos.length);
 if (i < myPhotos.length-1)
 i++;
 else
 i=0;

 slideShow.src=myPhotos[i];


}

//Next function
function previousImage(){
 console.log("i: " + i);
 console.log("array: " + myPhotos.length);
 if (i === 0 )
 i=myPhotos.length-1;
 else
 i--;

 slideShow.src=myPhotos[i];


}

function autoRun(){
 if (document.getElementById("auto").checked)
 nextImage();

}

nextButton.addEventListener('click', nextImage,false);

previousButton.addEventListener('click', previousImage,false);

window.setInterval(autoRun,2000);
