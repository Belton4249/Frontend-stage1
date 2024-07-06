document.addEventListener('DOMContentLoaded', (event) => {

    function updateTime() {
        const now = new Date();
        const utcTimeString = now.toUTCString(); // Get current UTC time as a string
        document.getElementById('utcTime').innerText = utcTimeString;
        console.log('Current UTC Time:', utcTimeString); // Log the current UTC time to the console
    }

    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()]; // Get the current day in UTC
        document.getElementById('currentDay').innerText = currentDay;
    }

    updateTime();
    updateDay();

    setInterval(updateTime, 60000);
});
