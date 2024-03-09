//MOVIE
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Example usage:
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // You can create an array of Movie instances and use the getPG method to filter movies with a "PG" rating.
  const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    // Add more movies as needed
  ];
  
  const pgMoviesArray = Movie.getPG(moviesArray);
  console.log(moviesArray);
  
//Person Details in class
class Person {
    // Constructor
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // Method to get the full name
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // Method to display information about the person
    displayDetails() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

// Example usage
const AshokKumar = new Person('Ashok', 'Kumar', 21, 'Male');
AshokKumar.displayDetails();

//Uber Fare
class UberCalculator {
    // Constructor
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    // Method to calculate the total Uber price
    calculatePrice(distance, time) {
        const distanceCost = distance * this.costPerMile;
        const timeCost = time * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost;

        return totalCost;
    }
}

// Example usage
const uberXCalculator = new UberCalculator(5.0, 1.5, 0.2); // Example rates for UberX
const distanceTraveled = 10; // in miles
const timeElapsed = 15; // in minutes

const totalPrice = uberXCalculator.calculatePrice(distanceTraveled, timeElapsed);
console.log(`UberX Price: $${totalPrice.toFixed(2)}`);

