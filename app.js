

const cells = document.querySelectorAll('[data-cell]')
const showX = document.querySelectorAll('[data-x-show]')
const showO = document.querySelectorAll('[data-o-show]')
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


let humanPlayer = document.getElementsByClassName('o')
let aiPlayer = document.getElementsByClassName('x')


cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });

let choice = false;
let counter = 0;
let X_Points = 0;
let O_Points = 0;

function handleClick(e) {
    // change the value in that cell
    counter++;
    let cell = e.target;
    if (choice === true) {
        // cell.classList.add('o')
        cell.innerHTML='O'
        cell.style.color='blue'
    } 
    else {
        cell.innerHTML='X'
        cell.style.color='red'
    }
    check('O');
    check('X')
    choice = !choice;
  }

  function check(pick){
      if(
          (cells[0].innerHTML===pick &&
          cells[1].innerHTML===pick &&
          cells[2].innerHTML===pick ) || 

          (cells[3].innerHTML===pick &&
          cells[4].innerHTML===pick &&
          cells[2].innerHTML===pick )
        // winCombos.includes('O')
      ){
          X_Points++;
          localStorage.setItem('x_points', X_Points)
          document.querySelector('[data-x-points]').innerHTML=localStorage.getItem('x_points');
          restartClass.style.display='block'
          document.querySelector('[x-wins]').innerHTML="X "
          document.querySelector('[x-wins]').classList.add('winner')
          clear();
          console.log(X_Points);
      }        
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



 
