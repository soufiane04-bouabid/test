document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-skill-form");
    const skillsList = document.getElementById("skills-list");

    let skills = JSON.parse(localStorage.getItem("skills")) || [];
    let editingSkillId = null; 

    
    skills.forEach(displaySkill);

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nom = document.getElementById("nom").value;
        const description = document.getElementById("description").value;
        const niveau = document.getElementById("niveau").value;

        if (editingSkillId !== null) {
            // Update the existing skill
            const skillIndex = skills.findIndex(skill => skill.id === editingSkillId);
            skills[skillIndex] = { id: editingSkillId, nom, description, niveau };

            localStorage.setItem("skills", JSON.stringify(skills));
            refreshSkills();
            editingSkillId = null;
        } else {
            // Add a new skill
            const skill = { id: Date.now(), nom, description, niveau };
            skills.push(skill);

            localStorage.setItem("skills", JSON.stringify(skills));
            displaySkill(skill);
        }

        form.reset(); // Clear the form
    });

    // Display a skill
    function displaySkill(skill) {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.dataset.id = skill.id;

        skillCard.innerHTML = `
            <div class="skill-details">
                <h3>${skill.nom}</h3>
                <p>${skill.description || "Aucune description"}</p>
                <span>Niveau : ${skill.niveau}</span>
            </div>
            <div class="skill-actions">
                <button class="edit-btn">Modifier</button>
                <button class="delete-btn">Supprimer</button>
            </div>
        `;

        // Add event listeners for edit and delete buttons
        skillCard.querySelector(".edit-btn").addEventListener("click", () => prefillForm(skill));
        skillCard.querySelector(".delete-btn").addEventListener("click", () => deleteSkill(skillCard, skill.id));

        skillsList.appendChild(skillCard);
    }

    // Prefill the form for editing
    function prefillForm(skill) {
        document.getElementById("nom").value = skill.nom;
        document.getElementById("description").value = skill.description;
        document.getElementById("niveau").value = skill.niveau;

        editingSkillId = skill.id; // Store the ID of the skill being edited
    }

    // Delete a skill
    function deleteSkill(skillCard, id) {
        skills = skills.filter(skill => skill.id !== id);
        localStorage.setItem("skills", JSON.stringify(skills));
        skillCard.remove();
    }

    // Refresh the displayed skills
    function refreshSkills() {
        skillsList.innerHTML = "";
        skills.forEach(displaySkill);
    }
});
