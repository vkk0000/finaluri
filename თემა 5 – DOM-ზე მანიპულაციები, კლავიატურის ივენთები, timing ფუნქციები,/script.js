// const square = document.getElementById('square');
// const container = document.querySelector('.container');
// const step = 10;

// function moveSquare(direction) {
//   const containerRect = container.getBoundingClientRect();
//   const squareRect = square.getBoundingClientRect();

//   let top = square.offsetTop;
//   let left = square.offsetLeft;

//   switch (direction) {
//     case 'up':
//       if (top > 0) square.style.top = `${top - step}px`;
//       break;
//     case 'down':
//       if (top + squareRect.height < containerRect.height) square.style.top = `${top + step}px`;
//       break;
//     case 'left':
//       if (left > 0) square.style.left = `${left - step}px`;
//       break;
//     case 'right':
//       if (left + squareRect.width < containerRect.width) square.style.left = `${left + step}px`;
//       break;
//   }
// }

// // Add keyboard controls for arrow keys
// document.addEventListener('keydown', (event) => {
//   switch (event.key) {
//     case 'ArrowUp':
//       moveSquare('up');
//       break;
//     case 'ArrowDown':
//       moveSquare('down');
//       break;
//     case 'ArrowLeft':
//       moveSquare('left');
//       break;
//     case 'ArrowRight':
//       moveSquare('right');
//       break;
//   }
// });


// const ball = document.getElementById('ball');
// const field = document.querySelector('.field');

// document.addEventListener('keydown', (event) => {
//     const step = 10;
//     const ballRect = ball.getBoundingClientRect();
//     const fieldRect = field.getBoundingClientRect();

//     switch (event.key) {
//         case 'ArrowUp':
//             if (ballRect.top > fieldRect.top) {
//                 ball.style.top = `${ball.offsetTop - step}px`;
//             }
//             break;
//         case 'ArrowDown':
//             if (ballRect.bottom < fieldRect.bottom) {
//                 ball.style.top = `${ball.offsetTop + step}px`;
//             }
//             break;
//         case 'ArrowLeft':
//             if (ballRect.left > fieldRect.left) {
//                 ball.style.left = `${ball.offsetLeft - step}px`;
//             }
//             break;
//         case 'ArrowRight':
//             if (ballRect.right < fieldRect.right) {
//                 ball.style.left = `${ball.offsetLeft + step}px`;
//             }
//             break;
//     }
// });