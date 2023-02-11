let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    if (outputScreen.value = eval(outputScreen.value)) {
       
    }else return false;
}

function Clear() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}