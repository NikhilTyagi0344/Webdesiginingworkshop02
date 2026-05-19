let fontSize = 24;

function changeHeading()
{
let text = document.getElementById("textInput").value;
document.getElementById("heading").innerText = text;
}

function changeBackground()
{
document.body.style.backgroundColor = "lightblue";
}

function increaseFont()
{
fontSize = fontSize + 2;
document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph()
{
let para = document.getElementById("para");

if(para.style.display === "none")
{
para.style.display = "block";
}
else
{
para.style.display = "none";
}
}

function resetPage()
{
location.reload();
}