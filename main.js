let testBtn = document.getElementById('btn')
let sidebar = document.getElementById('side')

function openSidebar() {
    sidebar.classList.toggle('sidebar-on')
}

document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
}
)
let users = []

function register() {
    let name_input = document.getElementById('su-name-input').value
    let email_input = document.getElementById('su-email-input').value
    let pw_input = document.getElementById('su-pw-input').value

    let user = {
        name: name_input,
        email: email_input,
        password: pw_input
    }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))

    document.getElementById('su-name-input').value = ''
    document.getElementById('su-email-input').value = ''
    document.getElementById('su-pw-input').value = ''
}

function checkInputValue(value1, value2) {
    if (value1 != value2) {
        return false
    }
    return true
}

function login() {
    let email_input = document.getElementById('su-email-input').value
    let pw_input = document.getElementById('su-pw-input').value
    let userStorange = JSON.parse(localStorage.getItem('users'))
    for (let i = 0; i < userStorange.length; i++) {
        if (!checkInputValue(email_input, userStorange[i].email)) {
            alert("User is not existed! haha")
            break
        } else {
            if (!checkInputValue(pw_input, userStorange[i].email)) {
                alert("Wrong password! hehe")
                break
            } else {
                alert("Login successfully YEAH")
                break
            }
        }
    }
}



// w3.slideshow(".slide", 2500 ) 