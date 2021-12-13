//----------------------------------------------------------------------------------------------------------DATABASE-APP.

//----------------------------------------------------------------------------------------------------------Global-Vars
let firstNameIn = document.querySelector('#firstNameIn').value;
let lastNameIn = document.querySelector('#lastNameIn').value;
let weightIn = document.querySelector('#weightIn').value;
let heightIn = document.querySelector('#heightIn').value;
let ageIn = document.querySelector('#ageIn').value;
let religionIn = document.querySelector('#religionIn').value;
let raceIn = document.querySelector('#raceIn').value;
let emailIn = document.querySelector('#emailIn').value;
let phoneIn = document.querySelector('#phoneIn').value;






//----------------------------------------------------------------------------------------------------------Data Input
let sendButton = document.getElementById('send');

sendButton.addEventListener('click', function pushNames(){
    let firstNameIn = document.querySelector('#firstNameIn').value;
let lastNameIn = document.querySelector('#lastNameIn').value;
let weightIn = document.querySelector('#weightIn').value;
let heightIn = document.querySelector('#heightIn').value;
let ageIn = document.querySelector('#ageIn').value;
let religionIn = document.querySelector('#religionIn').value;
let raceIn = document.querySelector('#raceIn').value;
let emailIn = document.querySelector('#emailIn').value;
let phoneIn = document.querySelector('#phoneIn').value;

let myArray = [(
    {firstName:firstNameIn,
    lastName:lastNameIn,
    age:ageIn,
    weight:weightIn,
    height:heightIn,
    religion:religionIn,
    race:raceIn,
    email:emailIn,
    phone:phoneIn})]
myDataBase.push({firstName:firstNameIn,
    lastName:lastNameIn,
    age:ageIn,
    weight:weightIn,
    height:heightIn,
    religion:religionIn,
    race:raceIn,
    email:emailIn,
    phone:phoneIn})
})

//---------------------------------------------------------------------------------------------------------- People Object

 let myDataBase = [
        (  
            {firstName:'Mike',
            lastName:'Gross',
            age:'37',
            weight:'265',
            height:'68',
            religion:'Christian',
            race:'White',
            email:'michaelgross.tn@gmail.com',
            phone:'541-799-8372'}),
                   
            ({firstName:'James',
            lastName:'Smart',
            age:'34',
            weight:'235',
            height:'62',
            religion:'Christian',
            race:'White',
            email:'migross.tn@gmail.com',
            phone:'542-749-8332'}
            ),
            ({firstName:'Steph',
            lastName:'Bradley',
            age:'39',
            weight:'135',
            height:'65',
            religion:'Christian',
            race:'White',
            email:'stephBradley@gmail.com',
            phone:'912-978-3264'}
            ),
            ({firstName:'Jesse',
            lastName:'Krutz',
            age:'34',
            weight:'135',
            height:'32',
            religion:'Christian',
            race:'White',
            email:'jKrutz@gmail.com',
            phone:'907-982-0117'}
            ),
            ({firstName:'Chris',
            lastName:'Larks',
            age:'31',
            weight:'185',
            height:'31',
            religion:'Christian',
            race:'White',
            email:'chrisLarks@gmail.com',
            phone:'907-922-143'}
            ),
            ({firstName:'Jackie',
            lastName:'Frost',
            age:'62',
            weight:'145',
            height:'70',
            religion:'Christian',
            race:'White',
            email:'jackFrost@gmail.com',
            phone:'947-831-5283'}
            ),
            ({firstName:'John',
            lastName:'Carnegey',
            age:'63',
            weight:'220',
            height:'72',
            religion:'Christian',
            race:'White',
            email:'JCarnagey@gmail.com',
            phone:'907-821-4458'}
            ),
            ({firstName:'Corey',
            lastName:'Collins',
            age:'32',
            weight:'185',
            height:'32',
            religion:'Christian',
            race:'White',
            email:'coreyCollins@gmail.com',
            phone:'917-932-2116'}
            )
        ];
//-------------------------------------------------------------------------------------------------Find Person Add Details

function findPerson(){
    let firstNamed = document.getElementById('firstNamed');
    let lastName = document.getElementById('lastName');
    let last = document.getElementById('last');

myDataBase.forEach(function(firstName){
    let firstNamed = document.getElementById('firstNamed');
    let lastName = document.getElementById('lastName');
    let weight = document.getElementById('weight');
    let height = document.getElementById('height');
    let age = document.getElementById('age');
    let religion = document.getElementById('religion');
    let race = document.getElementById('race');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    let firstN = document.getElementById('firstN').value;   
    let lastN = document.getElementById('lastN').value;

//----------------------------------------------------------------------------------------------------------If Conditional
    if (firstN === firstName.firstName && lastN === firstName.lastName){
            firstNamed.innerText = firstName.firstName;
            lastName.innerText = firstName.lastName;
            weight.innerText = firstName.weight;
            height.innerText = firstName.height;
            age.innerText = firstName.age;
            religion.innerText = firstName.religion;
            race.innerText = firstName.race;
            email.innerText = firstName.email;
            phone.innerText = firstName.phone;

    }else if(firstN === '' && lastN === ''){
        alert('Please Enter a Name Starting With First Name.')
    }else if(firstN === firstName.firstName && lastN === ''){
        alert("Please Enter A Last Name")
    }else if(firstN === ''){
    console.log("Please Enter A Last Name")
    }else if(firstN === 'shit' || firstN === 'Shit'){
        alert("Please Don't Cuss At Me")
    }else if(firstN === 'fuck off' || firstN === 'Fuck Off'){
    alert("I'll Come through this Screen and Kick your ass!!!")
    }else if(firstN === 'Fuck off' || firstN === 'fuck Off'){
        alert("I'll Come through this Screen and Kick your ass!!!")
        }else{
            console.log("It Failed...")
        }
    
})  
 
}
         

//----------------------------------------------------------------------------------------------------------Search Person

let searchButton = document.getElementById('search')
searchButton.addEventListener('click', function(){ 
 findPerson()

})


//----------------------------------------------------------------------------------------------------------Display People

//----------------------------------------------------------------------All-Items
let allItems = document.getElementById('allItems');
allItems.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerText = " ";


     myDataBase.forEach(function(person){
      let newPerson = document.createElement('div')
          newPerson.innerHTML = (`<ul>
         <li>First Name: ${person.firstName}</li>
          Last Name: ${person.lastName},
         <br>Age: ${person.age},
         <br>Weight: ${person.weight},
         <br>Height: ${person.height},
         <br>Race: ${person.race},
         <br>Religion: ${person.religion},
         <br>E-Mail: ${person.email},
         <br>Phone: ${person.phone}
    </ul>`)
    allNamesContainer.append(newPerson);
})
})

//----------------------------------------------------------------------First-Names
let firstNamesBtn = document.getElementById('firstNamesBtn');
firstNamesBtn.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerHTML = " "
    firstNameSort()
    function firstNameSort(){
        myDataBase.sort(function(person){
          
    let newPerson = document.createElement('div')
    newPerson.innerHTML = (`<ul><li>First Name: ${person.firstName}</li></ul>`)
    allNamesContainer.append(newPerson);
})
}

})
//----------------------------------------------------------------------Last-Names
let lastNamesBtn = document.getElementById('lastNamesBtn');
lastNamesBtn.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerHTML = " "
    lastNameSort()
    
    function lastNameSort(){
        myDataBase.sort(function(person){
            let newPerson = document.createElement('div')
            newPerson.innerHTML = (`<ul><li>First Name: ${person.lastName}</li></ul>`)
        
                allNamesContainer.append(newPerson);
        })
    }
}) 
//----------------------------------------------------------------------Age


let ageBtn = document.getElementById('ageBtn');
ageBtn.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerHTML = " "
    ageSort()
    
    function ageSort(){
        myDataBase.sort(function(person){
           let newPerson = document.createElement('div')
           newPerson.innerHTML = (`<ul>
                <li>First Name: ${person.firstName}</li>
                Last Name: ${person.lastName},
                <br>Age: ${person.age}
                </ul>`)
             allNamesContainer.append(newPerson);
        })
    }
})

//----------------------------------------------------------------------Race
let raceBtn = document.getElementById('raceBtn');
raceBtn.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerHTML = " "
    raceSort()
    
    function raceSort(){
        myDataBase.sort(function(person){
           let newPerson = document.createElement('div')
           newPerson.innerHTML = (`<ul>
           <li>First Name: ${person.firstName}</li>
           Last Name: ${person.lastName},
           <br>Age: ${person.race}
           </ul>`)
            allNamesContainer.append(newPerson);
        })
    }
})
//----------------------------------------------------------------------Religion
let religionBtn = document.getElementById('religionBtn');
religionBtn.addEventListener('click', function(){
    let allNamesContainer = document.getElementById('allNamesContainer');
    allNamesContainer.innerHTML = " "
    religionSort()
    
    function religionSort(){
        myDataBase.sort(function(person){
           let newPerson = document.createElement('div')
           newPerson.innerHTML = (`<ul>
           <li>First Name: ${person.firstName}</li>
           Last Name: ${person.lastName},
           <br>Age: ${person.religion}
           </ul>`)
            allNamesContainer.append(newPerson);
        })
    }
})


let clear = document.getElementById('clear');

clear.addEventListener("click", function(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = " ");
})
