// input - sample

const inputSample = document.querySelector('.input-sample');

function myFunction() {
    const inText = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = inText;
}

inputSample.addEventListener("click", function (event) {
    myFunction();
});

// btn - sample

const lessons = document.querySelector('.btn-sample');

function showConsole() {
    console.log('Ура!');
    if (lessons.classList.contains('active')) {
        lessons.classList.remove('active');
        alert('Вы нажали кнопку ' + event.target.value);
    } else {
        lessons.classList.add('active');
        alert('No' + event.target.value);
    }
};

function showConsoleTwo() {
    if (event.target.value == 1) {
        lessons.classList.add('active1');
        console.log(event.target.value);
    } else if (event.target.value == 2) {
        lessons.classList.add('active2');
        console.log(event.target.value);
    }
    else if (event.target.value == 3) {
        lessons.classList.add('active3');
        console.log(event.target.value);
    }
}


lessons.addEventListener("click", function (event) {
    if (event.target.closest('.cart-button')) {
        // console.log(event.target.classList.value);
        // showConsole();
        showConsoleTwo();
        // console.log(event.target.value);
    }
});