
const addButton = document.querySelector('#addbtn');



addButton.addEventListener('click', () => { 
    const inputName = document.querySelector('#name');
    const ul = document.querySelector('#store_names');
        if (inputName.value.length > 0) {
            const li = document.createElement('li');
            li.innerHTML = inputName.value;
            ul.appendChild(li);
            inputName.value = '';
        }

})







// const addButton = document.querySelector('#addbtn');
// const inputName = document.querySelector('#name');
// listOfNames = [];


// addButton.addEventListener('click', () => { 
//     let myName = inputName.value;
//     listOfNames.push(myName);
//     console.log(listOfNames);
//     document.getElementById("store_names").innerHTML = listOfNames;

// })
