//   // Create the car object
//   const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2021
//   };

//   // Log the brand and year properties to the console
//   console.log("Brand:", car.brand);
//   console.log("Year:", car.year);



//   // Create the student object
//   const student = {
//     name: "John Doe",
//     age: 20,
//     subjects: ["Math", "English"]
//   };

//   // Add a new subject to the subjects array
//   student.subjects.push("Programming");

//   // Log all the student object properties to the console
//   console.log("Name:", student.name);
//   console.log("Age:", student.age);
//   console.log("Subjects:", student.subjects);



    // // Create the calculator object
    // const calculator = {
    //     num1: 10,
    //     num2: 5,
    //     add() {
    //       return this.num1 + this.num2;
    //     },
    //     subtract() {
    //       return this.num1 - this.num2;
    //     }
    //   };
  
    //   // Use the methods and log the results
    //   console.log("Addition:", calculator.add());       // Output: 15
    //   console.log("Subtraction:", calculator.subtract()); // Output: 5


        // // Function to generate random numbers within a given range
        // function getRandomInt(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        //   }
      
        //   // Create an array of 10 cities
        //   const cities = [];
        //   for (let i = 0; i < 10; i++) {
        //     cities.push({
        //       name: `City ${i + 1}`,
        //       population: getRandomInt(1000, 1000000),
        //       area: getRandomInt(10, 1000)
        //     });
        //   }
      
        //   // Generate HTML content for each city
        //   const container = document.getElementById('cities-container');
        //   cities.forEach(city => {
        //     const density = (city.population / city.area).toFixed(2);
      
        //     // Create a div for each city with its information
        //     const cityDiv = document.createElement('div');
        //     cityDiv.classList.add('city');
        //     cityDiv.innerHTML = `
        //       <h3>${city.name}</h3>
        //       <p>Population: ${city.population}</p>
        //       <p>Area: ${city.area} km²</p>
        //       <p>Density: ${density} people per km²</p>
        //     `;
            
        //     // Append the city div to the container
        //     container.appendChild(cityDiv);
        //   });