Today you will create a news site: Spaceflight, using TypeScript.
Comply with the requests and try to implement types and interfaces as best you can.

 

📃 API Documents:
You can find the entire documentation here –> LINK

The endpoint to get the list of articles will be like this:

https://api.spaceflightnewsapi.net/v4/articles
Use the id property of each route you want information about

https://api.spaceflightnewsapi.net/v4/articles/:id
 

ASSIGNMENTS:
Implement a nice main page to display API articles; each article must be viewed by a component and must show details such as title, publication date, cover image, etc…
Clicking on an item should take the user to the detail page, where data retrieval of a particular item will be done. Show on this page any information you can get about it.
 

Suggestions:

As usual it separates the application into reusable components
Implement prop and state interfaces for each component when needed
Implements an interface for the result of the API call only
Skip the Redux approach and just fetch the data into components directly and save the result in local state
