// function calculate(operation) {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     let result;

//     if (operation === '+') {
//         result = num1 + num2;
//     } else if (operation === '-') {
//         result = num1 - num2;
//     } else if (operation === '*') {
//         result = num1 * num2;
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = 'შეცდომა: ვერ გაყოფთ 0-ით';
//         }
//     } else if (operation === 'sqrt') {
//         result = Math.sqrt(num1);
//     }

//     document.getElementById('result').textContent = result;
// }



// function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 31); // Generates a random number between 0 and 30
//     document.getElementById("randomNumberDisplay").textContent = randomNumber;
// }


// function generateTable() {
//     const columns = document.getElementById('columns').value;
//     const rows = document.getElementById('rows').value;
//     const imageCount = document.getElementById('imageCount').value;

//     // Validate input values
//     if (columns < 1 || rows < 1 || imageCount < 1 || imageCount > 10) {
//         alert("Please enter valid values for columns, rows, and image count.");
//         return;
//     }

//     // Array of 10 image URLs
//     const images = [
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100'
//     ];

//     // Create table
//     let table = '<table>';

//     for (let i = 0; i < rows; i++) {
//         table += '<tr>';
//         for (let j = 0; j < columns; j++) {
//             let imageIndex = (i * columns + j) % imageCount; // Loop through selected images
//             table += `<td><img src="${images[imageIndex]}" alt="Image"></td>`;
//         }
//         table += '</tr>';
//     }

//     table += '</table>';

//     // Insert the table into the container div
//     document.getElementById('tableContainer').innerHTML = table;
// }


// function generateRandomDivs() {
//     for (let i = 0; i < 10; i++) {
//         const width = Math.floor(Math.random() * 51) + 50; // Random width between 50 and 100
//         const height = Math.floor(Math.random() * 51) + 50; // Random height between 50 and 100
//         const area = width * height; // Calculate the area

//         const div = document.createElement('div');
//         div.classList.add('random-div');
//         div.style.width = `${width}px`;
//         div.style.height = `${height}px`;
//         div.style.left = `${Math.random() * (window.innerWidth - width)}px`;
//         div.style.top = `${Math.random() * (window.innerHeight - height)}px`;

//         div.innerHTML = `Area: ${area} px²`;

//         document.body.appendChild(div);
//     }
// }

// generateRandomDivs();