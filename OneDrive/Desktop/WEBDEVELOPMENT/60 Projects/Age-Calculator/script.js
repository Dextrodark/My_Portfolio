const btn = document.getElementById('btn');
const date = document.getElementById('birthday');
const result = document.getElementById('result');


function calculateAge(){
    const birthdayValue = date.value;
    if(birthdayValue === ""){
        alert('Please enter a birthday');
    }else{
        const age = getAge(birthdayValue);
        result.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} Old`
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0) && currentDate.getDate() < birthdayDate.getDate()){
        age--;
    }
    return age;
}

btn.addEventListener('click',calculateAge);