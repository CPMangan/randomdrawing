document.addEventListener("DOMContentLoaded", function() {

    let randomImage = document.querySelector('#randomImage');
    let randomNumber = Math.floor( Math.random() * (1000) );
    console.log(randomNumber);

    randomImage.src = `https://picsum.photos/200/200?image=${randomNumber}`;
    //console.log(randomImage);

    //get and set the input for the random numner to save to DB
    let randomNumberInput = document.querySelector("input[name='randomNumber']");
    randomNumberInput.value = randomNumber;
    console.log(randomNumberInput);

});