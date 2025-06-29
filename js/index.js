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
/* hiden Messages section until submit a message there */
messages.style.display = "none";
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

    /*hide message section after remove all messages*/
      if (messageList.childElementCount === 0) {
        messageSection.style.display = "none";
      }
    })

    /* create Edit button */
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.setAttribute('id', 'editB');
    editButton.addEventListener("click", (event) => {
        const updatedMessage = prompt("Edit your message");
        let editedMessage = newMessage.querySelector("span");
        editedMessage.textContent = `left a message:    ${updatedMessage}`;
});   

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
messageSection.style.display = "block";
messageForm.reset();                     /*clear form */
})

/* fetch API  */
    fetch("https://api.github.com/users/volha83/repos")
    .then(response => response.json())
    .then((repositories) => {
          const projectSection = document.getElementById("Projects");
          const projectList = projectSection.querySelector("ul");
          for (let i = 0; i < repositories.length; i++) {
            console.log(repositories);
            console.log(repositories[i].name);
            const project = document.createElement("li");  /* name of project from my repositiry GitHub*/
            const title = document.createElement("p");    /* description (ReadMe file info) from my repositiry GitHub*/
            const date = document.createElement("p");    /* date of created from my repositiry GitHub*/
            console.log(date);
            
console.log("creatDate:", repositories[i].created_at);
/* convert date to format mm/dd/yyyy */
const newDate = repositories[i].created_at;
const day = newDate.slice(8,10);
const month = newDate.slice(5,7);
const year = newDate.slice(0,4);
const ourDate = `${month}/${day}/${year}`;
console.log(ourDate);

            title.innerHTML = `<p> ${repositories[i].description} </p>`; 
            // date.innerHTML = `<p> created at: ${repositories[i].created_at} </p>`
            date.innerHTML = `<p> <span>created at:</span> ${ourDate} </p>`
            project.innerHTML = `<a href = "${repositories[i].html_url}" target="_blank"> link to my project: <span> ${repositories[i].name} </span> </a>`
            
            projectList.appendChild(title);
            projectList.appendChild(date);
            projectList.appendChild(project);
            project.setAttribute('id', 'myProjects');  /* for styles media.css - name Projects from  GitHub */
            title.setAttribute('id', 'descrProject');
            date.setAttribute('id', 'dateProject');
          }
        
    })
  .catch(error => {
    console.error("Error fetching repositories:", error);
    projectList.textContent = "Sorry, we couldn’t load your projects. Please try again later.";
  });

