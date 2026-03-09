const container = document.getElementById("notesContainer")
const addBtn = document.getElementById("addBtn")
const search = document.getElementById("search")
const exportBtn = document.getElementById("exportBtn")
const darkBtn = document.getElementById("darkBtn")

let notes = JSON.parse(localStorage.getItem("notes")) || []

const colors = ["yellow","pink","blue","green"]

function save(){
localStorage.setItem("notes",JSON.stringify(notes))
}

function render(filter=""){

container.innerHTML=""

notes
.filter(n => 
n.title.toLowerCase().includes(filter) ||
n.text.toLowerCase().includes(filter)
)

.sort((a,b)=> b.pinned - a.pinned)

.forEach((note,index)=>{

const card=document.createElement("div")
card.className=`note ${note.color}`
card.draggable=true

card.ondragstart=e=>{
e.dataTransfer.setData("index",index)
}

card.ondrop=e=>{
let from=e.dataTransfer.getData("index")
let temp=notes[from]
notes[from]=notes[index]
notes[index]=temp
save()
render()
}

card.ondragover=e=>e.preventDefault()

const title=document.createElement("input")
title.value=note.title

title.oninput=()=>{
notes[index].title=title.value
save()
}

const text=document.createElement("textarea")
text.value=note.text

text.oninput=()=>{
notes[index].text=text.value
save()
}

const actions=document.createElement("div")
actions.className="actions"

const del=document.createElement("span")
del.innerHTML="🗑"
del.className="delete"

del.onclick=()=>{
notes.splice(index,1)
save()
render(search.value)
}

const pin=document.createElement("span")
pin.innerHTML= note.pinned ? "📌" : "📍"
pin.className="pin"

pin.onclick=()=>{
notes[index].pinned=!notes[index].pinned
save()
render()
}

actions.appendChild(pin)
actions.appendChild(del)

card.appendChild(title)
card.appendChild(text)
card.appendChild(actions)

container.appendChild(card)

})

}

addBtn.onclick=()=>{

notes.push({
title:"New Note",
text:"",
color:colors[Math.floor(Math.random()*colors.length)],
pinned:false
})

save()
render()

}

search.oninput=()=>{
render(search.value.toLowerCase())
}

/* EXPORT NOTES */

exportBtn.onclick=()=>{

const dataStr="data:text/json;charset=utf-8,"+
encodeURIComponent(JSON.stringify(notes))

const a=document.createElement("a")
a.href=dataStr
a.download="notes.json"
a.click()

}

/* DARK MODE */

darkBtn.onclick=()=>{
document.body.classList.toggle("dark")
localStorage.setItem("dark",
document.body.classList.contains("dark"))
}

if(localStorage.getItem("dark")==="true"){
document.body.classList.add("dark")
}

render()
