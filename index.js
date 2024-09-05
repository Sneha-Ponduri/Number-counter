document.addEventListener('DOMContentLoaded',() =>{
    let count=0;
    const counterDisplay = document.querySelector('.counter h1');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');

    const updateCounter = () =>{
        counterDisplay.textContent = count;
    }
    increaseBtn.addEventListener('click', () =>{
        count++;
        updateCounter();
    });
    decreaseBtn.addEventListener('click' , () =>{
        count--;
        updateCounter();
    });
    resetBtn.addEventListener('click', () =>{
        count=0;
        updateCounter();
    });
})