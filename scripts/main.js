const myImage = document.querySelector("img");

myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/budi.jpeg"){
        myImage.setAttribute("src", "images/doaflip.jpeg");
    } else{
        myImage.setAttribute("src", "images/budi.jpeg");
    }
    };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = 'hey ' + myName + ' welcome to my world';
    }
}
if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'hey ' + storedName +  ' welcome to my world';
}
myButton.onclick = function () {
    setUserName();
}