// const image = document.getElementById('image_uploaded');
// const cropper = new Cropper(image, {
//     aspectRatio: 0,
//     viewMode: 0,
// });

// document.getElementById('cropImageBtn').addEventListener('click', 
// function(){

//   var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
//   alert(croppedImage);


//   document.getElementById('output').src = croppedImage;
// });


const b_1 = document.getElementById("bg_1");
b_1.addEventListener("click", changeBg1);
const b_2 = document.getElementById("bg_2");
b_2.addEventListener("click", changeBg2);
const b_3 = document.getElementById("bg_3");
b_3.addEventListener("click", changeBg3);


function changeBg1()
 {
  var bg1 = document.getElementById("b1").src;
  document.getElementById("image_uploaded").src = bg1;
  // alert(bg1);

 }
 function changeBg2()
 {
  var bg1 = document.getElementById("b2").src;
  document.getElementById("image_uploaded").src = bg1;
  // alert(bg1);

 }
 function changeBg3()
 {
  var bg1 = document.getElementById("b3").src;
  document.getElementById("image_uploaded").src = bg1;
  // alert(bg1);

 }



//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const element = document.getElementById("image_input");

element.addEventListener("change", myFunction);


const description = document.getElementById("upload_desc");
description.addEventListener("change", changeText);
description.addEventListener("keyup", changeText);

const color = document.getElementById("upload_color");
color.addEventListener("change", changeColor);
color.addEventListener("keyup", changeColor);
color.addEventListener("click", changeColor);


const font = document.getElementById("upload_font");
font.addEventListener("change", changeFont);
font.addEventListener("keyup", changeFont);

const font_size = document.getElementById("upload_fontsize");
font_size.addEventListener("change", changeFontSize);
font_size.addEventListener("keyup", changeFontSize);

function changeFontSize() {
  var fontsize = document.getElementById("upload_fontsize").value;
  document.getElementById("description").style.fontSize = fontsize+"px";

  console.log("fontsize: ", fontsize)
}


function changeFont() {
    var font = document.getElementById("upload_font").value;
    document.getElementById("description").style.fontFamily = font;

    
}

function changeColor() {
    var color = document.getElementById("upload_color").value;
    document.getElementById("description").style.color = color;

}

function changeText() {
  var text = document.getElementById("upload_desc").value;
  document.getElementById("description").innerHTML = text;

}
function myFunction() {
  var value = document.getElementById("image_input").value;
  value = value.replace("fake", "");
  value = value.replace("path", "");
  console.log(value);
  document.getElementById("image_uploaded").src=value;

}
