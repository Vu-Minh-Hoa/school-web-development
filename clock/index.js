function showTime() {
  if (!document.getElementById('MyClockDisplay')) return;

  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = 'AM';

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var time = hour + ':' + minute + ':' + second + ' ' + session;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

setTimeout(() => {
  document
    .getElementById('MyClockDisplay')
    .addEventListener('load', showTime());
}, [30]);
