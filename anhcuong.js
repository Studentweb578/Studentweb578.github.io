let datastring = localStorage.getItem('feedback')
let dataobj = JSON.parse(datastring)
console.log(dataobj)

let html = document.querySelector('.show-feedback-container')

if (dataobj) {

    for (let i = 0; i < dataobj.length; i++) {

        let divcart = `<div class="card show-feedback">
        <div class="card-body">
            <h4 class="card-title"style:"font-size: 34px"><strong>${dataobj[i].name}</strong> </h4>
            <p style="word-break: break-all; font-size: 20px" class="card-text">${dataobj[i].message}</p>
            <hr>
            <p style="text-decoration-line:underline;font-size: 20px" class="card-body">${dataobj[i].phone}</p>
            <p style="text-decoration-line:underline ; font-size: 20px" class="card-email" >${dataobj[i].email}</p>
        </div>
        </div>`
        html.innerHTML += divcart
    }
}