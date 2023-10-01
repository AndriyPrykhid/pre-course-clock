const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const clock = document.querySelector("#clock");
let isRuning = false;
console.log(isRuning)

let intervalId
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    clock.textContent = `${hours}:${minute}:${second} `
}

start.addEventListener('click', () => {
    if (!isRuning) {
        intervalId = setInterval(updateClock, 1000);
        isRuning = true;
    }


})

stop.addEventListener('click', () => {
    if (isRuning) {
        clearInterval(intervalId)
        isRuning = false
    }

})
updateClock();


