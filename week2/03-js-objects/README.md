# JavaScript Objects Example

A beginner-friendly project demonstrating core JavaScript object concepts and manipulation techniques.

## 📋 Overview

This project covers essential JavaScript object topics including:

- **Object creation** – Creating objects with properties
- **Nested objects** – Accessing deeply nested properties
- **Dynamic properties** – Adding properties to objects at runtime
- **DOM manipulation** – Creating elements and attaching properties
- **Arrays in objects** – Working with arrays as object properties
- **Console methods** – Using `console.log()`, `console.table()`, and `console.dir()`

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Open the browser's Developer Tools (F12 or right-click → Inspect)
3. Go to the **Console** tab to see the output

## 📁 Project Structure

```
03-js-objects/
├── index.html    # HTML page that loads the script
├── script.js     # JavaScript file with object examples
└── README.md     # This file
```

## 💡 Key Concepts Demonstrated

### Basic Object
```javascript
const person = {
    fname: "Bhuvana",
    age: "36",
    city: "Puducherry"
};
```

### Nested Objects
```javascript
const house = {
    color: "blue",
    table: {
        chairs: {
            color: "black",
            numbers: 6
        }
    }
};
// Access: house.table.chairs.numbers
```

### Adding Properties Dynamically
```javascript
house.builtYear = 2015;
house.table.chairs.height = "3 feet";
```

### Arrays in Objects
```javascript
const animals = {
    tags: ["pet", "wild", "domestic"],
    habitats: "forest, urban, rural"
};
// Access: animals.tags[0]
```

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6+)

## 📚 Learning Resources

- [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info - Objects](https://javascript.info/object)
