/* add Year to footer*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = ` Volha Padlipskaya &#169; ${thisYear}`;
footer.appendChild(copyright);

/* add Skills */
const Skills = ['Java Script', 'CSS', 'HTML', 'Git Hub', 'Adobe Photoshop', 'UI/UX', 'ABAP-4', 'SAP/ERP', 'Delphy'];
const SkillsSection = document.getElementById('Skills');
const skillsList = SkillsSection.querySelector('ul');
for (let i = 0; i < Skills.length; i++) {
    let MySkills = document.createElement('li');
    MySkills.innerHTML = Skills[i];
    skillsList.appendChild(MySkills);
}