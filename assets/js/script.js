// variables for Quiz information buttons
let openHiddenTextBtn = document.querySelector(".btn-for-overlay-page");
let showHiddenText = document.querySelector("#hidden-popup-text");
let closeHiddenTextBtn = document.querySelector(".fa-xmark");
// variables for welcome users
let requirdUserText = document.querySelector('.requird-text')

// variable for Username
let enterUser = document.querySelector("#enter-user");
let saveUser = document.querySelector("#save-user");
    enterUser.focus()
    enterUser.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){
        addUserName()
      }
    })
/**
 * This fucntion is for popup page for Quiz information
 */
 function overlayPage() {
    if (showHiddenText.style.display === "block") {
      showHiddenText.style.display = "none";
    } else {
      showHiddenText.style.display = "block";
    }
  }
  openHiddenTextBtn.addEventListener("click", overlayPage);
  // This fucntion is for Close popup page for Quiz information
  closeHiddenTextBtn.addEventListener("click", overlayPage);
  
  /**
   *  This fucntion adds Username in this Quiz
   */
  function addUserName() {
    if(enterUser.value === ''){
      requirdUserText.innerHTML = 'username requird please!'
    }else{
      requirdUserText.innerHTML = `Thanx! for signing in, ${enterUser.value}👋`
      requirdUserText.style.color = 'rgb(40, 221, 40)'
      setTimeout(function(){
        window.location.assign('quiz.html')
      }, 1200)
    }
  }
  saveUser.addEventListener("click", addUserName);