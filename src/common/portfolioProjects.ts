// Import
// =============================================================
// Type Path
import { IWebPortfolio, IArtPortfolio } from "./types"
// Image Path
import truffleShuffle from "../assets/Truffle Shuffle- Laptop.png"
import artStack from "../assets/artStackDemo.jpg"
import healthyu from "../assets/Healthy-U.jpg"
import tictactoe from "../assets/React-Tic-Tac-Toe.png"
import weatherDash from "../assets/WeatherDashboardScreenshot.png"
import employeeTracker from "../assets/screen1.png"
import password from "../assets/password.jpg"
import obio from "../assets/edward-huang-obio-icon-final.jpg"
import pizzaBros from "../assets/Pizza-Bros.jpg"
import oldBook from "../assets/old-book.jpg"
import valentine from "../assets/valentine.png"
import truffleShuffleNative from "../assets/TruffleShuffleExampleImage.png"

// Web Development Projects
// =============================================================
const webProjects: IWebPortfolio[] = [
    {
        id: 0,
        title: "Truffle Shuffle Native",
        desc: `This project is a re-make of a group project I worked on during school called Truffle Shuffle but built for mobile applications. It utilizes React Native, Expo, and Appwrite. The user is presented with a list of popular movies and the most searched for movies. There is a search bar to search for movies.`,
        job: "Developed the project to practice modern React Native",
        tools: ["React Native", "Node.js", "Expo", "Appwrite", "TypeScript", "Tailwind"],
        image: truffleShuffleNative,
        sourceLink: "https://github.com/Ejhuang2015/Truffle-Shuffle-Native",
        appLink: ""
    },
    {
        id: 1,
        title: "Healthy-U",
        desc: `This is a practice application on full-stack web development. Created using Node.js, Express.js, MongoDB, Auth0, and React. Users are first brought to the home page where a few cards about nutrition and meditation are displayed. Accessing any other page requires the user to login/signup through Auth0. The main appeal of this project lies in the profile page where users are greeted with a daily goal tracker where you can check off how many glasses of water, servings of fruits/veggies, and unhealthy habits the user has done today. Below that is another component where users can enter in their own challenge which requires the user to report in for 49 days to better themselves.`,
        job: "Created and maintained the backend server, developed all the functional React components, implemented authentication",
        tools: ["React", "Bootstrap", "Express", "MongoDB", "Auth0", "Netlify", "Heroku", "Material UI"],
        image: healthyu,
        sourceLink: "https://github.com/Ejhuang2015/Healthy-U-Frontend",
        appLink: "https://healthy-u.netlify.app/"
    },
    {
        id: 2,
        title: "Art Stack",
        desc: `The Art Stack project is a full-stack application made to help connect local artists and interested parties. It creates a space where artists can post their work and onlookers can view the assortment of artwork available.`,
        job: "Developed the MVC structure, made the CRUD operations, organized the HTML and unified the website styling.",
        tools: ["jQuery", "JWT", "ExpressJS", "Handlebars", "MySQL", "Heroku", "Bootstrap"],
        image: artStack,
        sourceLink: "https://github.com/TheTiiiim/art-stack",
        appLink: "https://art-stack-0.herokuapp.com/"
    },
    {
        id: 3,
        title: "Tic Tac Toe",
        desc: `A practice application based on the classic game of Tic Tac Toe! This project utilizes Tailwind as the CSS framework and is written using TypeScript. Simply grab a friend and start playing Tic Tac Toe by clicking your square. You can see whose turn it is and see how many wins each player has. All data is stored in local storage so the game data persists on the browser. You can restart the game, undo moves, and clear the score by pressing the appropriate button.`,
        job: "Developed the project to practice TailwindCSS.",
        tools: ["React", "Tailwind", "TypeScript"],
        image: tictactoe,
        sourceLink: "https://github.com/Ejhuang2015/react-tic-tac-toe",
        appLink: ""
    },
    {
        id: 8,
        title: "Be My Valentine",
        desc: `A cute javascript application to send to someone who you want to be your special valentine. Clicking the images causes it to change to the next image, hovering/tapping the "no" button causes it to move and shrink. Once you click "yes" you'll be presented with a series of new gifs and how many times you activated the "no" button.`,
        job: "Developed and styled the application",
        tools: ["Javascript"],
        image: valentine,
        sourceLink: "https://github.com/Ejhuang2015/be-my-valentine",
        appLink: "https://ejhuang2015.github.io/be-my-valentine/"
    },
    {
        id: 4,
        title: "Truffle Shuffle",
        desc: `The Truffle-Shuffle project is a lightweight application that helps an indecisive user(s) generate ideas on what movie to watch and what cocktail to drink. The user is first given the option to choose a cocktail based on their alcohol preference or just a random drink from the CocktailDB database. After getting their drink, the user is presented with a wheel that lets them spin for a random genre and decade. If need be, the user can respin the wheel to grab a different genre/decade. Based on these results a movie is obtained from the MovieDB database and presented to the user.`,
        job: "Created and implemented the Javascript, formatted the HTML layout, finalized the website styling.",
        tools: ["TMDB Api", "TheCocktailDB Api", "jQuery", "Materialize", "GitHub"],
        image: truffleShuffle,
        sourceLink: "https://github.com/Laura-Bullek/Truffle-Shuffle",
        appLink: "https://laura-bullek.github.io/Truffle-Shuffle/"
    },
    {
        id: 5,
        title: "Weather Dashboard",
        desc: `This project is a practice on using api and ajax. It is a weather checking application where the user can enter in a city and find its current weather, temperature, 5 day update and more. The application also keeps track of past cities that the user has searched for and can quickly bring up the latest information for that city. On a page load, the last city to be manually searched for is brought up. A clear button is provided to clear the search history.`,
        job: "Developed the site to practice using and learning about a RESTful api",
        tools: ["jQuery", "OpenWeather Api", "Bootstrap"],
        image: weatherDash,
        sourceLink: "https://github.com/Ejhuang2015/Weather-Dashboard",
        appLink: "https://ejhuang2015.github.io/Weather-Dashboard/"
    },
    {
        id: 6,
        title: "CLI Employee Tracker",
        desc: `This is a mySQL practice CLI application. Within the console, the user is able to perform CRUD operations against three joined tables. It utilizes the Inquirer.js package to prompt for user input and cycling through the options. Also inside is the console.table package to help create a better looking table within the console.`,
        job: "Designed this application as a start to learning backend web development",
        tools: ["MySQL", "Express", "Inquirer"],
        image: employeeTracker,
        sourceLink: "https://github.com/Ejhuang2015/SQL-Employee-Tracker",
        appLink: ""
    },
    {
        id: 7,
        title: "Javascript Password Generator",
        desc: `This project is a practice on using Javascript. It simply allows the user to generate a password with custom settings, such as password length and the inclusion of case, symbols, and numbers.`,
        job: "Produced this website as the first step into developing HTML sites with Javascript",
        tools: ["Bootstrap", "Javascript", "HTML", "CSS"],
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
        title: "Pizza Bros",
        body: `A 3D model made to be printed about Pizza Bros, frog edition`,
        image: pizzaBros,
        link: "https://www.artstation.com/artwork/Le6PeP"
    },
    {
        id: 2,
        title: "Froggyfall: Old Book",
        body: `A quick drawing done as a prompt for Froggyfall 2022`,
        image: oldBook,
        link: "https://twitter.com/ZekeroXBlade/status/1576572712591450112"
    },
]

// Exports
// =============================================================
export { webProjects, artProjects };