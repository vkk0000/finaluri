// function processRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 1000000000); // Generates a random number
//     let evenProduct = 1;
//     let oddSum = 0;

//     let numberStr = randomNumber.toString();
//     let digitsCount = numberStr.length;

//     for (let i = 0; i < digitsCount; i++) {
//         let digit = parseInt(numberStr[i]);

//         if (digit % 2 === 0) {
//             evenProduct *= digit; // Multiplying even digits
//         } else {
//             oddSum += digit; // Summing odd digits
//         }
//     }

//     // Printing the results
//     document.getElementById("result").innerHTML = `
//         შემთხვევითი რიცხვი: ${randomNumber}<br>
//         ციფრების რაოდენობა: ${digitsCount}<br>
//         ლუწი ციფრების ნამრავალი: ${evenProduct}<br>
//         კენტი ციფრების ჯამი: ${oddSum}
//     `;
// }


// function generateTable(N, M) {
//     // Predefined array of image URLs
//     const imageUrls = [
//         "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", 
//         "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"
//     ];

//     // Create the table
//     let table = document.createElement("table");

//     for (let i = 0; i < N; i++) {
//         let row = document.createElement("tr");

//         for (let j = 0; j < M; j++) {
//             let cell = document.createElement("td");

//             // Insert random image into a random cell
//             if (Math.random() < 0.1) { // 10% chance to place an image
//                 let img = document.createElement("img");
//                 let randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
//                 img.src = randomImage; // Set image source
//                 cell.appendChild(img);
//             }

//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }

//     // Append the table to the body or a specific container
//     document.getElementById("tableContainer").appendChild(table);
// }

// let clickCount = 0;

// function handleClick() {
//     clickCount++;  // Increment the click counter

//     // Display the number of times the button was clicked
//     document.getElementById("clickDisplay").innerText = `ღილაკი დაჭერილია ${clickCount} ჯერ.`;

//     // Disable the button after 10 clicks
//     if (clickCount >= 10) {
//         document.getElementById("clickButton").disabled = true;
//         document.getElementById("clickDisplay").innerText += " ღილაკი გამორთულია.";
//     }
// }


// let randomNumbers = [];

//         function generateRandomNumbers() {
//             randomNumbers = [];
//             for (let i = 0; i < 20; i++) {
//                 randomNumbers.push(Math.floor(Math.random() * 100) + 1); // Generate random number between 1 and 100
//             }
//             displayNumbers(randomNumbers);
//         }

//         function displayNumbers(numbers) {
//             document.getElementById("numbersDisplay").innerHTML = `შემთხვევითი რიცხვები: ${numbers.join(", ")}`;
//         }

//         function filterNumbers() {
//             const userInput = parseInt(document.getElementById("userInput").value);
//             if (isNaN(userInput)) {
//                 alert("გთხოვთ შეიყვანოთ რიცხვი.");
//                 return;
//             }

//             // Filter numbers greater than the input
//             const filteredNumbers = randomNumbers.filter(num => num > userInput);
//             document.getElementById("filteredDisplay").innerHTML = `
//                 რიცხვები მეტია ${userInput}-ზე: ${filteredNumbers.join(", ")}<br>
//                 რიცხვების რაოდენობა: ${filteredNumbers.length}
//             `;
//         }

//         function removeNumber() {
//             const userInput = parseInt(document.getElementById("userInput").value);
//             if (isNaN(userInput)) {
//                 alert("გთხოვთ შეიყვანოთ რიცხვი.");
//                 return;
//             }

//             // Remove the number equal to the input
//             randomNumbers = randomNumbers.filter(num => num !== userInput);
//             displayNumbers(randomNumbers);
//         }




// const imageSources = [
//     'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'  // Replace with your image URLs
// ];
// const images = [];
// let messageTimeout;

// function createImageElement(src, index) {
//     const img = document.createElement('img');
//     img.src = src;
//     img.classList.add('image');
//     img.dataset.index = index;  // Storing the index to identify the image
//     img.addEventListener('click', handleClick);
//     return img;
// }

// function handleClick(event) {
//     const index = event.target.dataset.index;
//     displayMessage(`თქვენ დააჭირეთ სურათს ${index + 1}`);
// }

// function displayMessage(message) {
//     clearTimeout(messageTimeout);
//     const messageElement = document.getElementById('message');
//     messageElement.textContent = message;

//     // Hide the message after 2 seconds
//     messageTimeout = setTimeout(() => {
//         messageElement.textContent = '';
//     }, 2000);
// }

// function randomizePositions() {
//     images.forEach((img) => {
//         const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
//         const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
//         img.style.left = `${randomX}px`;
//         img.style.top = `${randomY}px`;
//     });
// }

// function init() {
//     for (let i = 0; i < imageSources.length; i++) {
//         const img = createImageElement(imageSources[i], i);
//         images.push(img);
//         document.body.appendChild(img);
//     }
//     randomizePositions();
//     setInterval(randomizePositions, 2000);  // Change position every 2 seconds
// }

// window.onload = init;


// const words = ["მეგობარი", "ინტერნეტი", "ციხე", "დაკრეფილი", "პარალელური", "კომპიუტერი"]; // Predefined word list

//         function getRandomWord() {
//             const randomIndex = Math.floor(Math.random() * words.length);
//             return words[randomIndex];
//         }

//         function getRandomTime() {
//             return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
//         }

//         function handleWordClick(word) {
//             // Calculate the number of vowels and consonants
//             const vowels = ['ა', 'ე', 'ი', 'ო', 'უ', 'ა', 'ე', 'იო', 'უ'];
//             let vowelCount = 0;
//             let consonantCount = 0;

//             for (let i = 0; i < word.length; i++) {
//                 const char = word[i];
//                 if (vowels.includes(char)) {
//                     vowelCount++;
//                 } else {
//                     consonantCount++;
//                 }
//             }

//             // Display the result
//             document.getElementById("wordDisplay").style.display = "none";
//             document.getElementById("result").innerHTML = `
//                 სიტყვა: ${word}<br>
//                 სიმბოლოების რაოდენობა: ${word.length}<br>
//                 ხმოვნები: ${vowelCount}<br>
//                 თანხმოვნები: ${consonantCount}
//             `;
//         }

//         function showRandomWord() {
//             const randomWord = getRandomWord();
//             const randomTime = getRandomTime();
            
//             // Display the word on the screen
//             const wordDisplayElement = document.getElementById("wordDisplay");
//             wordDisplayElement.innerHTML = randomWord;
//             wordDisplayElement.style.display = "block";
//             wordDisplayElement.onclick = function() {
//                 handleWordClick(randomWord);
//             };

//             // Remove the word after the random time interval
//             setTimeout(() => {
//                 wordDisplayElement.style.display = "none";
//             }, randomTime);
//         }