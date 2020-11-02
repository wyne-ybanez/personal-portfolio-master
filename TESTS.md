# Tests 

Tests are carried out first on the largest screen size and then updated regularly for smaller screens.

These test are carried out on website functionality and bugs found

## Navigation Bar: 
  1. Hover over navigation bar with cursor
  2. Check to see if the toggler works on mobile screens
  3. Ensure that the navbar is semi-transparent at the start of the main page and becomes transparent as you scroll down 
  4. Check if Navbar stays sticky past the header 
  5. Check to see if the links work and bring you to the right sections/html files
  6. Check to see if the navbar toggler/hamburger is visible
   
Comments - Large Screens:

- Bug encountered with JS file, scrolling to the very top would make the navbar transparent
- Fixed Bug by changing class names in the script.js File, although, unclear if the script.js code will work.
- Instead of coloring the navbar toggler to become visible, I instead used an icon from font awesome to show represent it and colored it.
- Bug encountered where Navbar would stay sticky only until the header section has finished.
- Fixed non-sticky bug using W3schools code: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 

## Banner Section: 
1. Check to see if AOS animations are working
2. Check to see if social links work 
3. Check to see if captions are blocking profile picture image
4. Check if social icons vanish when on mobile screen
5. Check if there is a small underline after the social icons
   
Comments: 

- When hovering over social icons, there is a bug where there is a small underline next to the icons. 

![SocialLink-error-Demo](assets/tests/social-link-error.png)
### Debug
- Annoying underline has been debugged using the following css: 
    .social-icons a {
    text-decoration: none;
}

- The Captions are positioned akwardly on smaller screens - will have to create media queries and style them accordingly.

## Double Scroll Bar Bug 

projects.html bug discovered. The page has 2 scroll bars which is inconvenient for the user and overall looks unprofessional. 

1. Check if overflow-x and overflow-y is visible or hidden in style.css 
2. Adjust width and heights of container/content to a shorter amount - see if overflow will change/disappear.
3. Check to see if index.html page is encountering the same bug

![2ScrollBar-bug-Demo](assets/tests/2scrollbars.png) 

### Debug

- Forgot to type in closing section tag 
- '/section'
