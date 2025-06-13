const redPts = document.getElementById("red-pts");
const bluePts = document.getElementById("blue-pts");

const redPlus = document.getElementById("red-plus");
const redMinus = document.getElementById("red-minus");

const bluePlus = document.getElementById("blue-plus");
const blueMinus = document.getElementById("blue-minus");

let redScore = 0;
let blueScore = 0;

function addPtsRed(x){
    function addNewRedScore(){
        return redScore += x;
    }
    return addNewRedScore;
}

const redPtAdd = addPtsRed(1);
const redPtMinus = addPtsRed(-1);

function addPtsBlue(x){
    function addNewBlueScore(){
        return blueScore += x;
    }
    return addNewBlueScore;
}

const bluePtAdd = addPtsBlue(1)
const bluePtMinus = addPtsBlue(-1)

redPlus.addEventListener("click",()=>{
    redPts.textContent = redPtAdd()
})

redMinus.addEventListener("click",()=>{
    redPts.textContent = redPtMinus()
})

bluePlus.addEventListener("click",()=>{
    bluePts.textContent = bluePtAdd()
})

blueMinus.addEventListener("click",()=>{
    bluePts.textContent = bluePtMinus()
})
