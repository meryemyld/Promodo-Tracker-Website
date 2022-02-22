
function save(){

      /*MINI TRANSPARAN PEMBE KUTU*/
      var  mini= document.createElement("div");
      mini.id='mini'
      mini.classList='mini'
      document.getElementById("beyaz_box").appendChild(mini);
      /*CHECKBOX*/
      var checkBox = document.createElement("input");
      checkBox.type='checkbox';
      checkBox.id='checkbox';
      checkBox.classList='checkbox'
      document.getElementById("mini").appendChild(checkBox);

      /*TEXT CONTENT*/
      var text_content=document.createElement('span');
      text_content.id='text_content';
      text_content.classList="parag";
      
      document.getElementById("mini").appendChild(text_content);

      var text =document.getElementById("inside_input").value;
      text_content.textContent=text;
      

      /*CHECKBOX FUNCTION*/
      checkBox.onclick=function check_func(){
        if (checkBox.checked == true){
          text_content.classList="parag2";}
          
        else {
          text_content.classList="parag";
      }}

      
      /*DELETE BUTTON*/
      var delete_button=document.createElement('button');
      delete_button.id='delete_button';
      delete_button.classList="delete_button";
      document.getElementById("mini").appendChild(delete_button);
      delete_button.textContent='Delete'
      delete_button.onclick= function delete_button2(){
        checkBox.style.display='none';
        text_content.style.display='none';
        delete_button.style.display='none';
      }
     
    
}
    
  
  



var startingMinutes = 25;
let time = startingMinutes * 60;



function start(){
    
    const countdownEl= document.getElementById("countdown");
    
    myInterval=setInterval(updateCountdown, 1000);

    function updateCountdown() {
        
      const minutes=Math.floor(time/60);
      let seconds= time % 60;
      
      seconds = seconds < 10 ? '0' + seconds: seconds;
      


      countdownEl.innerHTML= `${minutes}:${seconds}`;
    
      time--;
      time = time < 0 ? 0 : time; 

      

      
      
    }
    
    
}





function stop(){
  clearInterval(myInterval);
  
}

startingMinutes= `${minutes}:${seconds}`;

/* <button id="start_again" type="button" class="timer__button" onclick="start()" >
        <span class="material-icons">play_arrow</span>
    </button>



    */








