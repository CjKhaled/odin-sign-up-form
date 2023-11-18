const password1 = document.querySelector(".pass1")
const password2 = document.querySelector(".pass2")

const checkpass1 = []
const checkpass2 = []

password1.addEventListener(('input'), (e) => {
    if (e.data !== null) {
        checkpass1.push(e.data)
    } else {
        checkpass1.pop()
    }
    
})

password2.addEventListener(('input'), (e) => {
    if (e.data !== null) {
        checkpass2.push(e.data)
    } else {
        checkpass2.pop()
    }
    
})
