// create bunch of divs which act as square grids on which the drawing will be done by the user 
var grid_cont = document.querySelector("#grid-container")

// selecting the grid size selecting button  
const gridSelect = document.getElementById("gridBtn")
let gridR = document.getElementById("gridR")

gridSelect.addEventListener('click', ()=>{
    gridR.classList.replace("invisible", "visible");
})

// add label to the range slider 
document.querySelector('input[type=range]').addEventListener('input', function rangeChange() {
    // trigger the CSS to update
    this.setAttribute('value', this.value);
    resetGrid();
    createNewGrid(this.value);
});

// document.querySelector()


//creating a function for selection of grid size and adding all the grids accordingly 
function createNewGrid(gridSize){
    console.log(gridSize);
    adjustSize(gridSize);
    // var gridSize = gridR.value;
    for(let i =0; i < gridSize*gridSize; i++){
        var square = `div${i}`;
        var square = document.createElement("div");
        square.classList.add("cell", "border");
        grid_cont.append(square)
    }
}

//reset the grid if user selects a different grid size 
function resetGrid(){
    grid_cont.replaceChildren();
}

//function to adjust cell size within grid 
function adjustSize(gridSize) {
    document.documentElement.style.setProperty('--size-selector-column', gridSize)
    document.documentElement.style.setProperty('--size-selector-row', gridSize)
    var newWidth = getComputedStyle(grid_cont).getPropertyValue("width")/gridSize;
    var newHeight = getComputedStyle(grid_cont).getPropertyValue("height")/gridSize;
    document.documentElement.style.setProperty('--cell-container-width', newWidth);
    document.documentElement.style.setProperty('--cell-container-height', newHeight);
}

// default grid 
createNewGrid(10)


