const getBtnValue = document.querySelector('.btn-for-overlay-page')
const hiddenText = document.querySelector('#hidden-popup-text')
const closeHiddenText = document.querySelector('.fa-xmark')

function clickBtnValue(){
    if(hiddenText.style.display === 'block'){
     hiddenText.style.display = 'none'
    }else{
        hiddenText.style.display = 'block';
    }
}
getBtnValue.addEventListener('click', clickBtnValue)
closeHiddenText.addEventListener('click', clickBtnValue)