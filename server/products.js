const fs = require('fs');

class Product {
  constructor(id, name, price, imgUrl) {
    this.id = id;
    this.name = name;
    this.price = price * 1e4;
    this.stock = Math.ceil(Math.random() * (data.length + 1 - id) * 2);
    this.imgUrl = imgUrl;
  }
}

const products = [];

const data = [
  [1, 'Big Mac', 2],
  [2, 'Coca-Cola Pack', 5],
  [3, 'Movie Ticket', 12],
  [4, 'Book', 15],
  [5, 'Lobster Dinner', 45],
  [6, 'Video Game', 60],
  [7, 'Amazon Echo', 99],
  [8, 'Year of Netflix', 100],
  [9, 'Air Jordans', 125],
  [10, 'Airpods', 199],
  [11, 'Gaming Console', 299],
  [12, 'Drone', 350],
  [13, 'Smartphone', 699],
  [14, 'Bike', 800],
  [15, 'Kitten', 1500],
  [16, 'Puppy', 1500],
  [17, 'Auto Rickshaw', 2300],
  [18, 'Horse', 2500],
  [19, 'Acre of Farmland', 3e3],
  [20, 'Designer Handbag', 5500],
  [21, 'Hot Tub', 6e3],
  [22, 'Luxury Wine', 7e3],
  [23, 'Diamond Ring', 1e4],
  [24, 'Jet Ski', 12e3],
  [25, 'Rolex', 15e3],
  [26, 'Ford F-150', 3e4],
  [27, 'Tesla', 75e3],
  [28, 'Monster Truck', 15e4],
  [29, 'Ferrari', 25e4],
  [30, 'Single Family Home', 3e5],
  [31, 'Gold Bar', 7e5],
  [32, 'McDonalds Franchise', 15e5],
  [33, 'Superbowl Ad', 525e4],
  [34, 'Yacht', 75e5],
  [35, 'M1 Abrams', 8e6],
  [36, 'Formula 1 Car', 15e6],
  [37, 'Apache Helicopter', 31e6],
  [38, 'Mansion', 45e6],
  [39, 'Make a Movie', 1e8],
  [40, 'Boeing 747', 148e6],
  [41, 'Mona Lisa', 78e7, 1],
  [42, 'Skyscraper', 85e7],
  [43, 'Cruise Ship', 93e7],
  [44, 'NBA Team', 212e7],
];

data.forEach((el) => {
  products.push(new Product(el[0], el[1], el[2], `/images/img-${el[0]}.jpg`));
});

module.exports = products;
