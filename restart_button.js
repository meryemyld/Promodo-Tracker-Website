function ref(){
   
    myInterval3=clearInterval(updateCountdown, 1000);

  var startingMinutes = 25;
  let time = startingMinutes * 60;
  const countdownEl= document.getElementById("countdown");
      
    myInterval2=setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
          
      const minutes=Math.floor(time/60);
      let seconds= time % 60;
        
      seconds = seconds < 10 ? '0' + seconds: seconds;
        
  
  
      countdownEl.innerHTML= `${minutes}:${seconds}`;
      
      time--;
      time = time < 0 ? 0 : time; 
  
        
  
        
        
  }
      
      
  }
