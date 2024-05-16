/** FEEDBACK: Great job getting all test cases to pass for this portion! 
 * Here are some questions to sit with, could we have made this code DRYer? 
 * Could we have used a function? 
 * Also, we always want to have our runner function so make sure to include that in the future!
 */

const addH1 = document.createElement('h1')
addH1.id = 'main-heading'
addH1.textContent = "Hello World!"
document.body.append(addH1)

const addPTag = document.createElement('p')
addPTag.id = 'main-text'
addPTag.className = 'boring-text'
addPTag.textContent = "Look, I'm some text!"
document.body.append(addPTag)