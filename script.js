//your code here
// Get references to the hour, minute, and second hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  // Get the current time
  const now = new Date();
  
  // Get the current hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  // Calculate the degrees for each hand based on the current time
  const hoursDegrees = ((hours / 12) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  
  // Rotate the hour, minute, and second hands using CSS transform property
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

// Call the setDate function every second
setInterval(setDate, 1000);
