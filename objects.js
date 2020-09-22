// OOP Object oriented programming, other way of writting code
/* Focuses on creating oobjects with methods on it */

// Constructor function
/* Its a function that will generate us an object */

function Todo(name, completed) {
  this.name = name;
  (this.completed = completed),
    (this.getTodoName = function () {
      console.log(this.name);
    });
}

const todo = new Todo("Louis", false);
const todo1 = new Todo("Valérie", true);

todo.getTodoName(); // Get name
todo1.getTodoName();

console.log(todo, todo1);

// new keywork is going to create a new empty object, we're adding property
