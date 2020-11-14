# Tests 

Tests are carried out first on the largest screen size and then updated regularly for smaller screens.

The W3CSchools and W3C CSS validator services were used to test for the overall syntax of the html and css pages.

## Bugs previously found: 

### Navigation Bar
  1. Hover over navigation bar with cursor
  2. Check to see if the toggler works on mobile screens
  3. Ensure that the navbar is semi-transparent at the start of the main page and becomes transparent as you scroll down 
  4. Check if navbar stays sticky past the header 
  5. Check to see if the links work and bring you to the right sections/html files
  6. Check to see if the navbar toggler/hamburger is visible
   
### Navbar Comments

- Instead of coloring the navbar toggler to become visible. Instead, I initially used an icon from font awesome to show represent it and colored it.
- This has now been changed to a Font-Awesome Icon.
- Bug encountered where Navbar would stay sticky only until the header section has finished.
- The navigation bar animates perfectly when scrolling down the page. However, this is an inconveience for mobile phones/iPad users.

### Navbar Debug

- Fixed non-sticky bug using W3schools code: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 
- Fixed Hamburger icon by changing it to 'fa fa-bars' instead of 'fab fa-bars'

### Hero Section

1. Check to see if AOS animations are working
2. Check to see if social links work 
3. Check if there is a small underline after the social icons
4. Check if the image is being shrunk when on mobile
   
### Hero Section Comments: 

- When hovering over social icons, there is a bug where there is a small underline next to the icons. 

![SocialLink-error](assets/tests/social-link-error.png)
### Hero Section Debug
- Annoying underline has been debugged using the following css: 
  
 `.social-icons a {
    text-decoration: none;
} `

- The Captions are positioned awkwardly on smaller screens - media queries have been created to style them accordingly.

### Double Scroll Bar Bug 

projects.html bug discovered. The page has 2 scroll bars which is inconvenient for the user and overall looks unprofessional. 

1. Check if overflow-x and overflow-y is visible or hidden in style.css 
2. Adjust width and heights of container/content to a shorter amount - see if overflow will change/disappear.
3. Check to see if index.html page is encountering the same bug

![2ScrollBar-bug](assets/tests/2scrollbars.png) 

### Double Scroll Bar Debug

- Forgot to type in closing section tag 
- '/section'

## Website Testing:

### About Me Section

1. Check if 'About me' Section image floats left and the text floats to the right on Laptop and Desktop
2. Check if the 'About me" Section image is centered when viewed on mobile
3. Check if 'About me" Section call to action buttons are display in a row when viewed on Laptop and Desktop
4. Check if 'About me" Section call to action buttons display in a column at the center of the page when viewed on devices smaller than a laptop.
5. Check if blue border behind the image is responsive and adjusts accordingly to the image size
6. Check if the blue border is hidden when viewed on devices smaller than a laptop

## About Me Section results



## Work History Section

## Work History Section results

## Testimonials Section

## Testimonials Section results

## Projects Page

1. Click on the project links via the 'view' buttons
2. Check if clicking on the links opens a new page for the project
3. Check if the links lead to the correct page
4. Check if the buttons are centered
5. Test if the 'option' buttons near the footer function correctly and link to the correct pages

## Project Page Results

- The project 'view' buttons are centered in the specified view ports tested with Chrome Developer tools (Desktop, Laptop, iPhone 5/SE, 6, 7, 8, X)
- The buttons are linked to the correct pages 
- The links open a separate page
- 'Back' Option button brings the user back to the top of the page
- 'Home' opens a new page which leads back to index.html page
- 'Contact Me' opens a new page which leads to the contactme.html page

## Contact Me Page

1. Place contact information into the input spaces
2. Click submit to check if it submits or stops the submission
3. Place the contact information but this time only partially and submit. e.g. missing information
4. Place contact information without name
5. Place contact information without email address
6. Place contact information without comments
7. Test if the 'option' buttons near the footer function correctly and link to the correct pages

## Contact Me Page Results

- The Contact Me page submits the page when all the required input fields are submitted
- Will not submit without the first name of the user
- Will not submit without email address or any input that does not have an '@'
- Will not submit without any comments on the contact form
- 'Back' option button brings the user back to the top of the page
- 'Home' opens a new page which leads back to index.html page
- 'Projects' opens a new page which leads to the projects.html page

## Footer 

## Footer Results

## Viewport Responsiveness

1. Check if website is responsive by right clicking 'inspect' and going to developer tools
2. Click on 'Toggle Device Toolbar' and view the website on various viewports.
3. Check if website is responsive on 'ami.responsivedesign.is'. Here is the [link](http://ami.responsivedesign.is/#)
4. Check if the website is responsive when using the appropriate physical devices.

### Viewport Responsiveness comments: 

- The Website is fully responsive on 'ami.responsivedesign.is.' Here is the screenshot: 
  ![screenshot](assets/readMe/banner.png)
- The Website is responsive on when checking on Chrome developer tools.
- The Website was tested physically through Desktop, Laptop, iPad, iPhone XR and iPhone 11. The results showed that the website was responsive.

## Testing User Stories from UX 

### First Time Visitors: 

a. I would like to know the purpose for the creation of the website from the first instance of opening it. 
  - When the recruiter opens the website there is an animation that shows what the website is about, which gives a caption of the candidate's name and his occupation.
  
b. I would greatly appreciate it if the website were easy to navigate.
  - The navigation bar is sticky so no matter where the user scrolls it will always be present to help them navigate to their desired content.
  - There are call to action buttons in some sections.

c. I expect the website to display relevant content and stay consistently relevant as I explore the site.
  - The website aims to display the necessary content that the recruiter will expect to know and will continue to add relevant content to what has already been shared. e.g. At first the recruiter/users will encounter the caption showing this website was created by a junior developer and next it shows them the 'about me' section outlining the technologies the candidate is using.
  
d. I would appreciate it if my interactions with the site were acknowledged so that I know what I am doing and where I am going.
  - There are hover animations and animations on scrolling throughout the website, these are used to help the recruiters/users locate their position in the website and where their cursor is pointed 

e. I would like the content to be structured and easy to follow.
  - When the user scrolls, it will lead to content which aims to enhance the candidates potential. 
  - It does this by showing complimentary information about the candidate. These are divided into sections. This makes the info. easy to digest. This ultimately adds to the information that was previously shared.

### Returning Visitors: 

a. I would like to see in-depth information to the website with regards to how the candidate is improving in his ability to code. 
  - The website will be continuously updated as the candidate's skill increases. The 'about me ' section and the 'projects' section shows the the candidate's coding current and future ability.

b. I would like to see if the candidate has completed any coding experience with other businesses.
  - If a business wishes to display the candidate's work, they may give permission to have it established as a project in the candidate's website.
  - The testimonial section of the site will also help with this.

c. I would like to it if there were a way to contact the candidate and find out more information.
  - There is a 'contact me' button in the navigation bar.
  - There is a 'contact me' button in the 'About Me' section.
  - There is a 'contact me' form at the very end of the page.

### Frequent Visitor Goals:

a. I would like to check if the candidate is working on any projects.
  - The Projects section is constantly updated and will show any newly finished projects.
  - There is a github icon in the footer and the social icons in the hero section which leads to the candidates github page.

b. I want to be able to contact the candidate quickly.
  - The 'contact me' button in the navigation bar which will lead to the contact form where the user can message the candidate about current projects.
  - There is a contact button placed in the 'About me' section.
  - At the end of every HTML page, the 'contact me' button is always present.

c. I want to be able to navigate to any section of the website in order to read it in more detail.
  - The navigation bar is sticky, the user will be able to access this and press the appropriate button to travel to the desired section/page.
  - There are additional buttons at the end of every page which gives the user the option to return to the top of the page or check the candidate's projects or to read more about the candidate's work experience. 

## Validators 

### W3Schools HTML Validator 

The results of the validator are as shows: 

- 2 warnings 
- 0 errors
  
Here is the [link](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwyne-ybanez.github.io%2Fpersonal-portfolio-master%2F)

### W3Schools CSS Validator 

The results of the CSS validator are as shows:

- 62 errors (All due to Bootstrap CDN, AOS; No developer related errors) 
- 791 warnings (All due to CDN's used, mainly Bootstrap; No developer related warnings)
- Majority of the Website is validated CSS

Here is the [link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwyne-ybanez.github.io%2Fpersonal-portfolio-master%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Further Testing

-   The Website was tested on Google Chrome, Firefox, Microsoft Edge and Safari browsers.
-   The Website was viewed on the specified testing devices such as Desktop, Laptop, iPad, iPhone 5, SE 6, 7, 8 and iPhone X using Chrome Developer Tools.
-   Links were tested repeatedly.
-   Friends and family members were asked to review the website, its content and the user experience overall.
-   Code Institute students were asked to review the website for any responsiveness insufficiencies and coding errors.





