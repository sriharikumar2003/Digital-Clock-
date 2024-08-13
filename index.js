function updateTime(){
    const time  = new Date();
    let hours = time.getHours().toString().padStart(2,0);
    const meridian = (hours < 12)?"AM":"PM";
    hours = hours%12
    hours = hours.toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);;
    const seconds = time.getSeconds().toString().padStart(2,0);;
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}:${meridian}`;
}

setInterval(updateTime,1000);
