const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
    },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 14.25);
menu.addDishToCourse('appetizers', 'French Onion Soup', 12.25);
menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 20.25);

menu.addDishToCourse('mains', 'Wagyu Steak', 72.50);
menu.addDishToCourse('mains', 'Swordfish', 50.25);
menu.addDishToCourse('mains', 'Parmesan Chicken', 40.25);

menu.addDishToCourse('desserts', 'Creme Brulle', 20.25);
menu.addDishToCourse('desserts', 'Ice Cream', 14.25);
menu.addDishToCourse('desserts', 'Chocolate Cake', 24.25);
menu.addDishToCourse('appetizers', 'Caprese Salad', 16.50);

menu.addDishToCourse('appetizers', 'Garlic Bread', 8.75);
menu.addDishToCourse('appetizers', 'Bruschetta', 15.00);

menu.addDishToCourse('mains', 'Filet Mignon', 85.00);
menu.addDishToCourse('mains', 'Salmon Teriyaki', 55.75);
menu.addDishToCourse('mains', 'Vegetarian Pasta', 30.50);

menu.addDishToCourse('desserts', 'Tiramisu', 22.50);
menu.addDishToCourse('desserts', 'Fruit Sorbet', 12.50);
menu.addDishToCourse('desserts', 'Cheesecake', 28.00);

let newMeal = menu.generateRandomMeal();
console.log(newMeal);

