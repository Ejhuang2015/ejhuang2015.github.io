// Import Types
// =============================================================
import { IWebPortfolio, IArtPortfolio } from "./types"


// Web Development Projects
// =============================================================
const webProjects: IWebPortfolio[] = [
    {
        id: 0,
        title: "Truffle Shuffle",
        body: `The Truffle-Shuffle project is a lightweight application that helps an indecisive user(s) generate ideas on    what movie to watch and what cocktail to drink. The user is first given the option to choose a cocktail based on their alcohol preference or just a random drink from the CocktailDB database. After getting their drink, the user is presented with a wheel that lets them spin for a random genre and decade. If need be, the user can respin the wheel to grab a different genre/decade. Based on these results a movie is obtained from the MovieDB database and presented to the user.`,
        image: "../../assets/Truffle Shuffle- Laptop.png",
        sourceLink: "https://github.com/Laura-Bullek/Truffle-Shuffle",
        appLink: "https://laura-bullek.github.io/Truffle-Shuffle/"
    },
    {
        id: 1,
        title: "Art Stack",
        body: `The Art Stack project is a full-stack application made to help connect local artists and interested parties. It creates a space where artists can post their work and onlookers can view the assortment of artwork available.`,
        image: "../../assets/artStackDemo.jpg",
        sourceLink: "https://github.com/TheTiiiim/art-stack",
        appLink: "https://art-stack-0.herokuapp.com/"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        body: `This project is a practice on using api and ajax. It is weather checking application where the user can enter in a city and find the its current weather, temperature, 5 day update and more. The application also keeps track of past cities that the user has searched for and can quickly bring up the latest information for that city. On a page load, the last city to be manually searched for is brought up. A clear button is provided to clear the search history.`,
        image: "../../assets/WeatherDashboardScreenshot.png",
        sourceLink: "https://github.com/Ejhuang2015/Weather-Dashboard",
        appLink: "https://ejhuang2015.github.io/Weather-Dashboard/"
    }
]

// Digital Art Projects
// =============================================================
const artProjects: IArtPortfolio[] = [
    {
        id: 0,
        title: "Obio",
        body: `Obio is a puzzle game made for the iOS App store, Google Playstore and Itch.io. It was a college project where I was in charge of designing and creating various UI elements and game icons.`,
        image: "../../assets/edward-huang-obio-icon-final.jpg",
        link: "https://www.artstation.com/artwork/gJVYrG"
    },
    {
        id: 1,
        title: "Beach Girl Illustration",
        body: `A drawing made to practice grayscale to color shading technique.`,
        image: "../../assets/edward-huang-beach-girl.jpg",
        link: "https://www.artstation.com/artwork/68nZ2N"
    },
]

// Exports
// =============================================================
export { webProjects, artProjects };