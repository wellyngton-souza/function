const cSize = 400;

let cWidthCenter;
let cHeightCenter;
let cCenter;

class Map{
    constructor(){

    }

    createMap(){
        createCanvas(cSize, cSize);
        cWidthCenter = width / 2;
        cHeightCenter = height / 2;
        cCenter = cSize / 2;
    }

    createGrid(){
        stroke("black");

        rect(0, cHeightCenter, width, 1);
        rect(cWidthCenter, 0, 0, height, 1);
    
        stroke("blue");
    
        // column
        for(let i = 0; i < 21; i++){
            if(i != 10) rect(0, (cCenter / 10) * i, width, 1);
        };
    
        // rows
        for(let i = cSize / 2 + cSize / 20; i <= cSize; i += cSize / 20){
            if(i != 10) rect(i, 0, 0, height, 1);
        }
    
        for(let i = cSize / 2 - cSize / 20; i >= 0; i -= cSize / 20){
            if(i != 10) rect(i, 0, 0, height, 1);
        }
    }

    drawEquation(func){
        stroke("red");

        noFill();
        beginShape();

        for (let i = -cSize / 2; i < cSize; i++) {
            let x = i / 20;
            let y = func(x) * 20;
            vertex(cWidthCenter + i, cHeightCenter - y);
        }

        endShape();
    }
}

document.getElementById("equation").addEventListener("change", setup);

function setup() {
    clear();

    let mapInstance = new Map();
    mapInstance.createMap();
    mapInstance.createGrid();

    if(!equation) return;

    const input = document.getElementById("equation").value;
    const userFunc = new Function('x', `return ${input};`);
    
    mapInstance.drawEquation(userFunc);
}

function draw() {
    
}