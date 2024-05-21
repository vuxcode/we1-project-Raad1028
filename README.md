[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14582101&assignment_repo_type=AssignmentRepo)
# Project Instructions

Follow the instructions here: https://vuxcode.netlify.app/new/we1/lessons/major-project-brief/

The aim of the project is to show how you have developed your website, the steps you have taken and the problems you have solved!

REMEMBER TO "COMMIT" YOUR CHANGES REGULARLY TO SHOW HOW YOU HAVE BUILT THIS PROJECT!

# Project Notes

> You can use this section of the file to keep notes about your project as you work on it

# Project Summary

> Before the final submission date you should include a "PROJECT SUMMARY" in this section here.

This project is a website for videogame reviews, written by the owner of the website. The reviews that are currently on the website are AI-generated.

From the very start of the project I had a vision of how the layout would look in the end, some of those design choices proved harder to implement than I originally thought it would. For example I wanted text to wrap around an element placed in the bottom right of a div, I found ways to do it in many other positions, but doing it in the bottom right required a lot of googling, where I found a CSS property called "[shape-outside](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)" which lets you decide how text should wrap around an element.

Due to having my sidebar menu be an iframe, at first I did not understand that regular `<a>` links inside the iframe only affects the page shown inside the iframe. For it to work as intended, all links in the sidebar needed `<a target="_parent">` in for links to work as intended.

Here's some things I would've added if I had more time:
    
- Save state for extended sidebar menu items, so for example if you have opened the RPG list it would stay open on the next page you visit.
- A way to make images on the game pages larger if you click on them.
- Look into making the infobars on the game pages be more dynamic. Currently when you're on a smaller screen, you have to scroll down to see all the info. But when scrolling down, the background disappears and the text become hard to read.

When it comes to the budget I spent around 35 hours working on the website which is 5 hours above the budget. I probably should have spaced out my time working on it a bit more, I was under the impression that it had to be done by the 29th for some reason. I realized it was actually meant to be ready on the 24th and powered through 10+ hours over the weekend.