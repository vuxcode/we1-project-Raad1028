# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. [Solved 2024-04-12] Margin inbetween sidebar buttons: *When adding a new sidebar button, there is an automatic empty space of ~5 pixels between them. Through troubleshooting, it seems to be related to inline-blocks* 

2. [Solved 2024-04-18] Margin inbetween sidebar buttons issue reintroduced when sidebar is extended: *When sidebar is extended there is an automatic empty space of ~5 pixels between the buttons. This issue was resolved earlier when the sidebar didnt have an extend button.*
    * Solution: Made most elements into flex instead of inline blocks, so far I feel like the flex elements are easier to control.

3. [Solved 2024-04-23] Clicking on a link inside an iframe opens the link inside the iframe instead of opening the link in the browser.
    * Solution: Added 'target="_parent"' to the anchor element.

4. [Solved 2024-05-01] Weird positioning of boxes when screen is too small. *Seems to be related to justify-content: center.*
    * Solution: Turns out the issue was mostly because of the combination of"align-content: center;" and flex-wrap. Solved by changing align-content to flex-start.

5. [Solved 2024-05-07] Can't position the "buttons" in the way I want and still have text wrap around it.
    * Solution: I spent a long time trying to find a solution and came across this thread https://stackoverflow.com/questions/499829/how-can-i-wrap-text-around-a-bottom-right-div where someone was looking to position it the same way I did. most of the answers were a bit to complicated, but this one in particular helped me: https://stackoverflow.com/a/67180791/6309 
    
        The solution is to make use of "shape-outside" that basically tells the text where it should wrap using a calculation which I tweaked to fit better with my page.