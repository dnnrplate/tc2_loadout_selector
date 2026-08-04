const logo = "https://i.postimg.cc/tJfrtfZK/tc2-logo.webp";

const classes = [
    {
        name: "Agent",
        icon: "https://i.postimg.cc/7hcBMcJD/agent-icon.webp",
        slots: ["Revolver", "Sapper", "Knife", "Watch"]
    },
    {
        name: "Annihilator",
        icon: "https://i.postimg.cc/3N6LC60J/annihilator-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Arsonist",
        icon: "https://i.postimg.cc/2yJHFJL5/arsonist-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Brute",
        icon: "https://i.postimg.cc/kGZjFZR4/brute-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Doctor",
        icon: "https://i.postimg.cc/HnKS4K8m/doctor-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Flanker",
        icon: "https://i.postimg.cc/J0gTcgH0/flanker-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Marksman",
        icon: "https://i.postimg.cc/gj5Mq5LW/marksman-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    },
    {
        name: "Mechanic",
        icon: "https://i.postimg.cc/fyFHjFSD/mechanic-icon.webp",
        slots: ["Primary", "Secondary", "Melee", "PDA"]
    },
    {
        name: "Trooper",
        icon: "https://i.postimg.cc/vTjPLjxZ/trooper-icon.webp",
        slots: ["Primary", "Secondary", "Melee"]
    }
];


const classBar = document.getElementById("classBar");
const weaponSlots = document.getElementById("weaponSlots");
const classTitle = document.getElementById("classTitle");


const stockWeapons = [
    "Stock"
];


let currentButton = null;



classes.forEach(cls => {

    const button = document.createElement("button");

    button.className = "classButton";

    button.innerHTML = `
        <img src="${cls.icon}" alt="${cls.name}">
    `;


    button.onclick = () => {

        if(currentButton){
            currentButton.classList.remove("selected");
        }

        button.classList.add("selected");

        currentButton = button;

        showLoadout(cls);
    };


    classBar.appendChild(button);

});



function showLoadout(cls){

    classTitle.textContent = cls.name;

    weaponSlots.innerHTML = "";


    let saved =
        JSON.parse(localStorage.getItem(cls.name))
        || {};


    cls.slots.forEach(slot => {


        const card = document.createElement("div");

        card.className = "weapon";


        card.innerHTML = `

            <h3>${slot}</h3>

            <img src="${logo}" alt="Weapon">

        `;


        const select = document.createElement("select");


        stockWeapons.forEach(item => {

            const option =
                document.createElement("option");

            option.value = item;
            option.textContent = item;

            select.appendChild(option);

        });


        select.value =
            saved[slot] || "Stock";


        select.onchange = () => {

            saved[slot] =
                select.value;

            localStorage.setItem(
                cls.name,
                JSON.stringify(saved)
            );

        };


        card.appendChild(select);

        weaponSlots.appendChild(card);

    });

}