// Security
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable copy event
document.addEventListener("copy", function (e) {
  e.preventDefault();
});

// Disable cut event
document.addEventListener("cut", function (e) {
  e.preventDefault();
});

// Disable text selection manually
// document.addEventListener("selectstart", function (e) {
//   e.preventDefault();
// });
// document.addEventListener("contextmenu", (e) => e.preventDefault());

// document.addEventListener("keydown", (e) => {
//   // Block Ctrl+S / Cmd+S
//   if ((e.ctrlKey || e.metaKey) && e.key === "s") {
//     e.preventDefault();
//   }

//   // Block F12, Ctrl+U, Ctrl+Shift+I
//   if (
//     e.key === "F12" ||
//     ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") ||
//     ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i")
//   ) {
//     e.preventDefault();
//   }
// });
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
});

// Scroll Left and right Toggle
let leftScroll = document.getElementById("scroll_left");
let rightScroll = document.getElementById("scroll_right");
let registration_Container = document.querySelector(".details_reg_Cards");
const scrollAmount = 310; // This matches my cards width by default
leftScroll.addEventListener("click", () => {
  registration_Container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightScroll.addEventListener("click", () => {
  registration_Container.scrollBy({left: scrollAmount, behavior: "smooth"})
});


// Scroll Left and right Toggle in Experts Card
let left_scroll_Expert = document.getElementById("scroll_left_Experts")
let right_Scroll_Expert = document.getElementById("scroll_right_Experts");
let expertsContainer = document.querySelector(".expertsCard");
const expertsScrollAmount = 310;
left_scroll_Expert.addEventListener("click", () => {
  expertsContainer.scrollBy({left: -expertsScrollAmount, behavior: "smooth"})
});
right_Scroll_Expert.addEventListener("click", () => {
  expertsContainer.scrollBy({left: expertsScrollAmount, behavior:"smooth" })
})


// Add scroll event
// let registerAction = document.querySelector(".registerActions");
// const scrollTop = () => {
//   if (window.scrollY > 0) {
//     registerAction.classList.add("scrollAdd");
//   }
// };
// window.addEventListener("scroll", scrollTop)
