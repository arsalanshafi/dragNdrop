const shapes = [...document.querySelectorAll("li")];
const canvas = document.querySelector("#canvas");

shapes.forEach(shape => {
    shape.addEventListener("dragend", e => {
        let ele = e.target.firstElementChild.firstElementChild.tagName;
        paste(ele,e.clientX,e.clientY);
        // console.log(e.target.firstElementChild.firstElementChild.tagName)
    })
})

function paste(ele,x,y){
    let field = document.createElementNS('http://www.w3.org/2000/svg',"svg");
    field.setAttribute("width",100);
    field.setAttribute("height",100);
    let shape = document.createElementNS('http://www.w3.org/2000/svg',`${ele}`);
    shape.setAttribute("width",100);
    shape.setAttribute("height",100);
    shape.setAttribute("fill","rgb(0,255,191");
    field.style.position = "absolute";
    field.style.left = "50px";

    field.appendChild(shape);
    canvas.appendChild(field);
}