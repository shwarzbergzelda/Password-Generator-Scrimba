const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generatePasswordButton = document.getElementById('generate-pw-btn')
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
const passwordLengthEl = document.getElementById('password-length')

generatePasswordButton.addEventListener('click', () => {
    const passwordLength = Number(passwordLengthEl.value)
    passwordOne.textContent = generatePassword(passwordLength)
    passwordTwo.textContent = generatePassword(passwordLength)
})

passwordOne.addEventListener('click', copyPassword)
passwordTwo.addEventListener('click', copyPassword)

function copyPassword(e) {
    navigator.clipboard.writeText(e.target.textContent)
    
    const originalText = e.target.textContent
    e.target.textContent = 'Copied!'

    setTimeout(() => {
        e.target.textContent = originalText
    }, 1000)

}

function generatePassword(passwordLength) {
    let password = ''
    let randomIndex = -1
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    return password
}