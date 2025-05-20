/* add Year to footer*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = ` &#169; Volha Padlipskaya  ${thisYear}`;
footer.appendChild(copyright);

/* add Skills */
const Skills = [
  "Java Script",
  "CSS",
  "HTML",
  "Git Hub",
  "Adobe Photoshop",
  "UI/UX",
  "ABAP-4",
  "SAP/ERP",
];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < Skills.length; i++) {
  let MySkills = document.createElement("li");
  MySkills.innerHTML = Skills[i];
  skillsList.appendChild(MySkills);
}

/*script for burger menu*/ 
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
        document.querySelector('.navbar').classList.toggle('open'); 
})

/* Message form */
const messageForm = document.querySelector('form[name = "leave_message"]');

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const messages = event.target.usersMessage.value;

    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", messages);

    /* Display message */
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href = "mailto: ${email}" > ${name} </a>
    <span>left a message: ${messages}</span>`;
    messageList.setAttribute('id', 'newMessage');

    /* Create/Remove button */
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.setAttribute('id', 'removeB');
    removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();
    });

    /* create Edit button */
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.setAttribute('id', 'editB');
    editButton.addEventListener("click", (event) => {
    const updatedMessage = prompt("edit");
    let editedMessage = newMessage.querySelector("span");
    editedMessage.textContent = `left a message: ${updatedMessage}`;
});   

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
messageSection.style.display = "block";
messageForm.reset();
})


