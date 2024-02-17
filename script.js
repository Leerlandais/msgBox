const myLegend = document.getElementById('myLegend');
const yourMessage = document.getElementById('yourMessage');
const warningP = document.getElementById('warningP');
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const lastMessage = localStorage.getItem("lastMessage");

if (!lastMessage) {
    myLegend.textContent = "You have left no messages yet";
    deleteButton.style.display = "none";
}else if (lastMessage) {
    myLegend.textContent = lastMessage;
    deleteButton.style.display = "";
}else {
    myLegend.textContent = "Something went wrong with the storage.get";
}

yourMessage.addEventListener("input", checkMessLength);
saveButton.addEventListener("click", saveMessage);
deleteButton.addEventListener("click", deleteMessage);

function checkMessLength() {
  let messToCheck = yourMessage.value;
    if (messToCheck.length > 50){
        warningP.textContent = 'Sorry, your message is too long, shorten it please';
        saveButton.style.display = "none";
    }else {
        warningP.textContent = "Your message is " + messToCheck.length + " characters long";
        saveButton.style.display = "";
    }
}


function saveMessage() {
    let addMessage = yourMessage.value;
    localStorage.setItem('lastMessage', addMessage);
    warningP.textContent = "Your message has been saved, I'll display it for you next time you visit this page. Have a nice day";
    deleteButton.style.display = "";
}

function deleteMessage() {
    localStorage.removeItem('lastMessage');
    myLegend.textContent = "Message Deleted";
    warningP.textContent = "Your message has been deleted. Feel free to leave another someday";
    deleteButton.style.display = "none";
}