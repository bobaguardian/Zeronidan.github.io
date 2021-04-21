let skills = document.getElementById('skills');
let skillsHeading = document.getElementById('skills-heading');


function toggleSkills() {
    if(skillsHeading.innerHTML === "Skills +"){
        console.log(skillsHeading.innerHTML);
        skills.style.visibility = 'visible';
        skillsHeading.innerHTML = "Skills -";
    }
    
 
    else{
        console.log(skillsHeading.innerHTML);
        skills.style.visibility = 'hidden';
        skillsHeading.innerHTML = "Skills +";
    }
}

skillsHeading.addEventListener('click', toggleSkills);