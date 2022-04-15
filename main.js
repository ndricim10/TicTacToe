

const cells = document.querySelectorAll('[data-cell]')
const showX = document.querySelector('.x')
const showO = document.querySelector('.o')
const chooseWinner = document.querySelector('[data-winner]')
const restartGame = document.querySelector('[data-restart]')
const restartClass = document.querySelector('.restart-game')
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]



cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
let circleTurn
// let choice = false;
const X_class = 'x'
const O_class = 'o'
console.log(showX);

let counter = 0;
let X_Points = 0;
let O_Points = 0;

function handleClick(e) {
    // change the value in that cell
    // counter++;
    const cell = e.target;
    cell.innerHTML=showX
    
    const currentClass = circleTurn ? O_class : X_class
    placeMark(cell, currentClass)
    
  }

  function placeMark(cell, currentClass){
      cell.classList.add(currentClass)
  }
  
      function clear(){
        // event.preventDefault();
        // window.location.reload();
        cells.forEach(cell=>{
            cell.innerHTML=''
        })
        localStorage.setItem('x_points', X_Points)
        document.querySelector('[data-x-points]').innerHTML=localStorage.getItem('x_points');
      }

      function startGame(){
        restartClass.style.display='none'
        clear();
      }
    //   restartGame.addEventListener('click', clear)



 
