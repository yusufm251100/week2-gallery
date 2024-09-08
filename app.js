console.log("hello");
let images = [
    {
        src:"https://images.unsplash.com/photo-1477511801984-4ad318ed9846?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "lavender",
        width:300,
        height:200,
    },
    {
        src:"https://images.unsplash.com/photo-1444894423756-1bb106dce5a7?q=80&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "sunflowers",
        width:300,
        height:200,
    },
]

const thumbnailContainer = document.getElementById('thumbnail-container');
const mainImageContainer = document.getElementById('main-image-container');

function createThumbnails(images) {
    images.forEach((image, index) => {
        const newImg = document.createElement("img");
        console.log(newImg);

newImg = src

thumbnail-container.appendChild(newImg);
createThumbnails(images);

        const thumbnailContainer = document.querySelector(".thumbnail-container");
  

    myButton.addEventListener("click",



    thumbnailContainer.forEach(function (thumbnail, index) {
      //a document method to create a DOM element to contain my image information(<img>)
      //assign a value to the img attributes (src, alt, width, height) --> img.src = "value"
      //optional: you can also give each image a classname
      //append the new images to the DOM container
      //add an event listener to each image, so when the user clicks, the big image shows on the screen
      //function eventHandler(){
      //when the user clicks the image,we are going to call the function that creates the big image
      createLargeImage(thumbnail[index]);
      // }
      //thumbnail.addEventListener("click", eventHandler)
    });
  }
  
  // STEP 3: we need to write a function to create the big image
function createLargeImage(largeImage) {
    //!you will find a problem here: your images will keep adding one after the other
    //innerHTML = ""
    //create an img element
    //(optional) you could give this large image a classname
  //set the src value
  //set the alt value
  //append the large img to the DOM
}

//In case you find reference code elsewhere
//This code I found on stackoverflow and it works for my app. Can you give me help understanding why?