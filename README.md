## Igor-Bezanovic-FatCat-Task

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
-   Created hook for getUsers
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

---

### Create a Form Generator Component

1. Develop a scalable and reusable React component with the
   following capabilities:

-   **Validation Schema:** Accept a validation schema prop to ensure form data adheres to specified rules.
-   **API Hook Call:** Incorporate an API hook that handles states such as data, isLoading, and isError.
-   **Callback Function for Form Rendering:** Implement a callback function prop (renderForm) that renders the form elements and handles their state appropriately.

2. Component Implementation:

-   Utilize this component to create a form with two fields:
    -   Input Field (‘title’): A required field with a maximum character limit.
    -   Textarea Field (‘body’): Also a required field with a maximum character limit.
-   Both fields should display error messages if the input doesn't meet the criteria set by the validation schema.
-   For form submissions, use the POST method at https://jsonplaceholder.typicode.com/posts.

Recommended libraries, but you can use whatever you prefer:

-   **_React Query:_** For handling API calls.
-   **_Zod:_** For defining the validation schema.
-   **_React Hook Form:_** For managing form state, submission, and logic.

Alternatively, you're free to use any library or custom solution that aligns with the above requirements.

Component Example **(this does not have to be the exact implementation)**:

```tsx
<CreateForm<ICreateCycleFormInputs>
    useMutation={useSomeMutation}
    validationSchema={someSchema}
    successMessage="Successfully created something"
    renderForm={({ register, errors }) => (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                autoFocus
                {...register('name')}
            />
        </>
    )}
/>
```

### Create a Page Generator Component

Your task is to create a reusable React component for
building web pages. This component should be designed
to handle a variety of page layouts and components
dynamically, based on the props it receives.

-   **_Dynamic Layout Handling:_** The component must handle different page layouts.
-   **_Scalability and Reusability:_** It should be easily scalable to accommodate future layout types and be reusable across different pages.
-   **_Prop Structure:_** The main prop is an array of objects, each representing a section of the page with its own layout and components.
    -   Each object in this array contains:
        -   type: identifying the layout type.
        -   components: an array of objects, each describing a component to be rendered in this section.
        -   props: properties specific to that layout (ex. background color)
    -   Each component object has:
        -   type: the type of the component (e.g., 'componentHero').
        -   props: properties specific to that component.

You can use the components provided in src/components. If you desire, you can
add your own components or change the existing ones.

Here is an example of the props that the component should accept:

```ts
const data = [
    {
        type: 'layoutSection',
        props: { ...layoutProps },
        components: [
            {
                type: 'componentHero',
                props: { ...componentProps },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { ...layoutProps },
        components: [
            {
                type: 'componentItemsShowcase',
                props: { ...componentProps },
            },
            {
                type: 'componentTrustBar',
                props: { ...componentProps },
            },
        ],
    },
];
```

### Additional Requirements

You will have to complete all of these for your task to be considered done.

-   Follow the eslint and prettier rules set by the project; you must not use any ts-ignore or disable eslint.
-   It must contain a Readme.md file that has instructions on how to run the project as well as a brief explanation of how you have implemented these features. In the project, there is already a Readme.md file present feel free to override it completely.
-   Your code must follow the latest rules and conventions
-   You have to have checks for typescript and eslint that disallow you to commit any changes that cause errors.
-   There should be no TypeScript or Eslint errors in your code.
-   Feel free to add your own touch to these tasks
-   Keep in mind that you will have to expand upon this solution in the technical interview

### Note: You can override this document
