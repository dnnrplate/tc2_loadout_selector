const logo = "https://i.postimg.cc/tJfrtfZK/tc2-logo.webp";

const classes = [
{
name:"Flanker",
icon:"https://i.postimg.cc/J0gTcgH0/flanker-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Trooper",
icon:"https://i.postimg.cc/vTjPLjxZ/trooper-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Arsonist",
icon:"https://i.postimg.cc/2yJHFJL5/arsonist-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Annihilator",
icon:"https://i.postimg.cc/3N6LC60J/annihilator-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Brute",
icon:"https://i.postimg.cc/kGZjFZR4/brute-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Mechanic",
icon:"https://i.postimg.cc/fyFHjFSD/mechanic-icon.webp",
slots:["Primary","Secondary","Melee","PDA"]
},
{
name:"Doctor",
icon:"https://i.postimg.cc/HnKS4K8m/doctor-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Marksman",
icon:"https://i.postimg.cc/gj5Mq5LW/marksman-icon.webp",
slots:["Primary","Secondary","Melee"]
},
{
name:"Agent",
icon:"https://i.postimg.cc/7hcBMcJD/agent-icon.webp",
slots:["Revolver","Sapper","Knife","Watch"]
}
];

const stockWeapons = {
Primary:["Stock"],
Secondary:["Stock"],
Melee:["Stock"],
PDA:["Stock"],
Revolver:["Stock"],
Knife:["Stock"],
Watch:["Stock"],
Sapper:["Stock"]
};

const grid = document.getElementById("classGrid");
const weaponDiv = document.getElementById("weaponSlots");
const classTitle = document.getElementById("classTitle");

classes.forEach(cls=>{

const card=document.createElement("div");
card.className="classCard";

card.innerHTML=`
<img src="${cls.icon}">
<h3>${cls.name}</h3>
`;

card.onclick=()=>showClass(cls);

grid.appendChild(card);

});

function showClass(cls){

classTitle.textContent=cls.name;

weaponDiv.innerHTML="";

let save = JSON.parse(localStorage.getItem(cls.name) || "{}");

cls.slots.forEach(slot=>{

const div=document.createElement("div");
div.className="weapon";

const select=document.createElement("select");

stockWeapons[slot].forEach(item=>{

const option=document.createElement("option");

option.textContent=item;

option.value=item;

select.appendChild(option);

});

select.value=save[slot] || "Stock";

select.onchange=()=>{

save[slot]=select.value;

localStorage.setItem(cls.name,JSON.stringify(save));

};

div.innerHTML=`
<img src="${logo}">
<h3>${slot}</h3>
`;

div.appendChild(select);

weaponDiv.appendChild(div);

});

}