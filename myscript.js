/* global document,window,localStorage */
var dogImg = document.querySelector('img');
dogImg.onclick = function()
{
    var img = dogImg.getAttribute('src');
    if(img === 'images/webdevboi.jpg')
        dogImg.setAttribute('src','images/webdevimg.jpg');
    else
        dogImg.setAttribute('src','images/webdevboi.jpg')
};
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName()
{
    var myName = window.prompt('Please state your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello , ' + myName + '!';
}
if(!localStorage.getItem('name'))
    setUserName;
else
    {
        var storedname = localStorage.getItem('name');
        myHeading.textContent = 'Hello , ' + storedname
    }
nameButton.onclick = function()
{
    setUserName();
}