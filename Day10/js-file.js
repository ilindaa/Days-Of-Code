// your JavaScript file
let container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// exercise

// 1.
let redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

container.appendChild(redP);

// 2.
let blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';

container.appendChild(blueH3);

// 3.
// container stores all of the above, for the 3rd, create another container and store 3.1 to 3.3's
let blackpink = document.createElement('div');
blackpink.classList.add('innerContainer');
blackpink.style.border = '2px solid black';
blackpink.style.backgroundColor = 'pink';

container.appendChild(blackpink);

let innerContainer = document.querySelector('.innerContainer');
let innerH1 = document.createElement('h1');
innerH1.textContent = "I'm in a div";

innerContainer.appendChild(innerH1);

let innerP = document.createElement('p');
innerP.textContent = "ME TOO!";

innerContainer.appendChild(innerP);
