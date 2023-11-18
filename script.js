const password1 = document.querySelector(".pass1")
const password2 = document.querySelector(".pass2")

const checkpass1 = []

password1.addEventListener(('input'), (e) => {
    if (e.data !== null) {
        checkpass1.push(e.data)
    } else {
        checkpass1.pop()
    }
    let pattern = checkpass1.join("")
    password2.setAttribute("pattern", pattern)
})
