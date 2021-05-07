// Import Types
// =============================================================
import { IContactLink, IPortfolioLink } from "./types"

// Contact Links
// =============================================================
const contactLinks: IContactLink[] = [
    {
        id: 0,
        name: "Github",
        icon: "../../assets/GitHub.png",
        link: "https://github.com/Ejhuang2015"
    },
    {
        id: 1,
        name: "Artstation",
        icon: "../../assets/ArtStation.png",
        link: "https://zekeroxblade.artstation.com/"
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: "../../assets/LinkedIn.png",
        link: "https://www.linkedin.com/in/edwardhuang1238/"
    },
    {
        id: 3,
        name: "Resume",
        icon: "../../assets/DocumentIcon.png",
        link: "https://drive.google.com/file/d/16q2MZhZ3RCwJvsU0yipI_twfHVOGhUC9/view?usp=sharing"
    },
    {
        id: 4,
        name: "Contact",
        icon: "../../assets/email.png",
        link: "",
    },
]

// Portfolio Links
// =============================================================
const portfolioLinks: IPortfolioLink[] = [
    {
        link: "#webPortfolio",
        name: "Web Portfolio"
    },
    {
        link: "#artPortfolio",
        name: "Art Portfolio"
    },
]


// Exports
// =============================================================
export {contactLinks, portfolioLinks};