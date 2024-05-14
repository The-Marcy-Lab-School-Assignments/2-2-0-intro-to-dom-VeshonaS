const addH1 = document.createElement('h1')
addH1.id = 'main-heading'
addH1.textContent = "Hello World!"
document.body.append(addH1)

const addPTag = document.createElement('p')
addPTag.id = 'main-text'
addPTag.className = 'boring-text'
addPTag.textContent = "Look, I'm some text!"
document.body.append(addPTag)