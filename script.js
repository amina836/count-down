     var nameValue = document.getElementById("event-name"), 
          eventMonth = document.getElementById("event-month"),
          eventDay = document.getElementById("event-day"),
          eventYear = document.getElementById("event-year"),
          eventButton=document.getElementById("event-button"),
          eventTime=document.getElementById("event-time"),
          daysCount=document.getElementById("days-count"),
         hoursCount=document.getElementById("hours-count"),
        minutesCount= document.getElementById("minutes-count"),
        secondsCount= document.getElementById("seconds-count"),
      time;


    eventButton.addEventListener('click',()=>{
       setInterval (timeCount,1000)
    })
    function timeCount() {
      if (`${nameValue}` == "" || `${eventMonth}` == "" || `${eventDay}` == "" || `${eventYear}` == "" || `${eventTime}` == "") {
       
        daysCount.innerHTML = "enter";
        hoursCount.innerHTML="enter";
        minutesCount.innerHTML="enter";
        secondsCount.innerHTML="enter";
        
      }else  {
        let
            time = new Date(`${eventMonth} ${eventDay} ${eventYear} ${eventTime}`).getTime(),
            now = new Date().getTime(),
            timer = time-now,
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timer % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60)),
            minutes = Math.floor((timer % (1000 * 60 * 60 )) / (1000 * 60 )),
            seconds = Math.floor((timer % (1000 * 60 )) / (1000));
            document.getElementById('eventName').innerHTML = nameValue;
            daysCount.innerHTML=`${days}`
            hoursCount.innerHTML=`${hours}`
            minutesCount.innerHTML=`${minutes}`
            secondsCount.innerHTML=`${seconds}`
      
        timer--


       if(timer< 0){
        clearInterval();
        daysCount.innerHTML = "Done";
        hoursCount.innerHTML="Done";
        minutesCount.innerHTML="Done";
        secondsCount.innerHTML="Done";
        
    
       }
    }
    };
    
     // all input is positive number only.
     function isInputNumber(evt){
        var ch =String.fromCharCode(evt.which);
        if(!(/[0-9]/.test(ch))){
          evt.preventDefault();
        }
      }

































