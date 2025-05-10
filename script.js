<<<<<<< HEAD
let butt = document.querySelector("#addButt")
let inp = document.querySelector("#inp")

let task = document.querySelector("#tasks")
// let untick = document.querySelector("#imggg")



butt.addEventListener("click",function dd(){

    if(inp.value === ""){
        alert("No value entered")
        
    }else{


        let nDiv = document.createElement("div")
    task.prepend(nDiv)
    nDiv.id="nDiv"


let newEl = document.createElement("h3");
    newEl.id="newEl"
    nDiv.prepend(newEl)

    let newImg = document.createElement("img")
    newImg.src="images/empty.svg"
    newImg.id="newImg"
    nDiv.insertBefore(newImg,newEl)


    
    let newcross = document.createElement("img")
    newcross.id="crossId"
    newcross.src="images/cross.svg"
    nDiv.append(newcross)

    let val = inp.value
    newEl.innerText=val
    inp.value=""



newImg.addEventListener("click",function dessd(){
        
        if(newImg.src .includes("images/empty.svg")){
            newImg.src="images/tick.svg"
            newEl.style.textDecoration="line-through"
        }else if (newImg.src.includes("images/tick.svg")){
            newImg.src ="images/empty.svg"
            newEl.style.textDecoration="none"
        }
        
    }
)

newcross.addEventListener("click",function def(){
    nDiv.remove()
})


    }

})
    
//GSAP
let tl = gsap.timeline()
tl.from("#card",{
    opacity:"0",
    y:50,
    duration:.8,
    delay:.4,
})

tl.from("#head",{
    opacity:0,
    x:50,
    duration:.4,
})

tl.from(".inp",{
    opacity:0,
    x:50,
    duration:.4,
})






=======
let butt = document.querySelector("#addButt")
let inp = document.querySelector("#inp")

let task = document.querySelector("#tasks")
// let untick = document.querySelector("#imggg")



butt.addEventListener("click",function dd(){

    if(inp.value === ""){
        alert("No value entered")
        
    }else{


        let nDiv = document.createElement("div")
    task.prepend(nDiv)
    nDiv.id="nDiv"


let newEl = document.createElement("h3");
    newEl.id="newEl"
    nDiv.prepend(newEl)

    let newImg = document.createElement("img")
    newImg.src="images/empty.svg"
    newImg.id="newImg"
    nDiv.insertBefore(newImg,newEl)


    
    let newcross = document.createElement("img")
    newcross.id="crossId"
    newcross.src="images/cross.svg"
    nDiv.append(newcross)

    let val = inp.value
    newEl.innerText=val
    inp.value=""



newImg.addEventListener("click",function dessd(){
        
        if(newImg.src .includes("images/empty.svg")){
            newImg.src="images/tick.svg"
            newEl.style.textDecoration="line-through"
        }else if (newImg.src.includes("images/tick.svg")){
            newImg.src ="images/empty.svg"
            newEl.style.textDecoration="none"
        }
        
    }
)

newcross.addEventListener("click",function def(){
    nDiv.remove()
})


    }

})
    









>>>>>>> 42f2e0692632733c76677c0ccebf3eb0e2824f65
