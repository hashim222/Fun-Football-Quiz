# Testings


* I tested this website on three different browsers: Google Chrome, Microsoft Edge and Firefox.
* The website works perfectly on all the different devices listed at the bottom of the text image.

  ![this image shows that this website works on which devices](assets/images/Readme-Images/devices-resolutions.png)
  
### To calculate the site's score, I used Google Chrome developers tools lighthouse.

   * ### [Quiz Introduction Page For Desktop](assets/images/Readme-Images/desktop-quiz-info.png) 

     ![image for desktop quiz information page](assets/images/Readme-Images/desktop-quiz-info.png)

   * ### [Quiz Introduction Page For Androids](assets/images/Readme-Images/mobile-quiz-info.png) 

     ![image for android quiz information page](assets/images/Readme-Images/mobile-quiz-info.png)

   * ### [Main Quiz Page For Desktop](assets/images/Readme-Images/desktop-quiz-main.png) 

     ![image for desktop main quiz page](assets/images/Readme-Images/desktop-quiz-main.png)

   * ### [Main Quiz Page For Androids](assets/images/Readme-Images/mobile-quiz-main.png) 

     ![image for android main quiz page](assets/images/Readme-Images/mobile-quiz-main.png)

## Code Validator Testing
 * HTML 

    I confirm that I checked the HTML code by using [W3C HTML Validator](https://validator.w3.org/#validate_by_input) and did not find any errors.    

 * CSS 

    I confirm that I checked the CSS code by using [W3C CSS Validator (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_input) and did not find any errors. 

* JavaScript

   I confirm that I checked the javascript code by using [Jshint](https://jshint.com/) and did not find any errors.
   
 ## Bugs
 
* ### Bugs Fixed
 
   * There was an issue with the footer, which wasn't sticking to the bottom of the page.

   * On the main quiz page, I wasn't experiencing any issues if the user answers slowly. However, if the user presses the button quickly, the result appears multiple times. This problem has been solved.

* ### Bugs unFixed
    While I'm not sure if this was a bug, I thought to mention it in the bug section.
   * I had to use this code <details>[display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  input[type="submit"] {
    cursor: pointer;
    border-radius: 15px;
  }
  ]</details>
multiple times in my CSS media query otherwise it wouldn't work as expected, so this bug remains unsolved.


