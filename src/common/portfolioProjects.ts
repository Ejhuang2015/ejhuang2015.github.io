// Import
// =============================================================
// Type Path
import { IWebPortfolio, IArtPortfolio } from "./types"
// Image Path
import truffleShuffle from "../assets/Truffle Shuffle- Laptop.png"
import artStack from "../assets/artStackDemo.jpg"
import weatherDash from "../assets/WeatherDashboardScreenshot.png"
import techBlog from "../assets/PhoneHomepage.png"
import employeeTracker from "../assets/screen1.png"
import password from "../assets/password.jpg"
import obio from "../assets/edward-huang-obio-icon-final.jpg"
import beachGirl from "../assets/edward-huang-beach-girl.jpg"

// Web Development Projects
// =============================================================
const webProjects: IWebPortfolio[] = [
    {
        id: 0,
        title: "Truffle Shuffle",
        body: `The Truffle-Shuffle project is a lightweight application that helps an indecisive user(s) generate ideas on    what movie to watch and what cocktail to drink. The user is first given the option to choose a cocktail based on their alcohol preference or just a random drink from the CocktailDB database. After getting their drink, the user is presented with a wheel that lets them spin for a random genre and decade. If need be, the user can respin the wheel to grab a different genre/decade. Based on these results a movie is obtained from the MovieDB database and presented to the user.`,
        image: truffleShuffle,
        sourceLink: "https://github.com/Laura-Bullek/Truffle-Shuffle",
        appLink: "https://laura-bullek.github.io/Truffle-Shuffle/"
    },
    {
        id: 1,
        title: "Art Stack",
        body: `The Art Stack project is a full-stack application made to help connect local artists and interested parties. It creates a space where artists can post their work and onlookers can view the assortment of artwork available.`,
        image: artStack,
        sourceLink: "https://github.com/TheTiiiim/art-stack",
        appLink: "https://art-stack-0.herokuapp.com/"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        body: `This project is a practice on using api and ajax. It is weather checking application where the user can enter in a city and find the its current weather, temperature, 5 day update and more. The application also keeps track of past cities that the user has searched for and can quickly bring up the latest information for that city. On a page load, the last city to be manually searched for is brought up. A clear button is provided to clear the search history.`,
        image: weatherDash,
        sourceLink: "https://github.com/Ejhuang2015/Weather-Dashboard",
        appLink: "https://ejhuang2015.github.io/Weather-Dashboard/"
    },
    {
        id: 3,
        title: "MVC Tech Blog",
        body: `This is a practice application on full-stack web development. Created using Node.js, Express.js, MySQL2, Sequelize, Auth0, and Handlebars. First, all visitors are presented with the homepage where all posts are displayed. If the user clicks the header of a post, they are transported to the post page where they can view all of the post's comments. Attempting to access the Dashboard page will result in the user being prompted to log in via Auth0. Once the user is logged in, they can create posts via the dashboard. Here they can also edit and delete any posts created by them. In the post's page, logged in users will be shown the option to leave a comment.`,
        image: techBlog,
        sourceLink: "https://github.com/Ejhuang2015/Tech-Blog-Project",
        appLink: "https://limitless-mountain-67002.herokuapp.com/"
    },
    {
        id: 4,
        title: "CLI Employee Tracker",
        body: `This is a mySQL practice CLI application. Within the console, the user is able to perform CRUD opertaions against three joined tables. It utilizes the Inquirer.js package to prompt for user input and cycling through the options. Also inside is the console.table package to help create a better looking table within the console.`,
        image: employeeTracker,
        sourceLink: "https://github.com/Ejhuang2015/SQL-Employee-Tracker",
        appLink: "https://github.com/Ejhuang2015/SQL-Employee-Tracker"
    },
    {
        id: 4,
        title: "Javascript Password Generator",
        body: `This project is a practice on using Javascript. It simply allows the user to generate a password with custom settings, such as password length and the inclusion of case, symbols, and numbers.`,
        image: password,
        sourceLink: "https://github.com/Ejhuang2015/Password-Generator",
        appLink: "https://ejhuang2015.github.io/Password-Generator/"
    },
]

// Digital Art Projects
// =============================================================
const artProjects: IArtPortfolio[] = [
    {
        id: 0,
        title: "Obio",
        body: `Obio is a puzzle game made for the iOS App store, Google Playstore and Itch.io. It was a college project where I was in charge of designing and creating various UI elements and game icons.`,
        image: obio,
        link: "https://www.artstation.com/artwork/gJVYrG"
    },
    {
        id: 1,
        title: "Beach Girl Illustration",
        body: `A drawing made to practice grayscale to color shading technique.`,
        image: beachGirl,
        link: "https://www.artstation.com/artwork/68nZ2N"
    },
]

// Exports
// =============================================================
export { webProjects, artProjects };