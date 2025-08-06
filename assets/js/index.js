
let daysCounter = document.getElementById("days");
let hoursCounter = document.getElementById("hours");
let minutesCounter = document.getElementById("minutes");
let secondsCounter = document.getElementById("seconds");

let eventStartDate = new Date("2025-11-13T09:00:00"); // Starts 9:00 am
let eventEndDate = new Date("2025-11-14T17:30:00"); // Ends 5:00 pm

let countdownTimer = () => {
   let currentTime = new Date().getTime();
   let distance = eventStartDate.getTime() - currentTime;

   if (currentTime < eventStartDate.getTime()) {
    let distance = eventStartDate.getTime() - currentTime;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysCounter.innerText = String(days).padStart(2, "0");
      hoursCounter.innerText = String(hours).padStart(2, "0");
      minutesCounter.innerText = String(minutes).padStart(2, "0");
      secondsCounter.innerText = String(seconds).padStart(2, "0");
   }else if (currentTime >= eventStartDate.getTime() && currentTime <= eventEndDate.getTime()) {
     // 🔴 Event is in progress
     daysCounter.innerText = "00";
     hoursCounter.innerText = "00";
     minutesCounter.innerText = "00";
     secondsCounter.innerText = "00";
       document.getElementById("event-status").style.display = "block"
     document.getElementById("event-status").innerText = "Event in Progress!";     
   }else{
     // ✅ Event has ended
     daysCounter.innerText = "00";
     hoursCounter.innerText = "00";
     minutesCounter.innerText = "00";
     secondsCounter.innerText = "00";
     document.getElementById("event-status").innerText = "Event Ended";
     clearInterval(timer)
   }
};
let timer = setInterval(countdownTimer, 1000);

// Disable Image dragging
document.querySelectorAll("img").forEach((img) =>  {
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
    img.addEventListener("mousedown", (e) => {
        e.preventDefault()
    })
})