// const cyanBox = document.querySelector('.cyan-box');
// const container = document.querySelector('.container');
// const step = 10; // Step size in pixels

// function handleButtonClick(direction) {
//   const boxStyle = window.getComputedStyle(cyanBox);
//   const top = parseInt(boxStyle.top);
//   const left = parseInt(boxStyle.left);

//   if (direction === 'ზემოთ' && top > 0) {
//     cyanBox.style.top = `${top - step}px`;
//   } else if (direction === 'ქვემოთ' && top + cyanBox.offsetHeight < container.offsetHeight) {
//     cyanBox.style.top = `${top + step}px`;
//   } else if (direction === 'მარცხნივ' && left > 0) {
//     cyanBox.style.left = `${left - step}px`;
//   } else if (direction === 'მარჯვნივ' && left + cyanBox.offsetWidth < container.offsetWidth) {
//     cyanBox.style.left = `${left + step}px`;
//   }
// }


// const gridContainer = document.getElementById('grid-container');
//     const colors = ['green', 'blue', 'red', 'yellow'];

//     function getRandomColor() {
//       return colors[Math.floor(Math.random() * colors.length)];
//     }

//     function addRandomSquare() {
//       if (gridContainer.childElementCount >= 120) return; // 10x12 grid (500x600)
      
//       const square = document.createElement('div');
//       square.className = 'square';
//       square.style.backgroundColor = getRandomColor();
//       gridContainer.appendChild(square);
//     }

//     // Add a new square every second
//     setInterval(addRandomSquare, 1000);




