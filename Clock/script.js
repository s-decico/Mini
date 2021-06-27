setInterval(setClock,1000);

const hoursHand = document.getElementById("hourHand");
const minutesHand = document.getElementById("minuteHand");
const secondsHand = document.getElementById("secondHand");


function setClock()
{   //console.log("setclock called");
    const curtime = new Date();

    const seconds = curtime.getSeconds()/60;
    const minutes = (seconds + curtime.getMinutes())/60;
    const hours = (minutes + curtime.getHours())/12;

    setRotation(hoursHand,hours);
    setRotation(minutesHand,minutes);
    setRotation(secondsHand,seconds);
}

function setRotation(element, rotationdegree)
{   //console.log(element);
    element.style.setProperty('--rotation',rotationdegree*360);
}



