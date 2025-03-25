// 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); //Double Cheese Burger
console.log(secondBurger.name); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// In memoria si è creato un solo oggetto con 2 riferimenti

// 🏆 Code Question 2

const hamburger1 = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};
const secondBurger1 = { ...hamburger1 };
secondBurger1.ingredients[0] = "Salad";

console.log(hamburger1.ingredients[0]); // Salad
console.log(secondBurger1.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//  Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//  Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 2 oggetti, ma un solo riferimento per ingredients

// 🏆 Code Question 3

const hamburger2 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger2 = structuredClone(hamburger2);
const thirdBurger = structuredClone(hamburger2);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 9 oggetti

// 🏆 Code Question 4

const chef2 = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// il metodo migliore è lo spread operator(...), poichè abbiamo una funzione
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// il metodo migliore è structuredClone(), perchè potrà copiare anche l'oggetto complesso

// 🎯 Code Question 5 (Bonus)

const hamburger3 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const newRestaurant = { ...hamburger3.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger3 = { ...hamburger3 };
secondBurger3.maker.restaurant = newRestaurant;
secondBurger3.maker.name = "Chef Hyur";

console.log(hamburger3.maker.name); // Chef Hyur
console.log(secondBurger3.maker.name); // Chef Hyur
console.log(hamburger3.maker.restaurant.name); // Hyur's Burgers
console.log(secondBurger3.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 5 oggetti

// 🎯 Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },

  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// il metodo migliore è lo spread operator, poichè, conoscendo l'oggetto, abbiamo una funzione all'interno di esso, inoltre crea un riferimento degli oggetti annidati

// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  const copy = {};

  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopy(value);
    }
  }
}

const chefCopy = deepCopy(chef);
