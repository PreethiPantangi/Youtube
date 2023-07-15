## Building the YouTube application using ReactJS 

1. Installed tailwind using "npm i tailwindcss" 
2. Configured tailwind using "npx tailwindcss init"
3. Adding ["./src/**/*.js"] to content in tailwind config file. This will ensure that the files specified here will all be comiled when running tailwindcss
4. Adding tailwind to App.css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
5. Created the structure of the application 
    Header
        Body
        Sidebar
            MenuItems
        MainContainer
            ButtonsList
            VideoContainer
                VideoCard
6. Added the UI to header, Body, Sidebar files
7. Installed redux store using the commands "npm i @redux/toolkit" and "npm install react-redux"
8. Created store and appSlice in utils
9. Providing store to App.js using Provider 
10. Accessing the isMenuOpen from appSlice using the useSelector and displaying the sidebar accordingly.
11. Created the button list component by reusing the button component 
12. Developed the VideoContainer part of the page by fetching most popular videos 
13. Installed routing by running the command react-router-dom
14. Created the app router in App.js using createBrowserRoute
15. Configured the routes for the application - "/", and "/watch"
16. Added Link to VideoCard byt passing watch and video id 
16. Developed the watch page by embedding the iframe 