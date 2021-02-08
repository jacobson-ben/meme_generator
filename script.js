// Set up variables
let topTextInput, bottomTextInput, imageURL, submitButton, form;

// Inititialize (take in data from form)

let container = document.querySelector(".canvas-container");
form = document.querySelector(".input-form")

form.addEventListener('submit', function(event) {
    event.preventDefault();
        
    imageURL = document.querySelector("#url").value;
    if(!imageURL.includes("png") && !imageURL.includes("jpg") && !imageURL.includes("jpeg") && !imageURL.includes("gif")) {
        return alert("URL does not appear to be an image. Please include a link to a jpeg, jpg, png or gif file.");
    }

    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
        
    let img = document.createElement("img");
    img.src = imageURL;
    box.appendChild(img);
    let imgHeight = img.height;
    let imgWidth = img.width;
    console.log(imgHeight);
    console.log(imgWidth);
    box.height = imgHeight;
    box.width = imgWidth;

    let textBoxTop = document.createElement("div");
    textBoxTop.classList.add("textBoxTop");
    box.appendChild(textBoxTop)
        
    topTextInput = document.querySelector("#top").value;
    let topText = document.createElement("div");
    topText.innerText = topTextInput;
    textBoxTop.appendChild(topText);
    if(topTextInput.length >= 30) {
        topText.style.fontSize = "22px"
    }

    let textBoxBottom = document.createElement("div");
    textBoxBottom.classList.add("textBoxBottom");
    box.appendChild(textBoxBottom)

    bottomTextInput = document.querySelector("#bottom").value;
    let bottomText = document.createElement("div");
    bottomText.innerText = bottomTextInput;
    textBoxBottom.appendChild(bottomText);
    if(bottomTextInput.length >= 30) {
        bottomText.style.fontSize = "22px"
    }

    box.addEventListener('mouseover', function(e) {
        if(e.target.tagName === 'IMG') {
            let deleteButton = document.createElement("button");
            deleteButton.classList.add('deleteButton')
            deleteButton.innerText = "Delete";
            box.appendChild(deleteButton);
            deleteButton.style.position = "absolute";
            deleteButton.style.top = 0;
            deleteButton.style.right = 0;
            deleteButton.style.color = 'red';
            deleteButton.style.cursor = 'pointer';

            box.addEventListener('mouseout', function(e) {
                if(e.target.tagName === 'BUTTON') {
                   deleteButton.remove();
                }
            })
        }
    })

    box.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON') {
            box.remove()
        }
    })

    form.reset();
})



