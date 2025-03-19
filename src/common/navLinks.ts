// Import
// =============================================================
// Type Path
import { IContactLink, IPortfolioLink } from "./types"
// Image Path
import gitHubIcon from "../assets/GitHub.png"
import artStationIcon from "../assets/ArtStation.png"
import linkedInIcon from "../assets/LinkedIn.png"
import resumeIcon from "../assets/DocumentIcon.png"

// Contact Links
// =============================================================
const contactLinks: IContactLink[] = [
    {
        id: 0,
        name: "Github",
        icon: gitHubIcon,
        link: "https://github.com/Ejhuang2015"
    },
    // {
    //     id: 1,
    //     name: "Artstation",
    //     icon: artStationIcon,
    //     link: "https://zekeroxblade.artstation.com/"
    // },
    {
        id: 2,
        name: "LinkedIn",
        icon: linkedInIcon,
        link: "https://www.linkedin.com/in/edwardhuang1238/"
    },
    {
        id: 3,
        name: "Resume",
        icon: resumeIcon,
        link: "https://drive.google.com/file/d/16q2MZhZ3RCwJvsU0yipI_twfHVOGhUC9/view?usp=sharing"
    }
]

// Portfolio Links
// =============================================================
const portfolioLinks: IPortfolioLink[] = [
    {
        id: 0,
        link: "#webPortfolio",
        name: "Web Portfolio"
    },
    {
        id: 1,
        link: "#artPortfolio",
        name: "Art Portfolio"
    },
]


// Exports
// =============================================================
export {contactLinks, portfolioLinks};