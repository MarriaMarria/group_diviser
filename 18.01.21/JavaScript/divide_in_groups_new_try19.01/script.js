const addButton = document.querySelector('#addbtn');

// we take input from id #name, if there is a value we create a <li> element, add input to it with innerHTML, and we add new <li> to <ul>
// then I clear input value
addButton.addEventListener('click', () => { 
    const inputName = document.querySelector('#name');
    const ul = document.querySelector('#storeNames');
        if (inputName.value.length > 0) {
            const li = document.createElement('li');
            li.innerHTML = inputName.value;
            ul.appendChild(li);
            inputName.value = '';
            listNames();
        }
        
})

// make a function!!!!!
// we grab our inputs stored in <li> and add them to one list allNames
const listNames = () => {
    const allNames = document.querySelectorAll("#storeNames li")
    // console.log(allNames);
    let listOfNames = []; // either take it out to put in global scope up 
    for (let i = 0; i < allNames.length; i++) {
        listOfNames.push(allNames[i].textContent);

    }
    console.log(listOfNames);
}




// const shuffle = new Function(array) { // Fisher-Yates-Durstenfeld shuffle
//     var currentIndex = array.length, temporaryValue, randomIndex;
    
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
    
//     // Pick a remaining element... 
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
    
//     // And swap it with the current element. 
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//     }
    
//     return array;
//     }
    
    // Used like so 
// shuffle(list_of_names);
// console.log(list_of_names);
    
    // const shufflebtn = document.getElementById("shuffle")
    // shufflebtn.addEventListener("click", function() { 
    // shuffle(list_of_names);
    // return list_of_names
    // });






// when we click the button function divide in groups which takes a list of names and a number of ppl activates
const divideInGroups = document.querySelector('#dividebtn');
divideInGroups.addEventListener('click', () => {
    //logic to divide

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
