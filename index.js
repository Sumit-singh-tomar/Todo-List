const li=document.querySelectorAll('li')

for(let i=0;i<li.length;i++)
{
    const editBtn=document.createElement('button')
    editBtn.textContent="edit"
    editBtn.className="edit-btn"
    li[i].appendChild(editBtn)
}

const form=document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    //select the input element
    const furitToAdd=document.getElementById('fruit-to-add')

    //created li tag
    const li=document.createElement('li')
    const liText=document.createTextNode(furitToAdd.value)
    li.appendChild(liText)
    li.className="fruit"

    //created delete btn to be added inside li
    const deleteBtn=document.createElement('button')
    deleteBtn.className="delete-btn"
    deleteBtn.textContent="x"
    li.appendChild(deleteBtn)

     //created edit btn to be added inside li
     const editBtn=document.createElement('button')
     editBtn.className="edit-btn"
     editBtn.textContent="edit"
     li.appendChild(editBtn)

    //adding li to the undordered list
    const furits=document.querySelector('.fruits')
    furits.appendChild(li)
})

// delete li element from unordered list

const furits=document.querySelector('.fruits')
furits.addEventListener('click',function(event){
    if(event.target.classList.contains("delete-btn")){
        const elementToRemove=event.target.parentElement
        furits.removeChild(elementToRemove)       
    }
})
