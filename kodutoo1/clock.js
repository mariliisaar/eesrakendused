window.onload = function() {
    setTime();
    setDate();
}

function setTime() {
    let currentTime = new Date();
    let hours = addZero(currentTime.getHours());
    let minutes = addZero(currentTime.getMinutes());
    let seconds = addZero(currentTime.getSeconds());

    let hrContainer = document.getElementById("hours");
    let minContainer = document.getElementById("minutes");
    let secContainer = document.getElementById("seconds");

    hrContainer.innerHTML = hours;
    minContainer.innerHTML = minutes;
    secContainer.innerHTML = seconds;

    if (hours == 00 && minutes == 00 && seconds == 00) {
        setDate();
    }

    requestAnimationFrame(setTime);
}

function setDate() {
    let currentTime = new Date();
    let weekdays = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
    let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    let day = currentTime.getDay();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();

    let dateContainer = document.getElementById("dateContainer");

    dateContainer.innerHTML = `${weekdays[day]}, ${date}. ${months[month]} ${year}`;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}