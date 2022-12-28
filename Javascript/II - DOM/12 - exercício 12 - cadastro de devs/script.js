const addTechnologyButton = document.getElementById("add-technology");
addTechnologyButton.addEventListener("click", addTechnology);
const saveButton = document.getElementById('save')
saveButton.addEventListener("click", save);
let technologyNumber = 1
const devs = []

function addTechnology() {
    const technologiesSection = document.getElementById("technologies");

    const newTechnology = document.createElement("div");
    newTechnology.className = `new-technology-${technologyNumber}`;

    const technologyNameLabel = document.createElement("span");
    technologyNameLabel.innerHTML = `<label for="technology-name-${technologyNumber}">Tecnologia: </label>`;
    const technologyName = document.createElement("input");
    technologyName.type = "text";
    technologyName.name = "technology-name";
    technologyName.id = `technology-name-${technologyNumber}`;

    const inputRadio02 = document.createElement("input");
    inputRadio02.type = "radio";
    inputRadio02.name = `experience-time-${technologyNumber}`;
    inputRadio02.id = `0-2years-${technologyNumber}`
    inputRadio02.value = '0-2 years'
    const radio02Label = document.createElement("span");
    radio02Label.innerHTML = `<label for="0-2years-${technologyNumber}">0-2 anos </label>`;

    const inputRadio34 = document.createElement("input");
    inputRadio34.type = "radio";
    inputRadio34.name = `experience-time-${technologyNumber}`;
    inputRadio34.id = `3-4years-${technologyNumber}`
    inputRadio34.value = '3-4 years'
    const radio34Label = document.createElement("span");
    radio34Label.innerHTML = `<label for="3-4years-${technologyNumber}">3-4 anos </label>`;

    const inputRadio5 = document.createElement("input");
    inputRadio5.type = "radio";
    inputRadio5.name = `experience-time-${technologyNumber}`;
    inputRadio5.id = `5+years-${technologyNumber}`
    inputRadio5.value = '5+ years'
    const radio5Label = document.createElement("span");
    radio5Label.innerHTML = `<label for="5+years-${technologyNumber}">5+ anos </label>`;

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Remover tecnologia'
    deleteButton.addEventListener('click', function(){
        newTechnology.remove()
    })

    newTechnology.append(technologyNameLabel, technologyName, inputRadio02, radio02Label, inputRadio34, radio34Label, inputRadio5, radio5Label, deleteButton);
    technologiesSection.appendChild(newTechnology)
    
    technologyNumber++
}

function save(){
    let name = document.getElementById('name').value
    let tecnologies = ''

    for(x = 1 ; x <= technologyNumber; x++){
        let tecnology = document.querySelectorAll(`input#technology-name-${x}`)
        let experience = document.querySelectorAll(`input[name="experience-time-${x}"]`)
        tecnologies += `Tecnologia: ${tecnology.value}; Experiência: ${experience.value}\n`
    }
    devs.push({name, tecnologies})
    console.log(devs)
}