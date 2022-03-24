// variables for Quiz information buttons
let openHiddenTextBtn = document.querySelector(".btn-for-overlay-page");
let showHiddenText = document.querySelector("#hidden-popup-text");
let closeHiddenTextBtn = document.querySelector(".fa-xmark");

// variable for Username
let enterUser = document.querySelector("#enter-user");
let saveUser = document.querySelector("#save-user");

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
   *  This fucntion save Username in this Quiz
   */
  function saveUserName() {
    if(enterUser.value === ''){
        alert('username requird please')
    }else{
      alert(`Thanx! for signing in, ${enterUser.value}`)
    }
  }
  saveUser.addEventListener("click", saveUserName);