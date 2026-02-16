const myPTag = document.querySelector('p');
myPTag.style.color = 'blue';
myPTag.style.fontSize = '30px';
myPTag.style.border = '2px solid black';
myPTag.style.padding = '10px';
myPTag.style.backgroundColor = 'lightgrey';
myPTag.innerText = 'This is the updated paragraph text!';
myPTag.textContent= 'This is the updated paragraph text using textContent!';
myPTag.style.textAlign = 'center';
myPTag.style.fontFamily = 'Arial, sans-serif';
myPTag.style.borderRadius = '8px';
console.log(myPTag);

const hTag = document.querySelector('h1');
hTag.style.color = 'green';
hTag.style.textDecoration = 'underline';
hTag.style.marginBottom = '20px';
hTag.style.fontFamily = 'Georgia, serif';
hTag.innerText = 'Welcome to the DOM Manipulation Example';
hTag.style.textAlign = 'center';
hTag.style.textTransform = 'uppercase'; 


const firstPTag = document.querySelector('.first'); 
firstPTag.style.fontWeight = 'bold';
firstPTag.style.letterSpacing = '2px';
firstPTag.innerText = 'This is the first paragraph with bold text and increased letter spacing.';   
firstPTag.style.textAlign = 'center';
firstPTag.style.fontSize = '20px';
firstPTag.style.color = 'purple';
firstPTag.style.backgroundColor = 'lavender';
firstPTag.style.padding = '10px';
firstPTag.style.border = '1px dashed purple';
firstPTag.style.borderRadius = '5px';
firstPTag.style.marginTop = '15px';

const someMarquee = document.createElement('marquee');
console.log(someMarquee);
someMarquee.innerText = 'This is a marquee text!';
someMarquee.style.color = 'red';
someMarquee.style.fontSize = '24px';
someMarquee.style.fontWeight = 'bold';
someMarquee.style.marginTop = '20px';
// need to add this to any parent element to make it visible in the DOM
document.body.appendChild(someMarquee);


const text1 = document.createTextNode('This is a text node added to the body.');
document.body.appendChild(text1);

text1.remove();

function increase() {
    let number = document.getElementById("count");
    number.textContent = Number(number.textContent) + 1;
  }