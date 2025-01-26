// function generateRandomNumber() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
    
//     if (a < b) {
//         let randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
//         document.getElementById("result").textContent = `Random number: ${randomNumber}`;
//     } else {
//         document.getElementById("result").textContent = "Please ensure that a is less than b.";
//     }
// }



// function printRandomInteger(n, a, b) {
//     const randomInt = Math.floor(Math.random() * (b - a + 1)) + a;
//     document.getElementById("result").innerHTML = `n = ${n}, Random integer from [${a}, ${b}] is: ${randomInt}`;
// }


// const n = 5; 
// const a = 1;  
// const b = 10;
// printRandomInteger(n, a, b);



// const photos = [
//     "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
//     "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg",
//     "photo11.jpg", "photo12.jpg", "photo13.jpg", "photo14.jpg", "photo15.jpg",
//     "photo16.jpg", "photo17.jpg", "photo18.jpg", "photo19.jpg", "photo20.jpg"
// ];

// function getRandomPhotos() {
//     const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle array
//     return shuffled.slice(0, 4); // Get the first 4 photos
// }

// function displayPhotos() {
//     const randomPhotos = getRandomPhotos();
//     const container = document.getElementById('photoContainer');
//     container.innerHTML = ""; // Clear any existing photos
//     randomPhotos.forEach(photo => {
//         const imgElement = document.createElement('img');
//         imgElement.src = photo; // Assume the photos are in the same directory
//         container.appendChild(imgElement);
//     });
// }

// // Call the function when the page loads
// window.onload = displayPhotos;


// function generateTable() {
//     // Get user inputs
//     const rows = document.getElementById("rows").value;
//     const columns = document.getElementById("columns").value;
//     const imageCount = document.getElementById("images").value;
    
//     // URL of the image to be inserted into the table
//     const imageUrl = "https://via.placeholder.com/100"; // Placeholder image URL

//     // Create the table
//     let tableHTML = "<table>";

//     // Loop to create rows and columns
//     for (let i = 0; i < rows; i++) {
//         tableHTML += "<tr>";
//         for (let j = 0; j < columns; j++) {
//             tableHTML += "<td>";
//             for (let k = 0; k < imageCount; k++) {
//                 tableHTML += `<img src="${imageUrl}" alt="Image">`;
//             }
//             tableHTML += "</td>";
//         }
//         tableHTML += "</tr>";
//     }

//     tableHTML += "</table>";
    
//     // Insert the generated table into the page
//     document.getElementById("tableContainer").innerHTML = tableHTML;
// }