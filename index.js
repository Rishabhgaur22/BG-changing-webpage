let body = document.querySelector("body");
let color = "white";

let colorPicker = document.getElementById("inputbox");
colorPicker.addEventListener("change", function() {
    let selectedColor = colorPicker.value;  // The selected color value (e.g., #ff0000)
    if(selectedColor == "#000000"){
        document.querySelector("h1").style.color = "white";
        document.querySelector("h3").style.color = "white";
    }
    else{
    document.querySelector("h1").style.color = "black";
    document.querySelector("h3").style.color = "black";
    }
    document.body.style.backgroundColor = selectedColor;  // Change background color
});


function ChangeColor(id){
    switch (id){
        case 1:
            color = "red";
            break;
        case 2:
            color = "yellow";
            break;
        case 3:
            color = "blue";
            break;
        case 4:
            color = "magenta";
            break;
        case 5:
            color = "rgb(21, 203, 154)";
            break;
        case 6:
            color = "#42ff13"
            break;
        case 7:
            color = "#00c3ff";
            break;
        case 8:
            color = "#9595fd";
            break;
        case 9:
            color = "#19ffd5";
            break;
        case 10:
            color = "c300ff";
            break;
    }

    body.style.backgroundColor = color;        
}
