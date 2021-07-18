# Olympics Quiz Game

## Code Institute Mile Stone 2 Project - Interactive Front End Site

The Code Institute project brief was to create and build an interactive front end site.  The site should respond to users' actions, allow users to engage with data, alter the way the site displays the information to achieve their preferred goals, using HTML, CSS and JavaScript while following UX industry conventions. As per the Code Institute course and methods, this was designed from a Desktop to Mobile site, so uses media queries within the CSS to have max-width break points. This project is for educational use only.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/responsive-index.JPG)

## Olympics Quiz Game [https://luis198327.github.io/olympics-quiz-game/](https://luis198327.github.io/olympics-quiz-game/) 
The website has been created to provide a fun quiz game based on the up comming Olympic Games in Tokyo, Japan.  It is aimed at providing some general knowledge of the country and the games themselves in 2021 and past games.

## User Experience (UX)

### Strategy - User Stories
#### Site Owners Goals
+ The main goal of the site is to provide a challenging and informative quiz to entertain online users.

#### External User Goals
+ The site’s users want to play an online quiz to test general/specific knowledge based on the Olympics Games and the country of Japan.
+ Able to keep track of scores and improve their scores when wishing to attempt the quiz again.

### Scope
In this release, I wanted to include:
+ A welcome message to the site confirming what the quiz is about.
+ A gaming area which will list the questions and provide user feedback once a question has been answered.
+ A score tracking system to confirm how many questions a user has answered correctly.
+ The ability to reset the game to reattempt and better a previous score.

### Structure
The layout of the site will have 3 HTML pages.
+ A home page
+ A game page
+ A results page

The home page will contain a welcome message once the site is displayed so the user will know what the site is providing - a quiz game on the Olympic Games.  There will be a background image and a play button to commence the game.

The second page will form the structure of the quiz itself and the use of JavaScript will bring in each question of the quiz. Users scores will be recorded as the game progresses.

Once the game quesiton limit has been reached, it will display the users score, and the ability to restart the quiz, taking you back to the home page.

Following feedback on my MS1 project, I have also embeded a 404 error message in the event that the scoring doesnt work or correctly calculates.

A dropdown menu (late change) has also been created and is situated on the 3 main HTML pages to provide better UX and give the user the abilty to restart the quiz or find external resources should they wish to learn or even cheat!

### Skeleton
I used wireframes to put together a very basic mock-up of the site based on a desktop/tablet and mobile devices. This did develop during the project as my understanding of JavaScript progressed.  I was going to keep it to 2 HTML pages, but found it easier to creare a third page for the results page separately. A fourth page has also been added (404 error), but this should not be visible providing the code works fine. 

Version 1 of my wireframe can be found [here](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/wireframe-v1.pdf).

A revised version was then created to incorporate the 3rd HTML page.  This revised version 2 can be found [here](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/wireframe-v2.pdf).

The wireframe also does not show two late changes. 
+ The first was to include a dropdown menu.  This was always in my thoughts but wasnt sure if this would be effective or appropriate, but adds a nice touch.
+ The second was to include a title on the quiz.html page. I felt when this was almost finalised and designed that something was missing and for better UX, I decided to add this to this page so throughout the quiz questions, the site goals are enhanced further.

### Surface

#### Typography 
+ Lato will be used as the site's main font type.
+ The fall back font type is Sans Serif should the imported fonts do not load correctly.

#### Colours
+ Font colour will be predominately black (unless hover over effects or JavaScript take an effect).  The font colour allows the text to stand out against the background used.
+ Buttons will be blue backround and hover over effects will change writing to white, for the Play and Restart buttons.

#### Imagery
+ A background image of Japan will be used across both HTML pages. This will provide site consistency. A light grey see through box will denote the gaming area.
+ The site will use appropriate images where applicable to provide user feedback on certain questions.
+ The favicon used is the Olympic rings.
+ Medals (imagery) will be given at the end of the quiz subject to the score awarded, or a false start gun will be shown should the user score zero.

## Features
The site features 3 HTML pages.  The main page will load with a welcome message on page landing.  It will provide a play button to start the quiz.  

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/responsive-index.JPG)

The quiz will then run, by linking to the second HTML page, where the user will be asked each question in turn.  The quiz will comprise of 10 multiple questions from a library of 20 questions.  The question number will also update for the user.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/responsive-quiz.JPG)

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/question-and-number.JPG)

Feedback will be provided to the user if they have answered a question correctly or incorrectly.  

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/correct-answer.JPG)
![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/incorrect-answer.JPG)

There will a score tracking system so the user knows how many questions have been answered correctly throughout.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/scoreboard.JPG)

Once the quiz has been completed, a results page will load showing the score.  There will be the option to restart the quiz to attempt a better score.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/responsive-finish.JPG)

Should the calculation of the score not be correct (either over 10 or below zero), a 404 error page will display. This will contain a message to confirm unable to display the page correctly and a link to go back to the home page to restart.  The background will be white with the zero of the 404 being red to try and replicate the Japanese flag.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/responsive-404error.JPG)

I have also implemented a late change to provide a menu option which will allow a user to restart the quiz should they wish to during the current game.  There will also be links to sites so they can learn about the Tokyo games, and even find the answers should they wish to cheat.  The restart option is not shown on the index.html page.

![alt text](https://github.com/luis198327/olympics-quiz-game/blob/main/assets/images/dropdownmenu.JPG)


<<add image of rotate device>>

### Features Left To Implement
Additional features that I would like to include in a future release would be to:
+ Have a bigger suite of questions (a library) where it would generate a wider question set to the user, making the site more interesting, more variety and less predictable.
+ Adapt the user feedback when a question has been answered by showing an image or further information on the subject question and answer.  This will provide more meaning and learning.
+ Set a time limit for the quiz itself e.g. a maximum time of ten minutes to complete or 15 seconds per question so it adds more interactivity and more urgency and risk for the user.
+ To store higher scores and show these within a table on a separate HTML page.  This would seem more appropriate when the library of questions is more extensive.
+ To share user scores and challenge friends using social media links such as facebook and twitter.

## Technologies Used
### Languages Used
+ HTML5
+ CSS3
+ Javascript

### Frameworks, Libraries & Programs Used
+ [GitPod](https://www.gitpod.io/) - used as the development environment for my website. I also used Git for Version Control in the project.
+ [GitHub](https://github.com/) - used to store the projects code after being pushed from GitPod.
+ [Balsamiq](https://balsamiq.com/) - used to create the wireframes during the design process.
+ [Google fonts](https://fonts.google.com/) - used to import the 'Lato' font into the style.css file which is used on all pages throughout the project.
+ [WebAim](https://webaim.org/resources/contrastchecker/) - used to check the contrast of foreground and background text/colours to ensure they pass.
+ [Font Awesome](https://fontawesome.com/) - used to import icons into my website for social media links as an example.
+ Google Images - used to search for images for website including olympic rings and hero image.  Details can be found under the Credits section.
+ [Icons8](https://icons8.com/) - used to import the favicon olympic ring icon image.
+ [Favicon](https://favicon.io/) - used to convert the image from Icon8 into an ico file.
+ [W3Schools](https://www.w3schools.com/) - used to refer to as additional support and to get ideas for how to use code in my webpage. 
+ [W3C HTML Validation Service](https://validator.w3.org/#validate_by_input) - used to check the markup validity of Web documents in HTML.
+ [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) - used to check the validity of my CSS in the project.
+ [JSHint](https://jshint.com/) - used to check the validity of my JavaScript code in my project.
+ [Python Tutor](http://www.pythontutor.com/) - used to check my JavaScript code in the project. 
+ [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - used to test site, check console logs and run Lighthouse reports.
+ [TinyPNG](https://tinypng.com/) - used to compress my images so that they reduce file size and load faster within the site.
+ [istockphoto](https://www.istockphoto.com/) - used to obtain welcome image.
+ [unicode table](https://unicode-table.com/en/) - used to find the CSS unicode to allow me to insert a tick and cross symbol to provide user feedback if a correct answer is provided.
+ [free images](https://www.freeimages.com/) - used to obtain images of medals. Refer to credits section for additional details.
+ [flatuicolors](https://flatuicolors.com/palette/gb) - used to obtain colours on 404 error page.

## Testing
### Testing User Stories From User Experience (UX) Section
#### Site Owners Goals
+ The main goal of the site is to provide a challenging and informative quiz to entertain online users.

    <<Add content>>

#### External User Goals
+ The site’s users want to play an online quiz to test general/specific knowledge based on the Olympics Games and the country of Japan.

<<Add content>>

+ Able to keep track of scores and improve their scores when wishing to attempt the quiz again.

<<Add content>>

### Further Testing
 + When testing different scores on the finish page, I noticed the image and corresponding message were not consistent when a score of zero was awarded.  The Bronze medal was shown but the message stated was the user won Gold.  I have therefore expanded the if else statement to add a further 2 conditions.  The first was so that if the score equals zero, a new false start image and message is displayed.  Anything else should result in a 404 error message to presented, which is styled to look like the Japanese flag (the zero being a red circle).

 + When testing the quiz functionality, it became clear that there was the ability to click multiple times on one question, and it would then race through and answer the remaining questions unintentionally, which is bad UX. I was going to reduce the timer that moves on to the next quesiton and add this as a bug, but resolved the issue.  I added a variable and if statement to accept an answer at a certain time and then to prevent once an answer has been selected. 

 + With the use of media queries, these have been set at certain break points set at max-width.  The site and pages respond when the screen size decreases.  I have tested this based on the question which has the most content and longer answers as this fills the page screen more.  All break points in a responsive page work fine down to at least 300px wide.  Even using Chrome Tools and setting the screen as a Galaxy Fold (280px wide) seems to work perfectly fine.

+ While testing the media queries, I noticed on smaller devices if the orientation changed to landscape, then the layout of the quiz would look odd with elements over hanging one another etc. This has been fixed so that a message pops up to rotate screen back to portrait mode.  Further details can be found below under the issues i overcome secion. 

 + Having added the dropdown menu as a late change to the scope, on testing this, I decided that the Restart/Home option from the dropdown content was not needed on the index.html page.  This is due to the fact that the page the user would be on is on the home/restart page. 

 + I didn't like how the hover effect was behaving when hovering over and selecting an answer.  On desktop/laptop devices this was working fine but when using a mobile or other touch device, the yellow background was then staying put until the next selection was chosen.  This is not great for a UX perspective.  Having to tried to correct this, the easiest way was to add a CSS media query, which would effectively remove the hover over effect for these devices. <<<add further comments that this shows in dev but not in prod>>>

#### Validation
I used the W3C Markup Validation Service to check the Markup and W3C CSS Validation Service to check the CSS validity of the site.  I also used JSHint to check the functionality of my JavaScript code.  I used these during and at the end of the project to regularly identify issues.  

I also referred to Google Chrome Tools and Lighthouse reports to check details were ok.  This did flag a couple of issues throughout the project like contrast issues that were reported and missing meta description on finish.html page which was giving this a low SEO score.

I have tested this on Google Chrome, Firefox, and Microsoft Edge browsers and no issues with the code/behaviour of the quiz were found.  I have also tested this in production using an Android mobile.  

Google Chrome Dev tools have been used and the responsiveness seems to be fine on all mobile and table devices provided, and a general responsiveness check with different widths and heights also seem to fine.  I have check the screen width as low as a Galaxy Fold set at 280px wide.

<<Update when tested - All HTML pages, and the CSS styling page and javascript have passed with no errors/issues highlighted.>>

<<Add screen shots of the code passing the validation sites>>

#### Issues I Overcome
+ I was having trouble with the if else statement under the finish.html page to correctly show the message and medal image. I manage to overcome this by expanding the if else statement and setting the operator to AND (&&) symbols.  I was using >= signs which was causing the code to behave not as intended should the score go beyond 10 in error.  A 404 error message has also been embeded just in case to prevent issues and a bad UX. 

+ When i entered the extra bit of code as mentioned in the further testing section for accepting answers, it wasn't pulling the question and answers from the question library. I copied the code into JSHint and discovered a quotation mark was added in error, which was not obvioudly seen for some reason in GitPod. This corrected the code and the question and answers appear from the library ok.

+ For some reason, using GitPod I was unable to update my README file as it was jumping to the preview view everytime i clicked on this.  I tried to go back to a previous version, restart GitPod, restart Windows to try and reset this but for some reason this didn't work. I deleted the file and re-inserted the file and code that was previously written. Therefore hopefully this has kept and the commit messages are ok.

+ I noticed that when running lighthouse reports that the Best Practices section was showing an error message being logged to the console.  The error message was "TypeError: Cannot set property 'innerHTML' of null". Reading online about this, it suggested that the JS script file was not at the end of the body section (eg in the head element), or I was referring to the wrong ID. But after checking this wasnt the case, as the correct ID was being used at line 197 of the script.js file and the script was at the end of the body section.  I also ran the code into JSHint just to check and no errors were reported.  Therefore i re-reviewed each HTML page and removed unnecessary references to the JS files in my directory, removing ones from index.html and finish.html. Rerunning the lighthouse reports has removed this error referring to the js line 197.

+ When testing the media queries and specifically on rotation, I noticed the layout looked odd when a user would switch their device (notiably a mobile device) to landscape mode.  
    + I tried to find a way to prevent this from happening and searched online for a fix. I started to investigate this using javascript and found a couple of ways but comments suggested this was either brand new technology (to suggest this may not work or have been fully verified on all platforms) or wasn't something that I wanted exactly for my project. 
    + I therefore found a resource using CSS and apply another media query on codebox (refer to code section). I then manipulated this code so that it works with mine, and used an image from font awesome to show the rotation symbol. 
    + This was working ok but on the finish.html and 404error.html pages this wasnt working.  This was due to there being no overall container. Therefore a new class of container1 was created and applied to the CSS styling sheet.
    + While the code was working, I then noticed a further issue. On the finish.html page subject to the final result achieved, an image would be displayed which is provided via a function in the finish.js file. When the screen goes from portrait to landscape for a smaller device, the message displayed but the image stayed put. This wasn't what I wanted to happen. I therefore researched online and using W3Schools I was able to manipulate code so that it would remove the background image when the window's outer height was reached.
    + When further testing of this was carried out, I realised that the image was still not being removed when the device was rotated.  It would only update if i applied a hard reload of a web page and then keep that change (so either with the image showing or not even after changing the orientation). I therefore found on stack overflow a piece of code which would do this and added this to the finish.js file. Refer to the code section below. This now auto updates although you can see the image very briefly when the orientation changes.  From further research i cannot find this solution.

### Known Bugs/Improvements   
+ I would like to have provided an image or message to confirm if the answer was correct or incorrect.  I tried to insert a div using JavaScript to provide a correct or incorrect message, but couldn't quite get the code to provide the correct user feedback. Was only applying to one class type.  As a temporary fix, i used CSS to style an after pseudo class to insert a tick or cross to provide additional user feedback.

+ As mentioned in the issues I overcome, I have managed to fix the auto rotate of a small device from showing the page contents.  However if a user once landed on the finish.html page were to rotate this, the medal imagery or false start image would display for a very brief second. I would imagine this might be fixed with some time function or order of code, but haven't been able to resolve this minor bug I would like to improve.  Although further testing of this seems that is might be a red herring.  When i tested this on my mobile in the production environment, the image was not displayed on the rotation of the screen.  Therefore i am confident this is no longer a bug but keeping this to monitor for any future release.

## Deployment
My project was developed using the IDE, Gitpod. 

The site was deployed to GitHub pages. The steps to deploy are as follows:

+ Within the GitHub repository, navigate to the Settings tab.
+ Then select the Pages sub-menu option on the left, which takes you to GitHub Pages. 
+ Within the source section drop-down menu, select Main (or Master Branch) and click on save.
+ Once this has been saved, the page will confirm that the site is ready to be published and provides the URL address.
+ Refreshing the page will confirm the website has been deployed, again providing the URL address.
+ The deployed URL is [https://luis198327.github.io/olympics-quiz-game/](https://luis198327.github.io/olympics-quiz-game/)

The deployed site will update automatically upon new commits to the main (or master) branch. For the site to deploy correctly on GitHub pages, the landing page must be named index.html.

### Making A Local Clone
You can clone this repository by:
+ Logging into GitHub and locate the GitHub Repository luis198327/olympics-quiz-game
+ Under the repository name and with the Code tab displayed by default, click the dropdown "Code" option.
+ This will give you the option to copy the repository using HTTPS by clicking the copy button.
+ Open Git Bash.
+ Change the current working directory to the location where you want the cloned directory to be made.
+ Type git clone and paste the URL i.e. $ git clone https://github.com/luis198327/olympics-quiz-game.git.
+ Press Enter, and your local clone will be created.

Or simply clone this repository directly into the editor of your choice by pasting $ git clone https://luis198327.github.io/olympics-quiz-game/ into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits
### Content
+ All content was written by the developer, unless referenced below.

### Code
+ [stack overflow](https://stackoverflow.com/questions/17212094/fill-background-color-left-to-right-css) - used to obtain initial code which i then tweaked to provide a hover effect when selecting an answer.
+ I used code from W3Schools to create the hover over menu/nav and adapted this to the styling, positioning, wording for my quiz game.  The menu is situated in the top left of each of the 3 main HTML pages.
+ [code box](https://code-boxx.com/lock-screen-orientation/) - used CSS media code to restrict landscape view being used on smaller devices - in other words to display a message to rotate back to portrait mode. I have adapted the code so that it is using min-height instead, so it seems to allow use for bigger devices like tablets not matter if its portrait or landscape mode.
+ [stack overflow](https://stackoverflow.com/questions/17708869/how-to-reload-the-webpage-when-orientation-changes) - used to add code to refresh the page when the devices orientation changes.
+ [Developer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover#Example) - used to seek a way of disabling hover over effect on touch devices.

### Media
+ [rawpixel](https://www.rawpixel.com/) - used to obtain welcome image of tokyo background.
+ [pinterest](https://www.pinterest.co.uk/) - used to obtain the olympic rings and feathers image on the home page.
+ [free images](https://www.freeimages.com/) - used to obtain the images of the 3 medals used on the results/finish page.
+ [sports matik](https://sportsmatik.com/sports-corner/sports-technology/starter-pistol) - used to obtain the false start image on the results/finish page for when a score equals zero 0.

### Resources
I used the following resources to obtain ideas for the questions within the quiz, and two of these are linked within the dropdown menu of the quiz itself:
+ [Olympics main web site](https://olympics.com/tokyo-2020/en/)
+ [Google](https://www.google.com/) - used for general searching
+ [Wikipedia](https://en.wikipedia.org/wiki/2020_Summer_Olympics)

I also used the following resources to bring inspiration on creating quiz games using javascript:
+ [youtube](https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF)
+ [simple steps code](https://simplestepscode.com/javascript-quiz-tutorial/)

### Acknowledgements
+ I used the Code Institute GitHub template as a basis for setting up my repository.
+ I used W3Schools to assist with some features and to develop my understanding.
+ I would like to thank my mentor Spencer Barriball for his review and ongoing support with this project.
+ This project is for educational use only and was created for the Code Institute Module of an Interactive Front End Site.
