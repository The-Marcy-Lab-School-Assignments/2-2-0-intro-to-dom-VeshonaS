const { TestEnvironment } = require("jest-environment-jsdom");

const getMainHeadingText = () => {
  let text = document.querySelector("#main-heading").textContent
  console.log(text)
};

const getAllMainText = () => {
  const mainElements = document.querySelectorAll('.main-text')
 let newText = ''
 mainElements.forEach(element => {
  newText += element.textContent.trim() + ',';
 });
 newText = newText.slice(0 , -1)
 console.log(newText)
};

const setSubtitleText = () => {
const sub = document.getElementById('subtitle')
sub.append("This is a subtitle!")
};

const modifyDivClassList = () => {
 const classes = document.getElementById('modify-classes')
 classes.classList.remove('bad-class')
 classes.classList.add('new-class')
};

const addH2 = () => {
  const newH2 = document.createElement('h2')
  newH2.id = 'h2-test'
  newH2.textContent = 'Another one!'
  document.body.append(newH2)
};

const removeOldInfo = () => {
  const oldPTag = document.getElementById('old-info')
  oldPTag.remove()
};

const makeAlphabet = () => {
  // const letters = document.getElementById('alphabet').database.numLetters;
  // const alphabet = document.getElementById('alphabet')
  // for (let i = 0; i < numLetters; i++){
  //   const newItem = document.createElement('li')
  //   const letter = String.fromCharCode(65 + i)
  //   newItem .textContent = `${letter} is #${i + 1} in the alphabet.`
  //   alphabet.appendChild(newItem)
  // }
};

const makeBio = () => {
  document.querySelector('#my-bio').innerHTML = `
  <h2 id="bio-heading">About Me</h2>
<p>My name is Zo and I like learn cool new things</p>
<h3 id="hobby-heading">My Hobbies</h3>
<ul>
  <li>Running</li>
  <li>Reading</li>
  <li>Writing</li>
</ul>  `
}

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
