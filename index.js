const message = document.querySelector('.message')
const changeTextButton = document.querySelector('.changeTextButton')

message.innerText = `Initial text`;
changeTextButton.addEventListener('click', () => {
      message.innerHTML = 'The button was clicked'
})

