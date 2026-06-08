const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generatePasswordButton = document.getElementById('generate-pw-btn')
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')

generatePasswordButton.addEventListener('click', () => {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
})

function generatePassword() {
    let password = ''
    let randomIndex = -1
    for (let i = 0; i < 15; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    return password
}