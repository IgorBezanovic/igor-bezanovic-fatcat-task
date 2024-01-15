## Igor-Bezanovic-FatCat-Task

After pulling the project you need to add in the root of project .env file with following data:
`VITE_API_URL="https://jsonplaceholder.typicode.com/`

Project is also deployed on Vercel cloud, url:
https://igor-bezanovic-fatcat-task-d0fl7gkoj-igorica1602.vercel.app/

### Install dependencies

`npm install`

### Run the project

`npm run dev`

### Task - Transfer the project to TypeScript

##### Solution steps:

-   Checking if dependencies in package.json supports TS and installing TypeScript
-   Creating a tsconfig.json, using following rules from the task:
    -   "noImplicitAny": true
    -   "strict": true
    -   "strictNullChecks": true
    -   "noImplicitThis": true
        Beside following rules there is added path property **_@homework-task/_** and some additional configuration.
-   Renaming files from .jsx to .tsx.
-   Introducing TypeScript types for props, objects and variables, etc.
-   Setup some configuration in .eslintrc, and removed duplication of **_eslint:recommended_**

### Task - Create a List Component

##### Solution steps:

-   Created Users page
-   Created hook for useUsers
-   Created component UserDetails
-   Introduced **_@ant-design/icons_**, library for easy icons with high quality
-   Introduced userDetails array in constants, for better scalability and reusability.
    in that array we define which property we want to present from a single user. Object represent name
    of user property and proper icon for that property. With this approach we can easily add and remove
    data for rendering in our web app.

##### Points for improvement:

-   Create loader which will be executed during fetching users
-   Create Error screen if connection with backend doesn't work
-   Create .env file to hide base URL and create file where we create axios client and call them on each hook function

### Task - On my initiative during first two tasks, reorganization repo

During first two task a choose to reorganize repo:

-   Introduced common folder.
-   Changed organization in components folder, each component have self folder.
-   Introduced hook folder. Where is for now getUsers, for next tasks that will be expanded.
-   Introduced page folder, which represent each page in application.
-   Introduced routes folder and react-router-dom, for structuring navigation and setup app layout with all possible pages.
-   Introduced utils folder, for now there is only constants where is stored all arrays for rendering content.
-   Edited all path with our custom **_@homework-task/_**

### Task - Create a Form Generator Component

##### Solution steps:

-   Created Form page
-   Created hook for usePost and usePosts
-   Created ForGenerator function, where is implemented collection form data, validate them and implement mutation.
-   Created Zod validation with with error messages, title is max 20char, body is max 500 char and both is required.
-   Form is a little bit styled as FatCat style is :) and on that page is rendered all posts from API together with <Marquee> and FatCat cats.

### Task - Create a Page Generator Component

##### Solution steps:

-   Created Page folder where is logic for this task
-   Introduced two props component array which represent each page, you can navigate via header
-   In code is implemented fallback fragments if some component doesn't exist to not break the app

### Task - On my initiative Not Found page is created look like FatCat 404 page
