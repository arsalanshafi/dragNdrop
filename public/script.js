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
    let field = document.createElement("svg");
    field.style.position= "absolute";
    field.setAttribute("width",100);
    field.setAttribute("height",100);
    let shape = document.createElement(`${ele}`);
    shape.setAttribute("width",100);
    shape.setAttribute("height",100);
    shape.style.fill = "rgb(0, 255, 191)";
    field.appendChild(shape);
    canvas.appendChild(field);
}