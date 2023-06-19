let btn = document.querySelector('#btn');
// Method 2
// btn.onclick = () => alert("Hello World");
// Method 3
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// Method 2
btn.onclick = alertFunction;

// Method 3
btn.addEventListener('click', alertFunction);

// try this
btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
});

// Attaching Listeners to Groups of Nodes
let buttons = document.querySelectorAll('button');

// .forEach to iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
})