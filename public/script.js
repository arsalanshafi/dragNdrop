const shapes = [...document.querySelectorAll("li")];
const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#btn");
const rect = canvas.getBoundingClientRect();
const CANVAS_X = rect.x;
const CANVAS_Y = rect.y;
const OFFSET = 50;
// console.log(rect);

btn.addEventListener("click", () => {
    // location.reload();
    canvas.innerHTML = "";
})

shapes.forEach(shape => {
    shape.addEventListener("dragend", e => {
        let ele = e.target.firstElementChild.firstElementChild.tagName;
        paste(ele,e.clientX,e.clientY);
        // console.log(e.target.firstElementChild.firstElementChild.tagName)
    })
})

function paste(ele,x,y){

    if(x < rect.x || x >rect.right || y < rect.y || y > rect.bottom) return;

    let field = document.createElementNS('http://www.w3.org/2000/svg',"svg");
    field.setAttribute("width",100);
    field.setAttribute("height",100);
    field.style.position = "absolute";
    let figure = document.createElementNS('http://www.w3.org/2000/svg',`${ele}`);

    switch (ele){
        case "rect":
            figure.setAttribute("width",Math.random()*(100-20)+20);
            figure.setAttribute("height",Math.random()*(100-20)+20);
            break;
        case "circle":
            figure.setAttribute("cx",50);
            figure.setAttribute("cy",50);
            figure.setAttribute("r",50);
            break;
        case "polygon":
            figure.setAttribute("points","0,100 50,0 100,100");
            break;
        default:
            console.log("default");
            break;
    }
    figure.setAttribute("fill",`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()+0.4})`);
    field.style.left = `${(x-CANVAS_X)-OFFSET}px`;
    field.style.top = `${(y-CANVAS_Y)-OFFSET}px`;
    field.appendChild(figure);
    canvas.appendChild(field);
}

