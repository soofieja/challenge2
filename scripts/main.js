var offSet = 0;

function showTime() {
    var date = new Date(Date.now() + offSet * 3600000);
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
        
    var time = h + ":" + m + ":" + s ;
    document.getElementById("main").innerHTML = time;
    background();
    setTimeout(showTime, 1000);
}

function showDate() {
    var date = new Date(Date.now() + offSet * 3600000);
    var day = date.getDate(); 
    var month = date.getMonth() +1; 
    var year = date.getFullYear();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var fullDate = day + "/" + month + "/" + year;
    document.getElementById("date").innerHTML = fullDate;
}

function background() {
    var now = new Date(Date.now() + offSet * 3600000);
    var hours = now.getHours();
    const styles = {
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat'
    }

  
    //06:00 - 10:59 MORNING
    if (hours > 5 && hours <= 11){
        TweenMax.to('.item2', 1, {backgroundImage: 'url(images/morning.svg)', ...styles });
    }
    //11:00 - 15:59 DAY
    else if (hours > 11 && hours <= 16){
        console.log('hours', hours)
         TweenMax.to('.item2', 1, {backgroundImage: 'url(images/day.svg)', ...styles});
    }
    //16:00 - 19:59 AFTERNOON
    else if (hours > 16 && hours <= 18){
        TweenMax.to('.item2', 1, {backgroundImage: 'url(images/afternoon.svg)', ...styles});
    }
    //20:00 - 23:59 EVENING
    else if (hours > 18 && hours <= 23){
        TweenMax.to('.item2', 1, {backgroundImage: 'url(images/evening.svg)', ...styles });
    }
    //00:00 - 05:59 NIGHT
    else {
        TweenMax.to('.item2', 1, {backgroundImage: 'url(images/night.svg)', ...styles });
    }
}


window.onload = function () {
    showTime();
    showDate();
    background();
};

document.getElementById('playButton').addEventListener('click', function() {
	document.getElementById('wald-button').classList.add('changesSize');
});