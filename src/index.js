import './css/common.css';
import CountdownTimer from './plugins/countdown';

// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };

// const timer = {
//   intervalId: null,
//   targetTime: new Date('March 1, 2021'),

//   start() {
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = this.targetTime - currentTime;

//       updateClockface(deltaTime);
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockface(time) {
//   /**
//    * Копипаста со стека 💩
//    */
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

const downTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 1, 28, 18, 52, 0),
});
