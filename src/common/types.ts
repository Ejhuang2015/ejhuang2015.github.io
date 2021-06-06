// Custom Interface Types
// =============================================================

// Navigation Bar
// =============================================================
// Portfolio Links
export interface IPortfolioLink {
    id: number;
    link: string;
    name: string;
}
// Contact Links
export interface IContactLink {
    id: number;
    name: string;
    icon: string;
    link: string;
}

// Portfolio Projects
// =============================================================
// Web Development
export interface IWebPortfolio {
    id: number;
    title: string;
    desc: string;
    job: string;
    tools: string[];
    image: string;
    sourceLink: string;
    appLink: string;
}
// Digital Art
export interface IArtPortfolio {
    id: number;
    title: string;
    body: string;
    image: string;
    link: string;
}