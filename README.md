# Olympics Quiz Game

## Code Institute Mile Stone 2 Project - Interactive Front End Site

The Code Institute project brief was to create and build an interactive front end site.  The site should respond to users' actions, allow users to engage with data, alter the way the site displays the information to achieve their preferred goals, using HTML, CSS and JavaScript while following UX industry conventions. As per the Code Institute course and methods, this was designed from a Desktop to Mobile site, so uses media queries within the CSS to have max-width break points. This project is for educational use only.

<!provide link to responsive preview >

## Olympics Quiz Game (provide link to final web page here) 
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
I used wireframes to put together a very basic mock-up of the site based on a desktop/tablet and mobile devices. This did develop during the project as my understanding of JavaScript progressed.  I was going to keep it to 2 html pages, but found it easier to creare a third page for the results page separately. A fourth page has also been added (404 error), but this should not be visible providing the code works fine. 

The wireframe also does not show a late change made which was to include a dropdown menu.  This was always in my thoughts but wasnt sure if this would be effective or appropriate, but adds a nice touch.

The wireframe can be found <<insert wireframe>>.

### Surface

#### Typography 
+ Lato will be used as the site's main font type.
+ The fall back font type is Sans Serif should the imported fonts do not load correctly.

#### Colours
+ Font colour will be predominately black (unless hover over effects or JavaScript take an effect).  The font colour allows the text to stand out against the background used.

<<<(may need to add context on colours for the question/answer boxes)>>>

#### Imagery
+ A background image of Japan will be used across both HTML pages. This will provide site consistency. A light grey see through box will denote the gaming area.
+ The site will use appropriate images where applicable to provide user feedback on certain questions.
+ The favicon used is the Olympic rings.
+ Medals (imagery) will be given at the end of the quiz subject to the score awarded, or a false start gun will be shown should the user score zero.

## Features
The site features 3 HTML pages.  The main page will load with a welcome message on page landing.  It will provide a play button to start the quiz.  

The quiz will then run, by linking to the second HTML page, where the user will be asked each question in turn.  The quiz will comprise of 10 multiple questions from a library of 20 questions.

Feedback will be provided to the user if they have answered a question correctly or incorrectly.  

There will a score tracking system so the user knows how many questions have been answered correctly throughout.

Once the quiz has been completed, a results page will load showing the score.

There will be the option to restart the quiz to attempt a better score.

Should the calculation of the score not be correct (either over 10 or below zero), a 404 error page will display. This will contain a message to confirm unable to display the page correctly and a link to go back to the home page to restart.  The background will be white with the zero of the 404 being red to try and replicate the Japanese flag.

I have also implemented a late change to provide a menu option which will allow a user to restart the quiz should they wish to during the current game.  There will also be links to sites so they can learn about the Tokyo games, and even find the answers should they wish to cheat.

<<provide screen shots of the site>>

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

<<<
+ [Font Awesome](https://fontawesome.com/) - used to import icons into my website for social media links as an example.
>>>

+ Google Images - used to search for images for website including olympic rings and hero image.  Details can be found under the Credits section.
+ [Icons8](https://icons8.com/) - used to import the favicon olympic ring icon image.
+ [Favicon](https://favicon.io/) - used to convert the image from Icon8 into an ico file.
+ [W3Schools](https://www.w3schools.com/) - used to refer to as additional support and to get ideas for how to use code in my webpage. 
+ [stack overflow](https://stackoverflow.com/questions/17212094/fill-background-color-left-to-right-css) - code used specified on code section below to assist with hover over effect on answers.
+ [W3C HTML Validation Service](https://validator.w3.org/#validate_by_input) - used to check the markup validity of Web documents in HTML.
+ [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) - used to check the validity of my CSS in the project.
+ [JSHint](https://jshint.com/) - used to check the validity of my JavaScript code in my project.
+ [Python Tutor](http://www.pythontutor.com/) - used to check my JavaScript code in the project. 
+ [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - used to test site, check console logs and run Lighthouse reports.
+ [TinyPNG](https://tinypng.com/) - used to compress my images so that they reduce file size and load faster within the site.
+ [istockphoto](https://www.istockphoto.com/) - used to obtain welcome image.
+ [unicode table](https://unicode-table.com/en/) - used to find the CSS unicode to allow me to insert a tick and cross symbol to provide user feedback if a correct answer is provided.
+ [free images](https://www.freeimages.com/) - used to obtain images of medals. Refer to credits section for additional details.
+ [flatuicolors](https://flatuicolors.com/palette/gb) - used to obtain colours on 404 error page

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

#### Validation
I used the W3C Markup Validation Service to check the Markup and W3C CSS Validation Service to check the CSS validity of the site.  I also used JSHint to check the functionality of my JavaScript code.  I used these during and at the end of the project to regularly identify issues.  

I also referred to Google Chrome Tools and Lighthouse reports to check details were ok.  This did flag a couple of issues throughout the project like contrast issues that were reported and missing meta description on finish.html page which was giving this a low SEO score.

<<Update when tested - All HTML pages, and the CSS styling page and javascript have passed with no errors/issues highlighted.>>

<<Add screen shots of the code passing the validation sites>>

#### Issues I Overcome
+ I was having trouble with the if else statement under the finish.html page to correctly show the message and medal image. I manage to overcome this by expanding the if else statement and setting the operator to AND (&&) symbols.  I was using >= signs which was causing the code to behave not as intended should the score go beyond 10 in error.  A 404 error message has also been embeded just in case to prevent issues and a bad UX. 

+ When i entered the extra bit of code as mentioned in the further testing section for accepting answers, it wasn't pulling the question and answers from the question library. I copied the code into JSHint and discovered a quotation mark was added in error, which was not obvioudly seen for some reason in GitPod. This corrected the code and the question and answers appear from the library ok.

+ For some reason, using GitPod I was unable to update my README file as it was jumping to the preview view everytime i clicked on this.  I tried to go back to a previous version, restart GitPod, restart Windows to try and reset this but for some reason this didn't work. I deleted the file and re-inserted the file and code that was previously written. Therefore hopefully this has kept and the commit messages are ok.

+ I noticed that when running lighthouse reports that the Best Practices section was showing an error message being logged to the console.  The error message was "TypeError: Cannot set property 'innerHTML' of null". Reading online about this, it suggested that the JS script file was not at the end of the body section (eg in the head element), or I was referring to the wrong ID. But after checking this wasnt the case, as the correct ID was being used at line 197 of the script.js file and the script was at the end of the body section.  I also ran the code into JSHint just to check and no errors were reported.  Therefore i re-reviewed each HTML page and removed unnecessary references to the JS files in my directory, removing ones from index.html and finish.html. Rerunning the lighthouse reports has removed this error referring to the js line 197.

### Known Bugs/Improvements   
+ I would like to have provided an image or message to confirm if the answer was correct or incorrect.  I tried to insert a div using JavaScript to provide a correct or incorrect message, but couldn't quite get the code to provide the correct user feedback. Was only applying to one class type.  As a temporary fix, i used CSS to style an after pseudo class to insert a tick or cross to provide additional user feedback.

## Deployment  - review as there have been changes to GITPOD/GITHUB*****
My project was developed using the IDE, Gitpod. 

The site was deployed to GitHub pages. The steps to deploy are as follows:

+ Within the GitHub repository, navigate to the Settings tab.
+ Then select the Pages sub-menu option on the left, which takes you to GitHub Pages. 
+ Within the source section drop-down menu, select the Master Branch and click on save.
+ Once this has been saved, the page will confirm that the site is ready to be published and provides the URL address.
+ Refreshing the page will confirm the website has been deployed, again providing the URL address.
+ The deployed URL is <<Add deployed site URL>>

The deployed site will update automatically upon new commits to the master branch. For the site to deploy correctly on GitHub pages, the landing page must be named index.html.

### Making A Local Clone
You can clone this repository by:
+ Logging into GitHub and locate the GitHub Repository luis198327/olympics-quiz-game
+ Under the repository name and with the Code tab displayed by default, click the dropdown "Code" option.
+ This will give you the option to copy the repository using HTTPS by clicking the copy button.
+ Open Git Bash.
+ Change the current working directory to the location where you want the cloned directory to be made.
+ Type git clone and paste the URL i.e. $ git clone https://github.com/luis198327/olympics-quiz.  <<update URL with link>>
+ Press Enter, and your local clone will be created.

Or simply clone this repository directly into the editor of your choice by pasting $ git clone <<insert URL of live site>> into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits
### Content
+ All content was written by the developer, unless referenced below.

### Code
+ [stack overflow](https://stackoverflow.com/questions/17212094/fill-background-color-left-to-right-css) - used to obtain initial code which i then tweaked to provide a hover effect when selecting an answer.
+ I used code from W3Schools to create the hover over menu/nav and adapted this to the styling, positioning, wording for my quiz game.  The menu is situated in the top left of each of the 3 main HTML pages.

### Media
+ [rawpixel](https://www.rawpixel.com/) - used to obtain welcome image of tokyo background.
+ [pinterest](https://www.pinterest.co.uk/) - used to obtain the olympic rings and feathers image on the home page.
+ [free images](https://www.freeimages.com/) - used to obtain the images of the 3 medals used on the results/finish page.
+ [sports matik](https://sportsmatik.com/sports-corner/sports-technology/starter-pistol) - used to obtain the false start image on the results/finish page for when a score equals zero 0.

### Resources
I used the following resources to obtain ideas for the questions within the quiz:
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
