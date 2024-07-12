// Projects
import portfolioLogo from "../Assets/Project-Images/Portfolio.svg";
import weatherAppLogo from "../Assets/Project-Images/Weather-amico.svg";
import Mapp from "../Assets/Project-Images/Map.svg";
import loader from "../Assets/loader.svg"
import spotify from "../Assets/Project-Images/Playlist-amico.svg";
import taskify from "../Assets/Project-Images/Taskify.svg";
import messenger from "../Assets/Project-Images/messenger.svg";
import social from "../Assets/Project-Images/social2.0.svg";
import tiktok from "../Assets/Project-Images/Social share-amico.svg"
import rasooi from "../Assets/Project-Images/Rasooi.svg"
import portfolio from "../Assets/Project-Images/Portfolio2.0.svg"

// Animations
import aboutAnimation from "./Animations/AboutAnimation.json";
import contactAnimation from "./Animations/ContactAnimation.json";
import heroAnimation from "./Animations/HeroAnimation.json";
import projectAnimation from "./Animations/ProjectAnimation.json";
import skillsAnimation from "./Animations/SkillsAnimation.json";
import { Link } from "react-scroll";


// Skills

import JavaScript from '../Assets/Skills/JavaScript.svg'
import ReactJS from '../Assets/Skills/ReactJS.svg'
import Redis from '../Assets/Skills/Redis.svg'
import TailwindCSS from '../Assets/Skills/TailwindCSS1.svg'
import PostgreSQL from '../Assets/Skills/PostgreSQL.svg'
import NodeJS from '../Assets/Skills/NodeJS.svg'
import MongoDB from '../Assets/Skills/MongoDB.svg'
import PostMan from '../Assets/Skills/postman-icon.svg'
import Github from '../Assets/Skills/Github.svg'
import FastAPI from '../Assets/Skills/FastAPI.svg'
import ExpressJS from '../Assets/Skills/ExpressJS.svg'
import CPP from '../Assets/Skills/cpp.png'
import Docker from '../Assets/Skills/docker.svg'
import Parcelsvg from '../Assets/Skills/parcel-seeklogo.svg'
import Redux from '../Assets/Skills/Redux.svg'
import Firebase from '../Assets/Skills/Firebase.svg'
// Main  Logo

export const MainLogo =
  <Link
    to="/"
    onClick={() => window.scroll(0, 0)}
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    
    <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">$</span>
    HASHI
  </Link>

// All  Projects Images


export const PortfolioLogo = portfolioLogo;
export const WeatherAppLogo = weatherAppLogo;
export const Loader = loader;
export const Map = Mapp;
export const Spotify = spotify;
export const Taskify = taskify;
export const Messenger = messenger;
export const Social = social;
export const TikTok = tiktok;
export const Rasooi = rasooi;
export const Portfolio = portfolio;

// All Animations

export const AboutAnimation = aboutAnimation;
export const ContactAnimation = contactAnimation;
export const HeroAnimation = heroAnimation;
export const ProjectAnimation = projectAnimation;
export const SkillsAnimation = skillsAnimation;

// All Skills
export const JavaScriptLogo = JavaScript
export const ReactJSLogo = ReactJS
export const RedisLogo = Redis
export const TailwindCSSLogo = TailwindCSS
export const PostgreSQLLogo = PostgreSQL
export const NodeJSLogo = NodeJS
export const MongoDBLogo = MongoDB
export const GithubLogo = Github
export const FastAPILogo = FastAPI
export const ExpressJSLogo = ExpressJS
export const DockerLogo = Docker
export const PostManLogo = PostMan
export const CppLogo = CPP
export const Parcel = Parcelsvg
export const ReduxLogo = Redux
export const FirebaseLogo = Firebase