// // // // // function displayText() {
// // // // //     const text = document.getElementById('textInput').value;
// // // // //     const fontSize = document.getElementById('fontSizeInput').value;

// // // // //     const outputDiv = document.getElementById('output');
// // // // //     outputDiv.style.fontSize = fontSize + 'px';
// // // // //     outputDiv.textContent = text;
// // // // //   }

// // // // // 2).

// // // // function generateTable() {
// // // //     const width = document.getElementById('width').value;
// // // //     const height = document.getElementById('height').value;

// // // //     if (width && height) {
// // // //         let table = "<table>";
        
// // // //         for (let i = 0; i < height; i++) {
// // // //             table += "<tr>";
            
// // // //             for (let j = 0; j < width; j++) {
// // // //                 table += "<td>" + (i * width + j + 1) + "</td>";
// // // //             }
// // // //         }      
// // // //       document.getElementById('table-container').innerHTML = table;   
// // // //     }
// // // // }


// // // 3).

// // function outputNumbers() {
// //     const m = parseInt(document.getElementById('m').value);
// //     const n = parseInt(document.getElementById('n').value);
// //     let output = '';

// //     if (m <= n) {
// //         for (let i = m; i <= n; i++) {
// //             output += i + '<br>';
// //         }
// //     } else {
// //         for (let i = m; i >= n; i--) {
// //             output += i + '<br>';
// //         }
// //     }

// //     document.getElementById('result').innerHTML = output;
// // }

// function generateTable() {
   
//     const rows = document.getElementById("rows").value;
//     const cols = document.getElementById("cols").value;
//     const width = document.getElementById("width").value;
//     const height = document.getElementById("height").value;
//     const bgColor = document.getElementById("bgColor").value;
//     const borderSize = document.getElementById("borderSize").value;

   
//     const container = document.getElementById("table-container");
//     container.innerHTML = '';

    
//     const table = document.createElement("table");
    
//     table.style.backgroundColor = bgColor;
  
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement("tr");

//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement("td");
            
//             tr.appendChild(td);
//         }

//         table.appendChild(tr);
//     }

//     container.appendChild(table);
// }