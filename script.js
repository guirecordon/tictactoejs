const cells = document.querySelectorAll('.cell');

let playerOne = true;
let arr1 = [];
let arr2 = [];
let count = 0;
const winningStreaks = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [7,5,3]
];


function handlePlay(event) {
  if(this.innerHTML === '') {
    if(playerOne) {
      this.innerHTML = 'X';
      arr1.push(event.target.attributes.id.value);
      checkWinner(arr1);
      playerOne = false;
    } else {
      this.innerHTML = 'O';
      arr2.push(event.target.attributes.id.value);
      checkWinner(arr2);
      playerOne = true;
    }
  }
}

function checkWinner(arr) {
  if(arr.length > 2) {
    winningStreaks.forEach(winningArray => {
      console.log(winningArray);
      arr.forEach(playerMark => {
        console.log(playerMark);
        if(winningArray.includes(+playerMark))
          count++;
      })
    })
  }
  if(count > 2) {
    console.log(count);
    declareWinner();
  }
}

function declareWinner() {
  if(playerOne) {
    console.log('Player one is the champion of the world!');
  } else {
    console.log('Player two is the champion of the world!');
  }
}

cells.forEach(cell => {
  cell.addEventListener('click', handlePlay);
})


let randArr = [1, 4, 7];

console.log(randArr.includes(1));
console.log(randArr.includes(4));
console.log(randArr.includes(7));