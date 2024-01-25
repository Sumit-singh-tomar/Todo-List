// Write your code below:

const form = document.querySelector("form")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  var userDetail = {
    "username": event.target.username.value,
    "email": event.target.email.value,
    "phone": event.target.phone.value
  }

  // const username=document.getElementById('username')
  

  axios.post("https://crudcrud.com/api/f61bc0a4e9914660b1c3a1131b04af5d/booking",userDetail)
    .then((res)=>console.log('success',res))
    .catch((e)=>console.log('error',e))

  let detail = JSON.stringify(userDetail)
  let email = event.target.email.value
  localStorage.setItem(email, detail)

  const ul = document.querySelector('ul')
  ul.className = "showDetail"

  const li = document.createElement('li')
  li.textContent = `${event.target.username.value} - ${event.target.email.value} ${event.target.phone.value}`

  const button = document.createElement('button')
  const editButton = document.createElement('button')

  button.className = "deleteBtn"
  editButton.className = "editBtn"

  button.textContent = "delete"
  editButton.textContent = "Edit"

  button.id = event.target.email.value
  editButton.name = event.target.email.value

  li.appendChild(button)
  li.appendChild(editButton)
  ul.appendChild(li)

  event.target.username.value = ''
  event.target.email.value = ''
  event.target.phone.value = ''

})

const showDetail = document.querySelector('ul');
showDetail.addEventListener('click', function (event) {

  if (event.target.classList.contains("deleteBtn")) {
    let elementToRemove = event.target.parentElement;
    showDetail.removeChild(elementToRemove);
    localStorage.removeItem(event.target.id);
  }

  if (event.target.classList.contains("editBtn")) {
    let elementToRemove = event.target.parentElement;
    var userData = JSON.parse(localStorage.getItem(event.target.name))
    const username = document.getElementById('username')
    username.value = userData.username
    email.value = userData.email
    phone.value = userData.phone

    showDetail.removeChild(elementToRemove);
    localStorage.removeItem(event.target.name);

  }
});



