import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import Avatar from '../src/components/Avatar';
import ScrollToTop from "./components/ScrollToTop";
import ResumeButton from "./components/ResumeButton";
import ProfileGallery from "./components/ProfileGallery";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer"

import "./App.css";


import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  godot,
  c,
  py,
  java,
  spectre,
  rappit,
  attend,
  booksite,
  sumegh,
  amaldev,
  akash,
  abhijithV,
  alby,
  waveform,
} from "./assets";

const EmailCopyButton = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button className="email-copy-button" onClick={handleCopyEmail}>
      {copied ? "Copied!" : email}
    </button>
  );
};

const App = () => {
  
  const navLinks = ["experiences", "projects","contact",];

  const technologies = [
    { name: "Python", icon: py },
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "C Programming", icon: c },
    { name: "Java", icon: java },
    { name: "Godot", icon: godot },
    { name: "Node JS", icon: nodejs },
    { name: "git", icon: git },
    { name: "figma", icon: figma },
  ];

  const projects = [
    {
      name: "Waveform",
      description:
        "Music Popularity Predictor for Spotify & Uploaded songs",
      tags: ["HTML,CSS", "DjangoREST", "ReactJS"],
      image: waveform,
      source_code_link: "https://github.com/albymat32/KTU-BTech-CSE-4th-year-Project-PPT-Report",
      role: "Web Developer",
      company_name: "WAVEFORM",
      date: "August 2023 - May 2024",
    },
    {
      name: "Spectrum",
      description:
        "Comprehensive web application for LGBTQ+ community members",
      tags: ["HTML,CSS", "NodeJS", "ReactJS"],
      image: spectre,
      source_code_link: "https://github.com/hannasalam/Spectrum",
      role: "Web Developer",
      company_name: "Spectrum",
      date: "Feb 2023 - August 2023",
    },
    {
      name: "BookinGO",
      description:
        "Web application for searching movies and booking tickets",
      tags: ["BootStrap", "NodeJS", "ExpressJS"],
      image: booksite,
      source_code_link: "https://github.com/amaldevcd/bookingo",
      role: "Frontend Developer",
      company_name: "BookinGo",
      date: "Sept 2022 - Dec 2022",
    },
    {
      name: "HAI Attendance System",
      description:
        "Web-based platform for marking attendance in online video conferencing meetings",
      tags: ["Python", "Django", "OpenCV"],
      image: attend,
      source_code_link: "https://github.com/amaldevcd/technohack-hai",
      role: "Team Lead",
      company_name: "HAI",
      date: "Sept 2021 - Oct 2021",
    },   
  ];
  const experiences = [
    {
      title: "AI ML Engineer Lvl 1",
      company_name: "Rappit India, Coimbatore",
      icon: rappit,
      iconBg: "#ffffff",
      date: "June 2024 - Present",
      points: [
        "Working on Document Processing Logic and Exploring the AI capabilities in this regard",
        "Challenges of OCR, kinds of documents and New ideas are the driving force to carry on in such a project",
      ],
    },
    {
      title: "Web Developer",
      company_name: "WAVEFORM",
      icon: spectre,
      iconBg: "#ffffff",
      date: "August 2023 - May 2024",
      points: [
        "WAVEFORM is a Music Popularity Predictor for Spotify & Uploaded songs",
        "The idea is to create a wb appplication for musicians to check the hit factor of their new songs",
        "The system classifies song into Hit, Average, FLop categories and shows values of their song attributes",
        "We made use of HTML CSS React and DjangoREST along with Google authentication.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Spectrum",
      icon: spectre,
      iconBg: "#ffffff",
      date: "Feb 2023 - Present",
      points: [
        "Spectrum is a LGBTQ+ Community Platform",
        "The idea is to create a safe and practical social media for people who had to face social bullying and harassment",
        "We were able to incorporate Job search, QnA blogs, Houseing search and Photo sharing under a single domain",
        "We made use of HTML CSS React and NodeJs.",
      ],
    },
    
    {
      title: "FrontEnd Developer",
      company_name: "BookinGo",
      // icon: book,
      iconBg: "#ffffff",
      date: "Sept 2022 - Dec 2022",
      points: [
        "Gained little experience with the NodeJS, ExpressJS, MySQL & XAMP-APache",
        "This was my first team project done for academics",
        "We built a basic Online Movie Booking site that showed movies and no. of seats available with login/signup utility",
        "Created a template for the pages used for the project ",
      ],
    },
    {
      title: "Team Lead",
      company_name: "HAI -Attendence System",
      // icon: hai,
      iconBg: "#ffffff",
      date: "Sept 2021 - Oct 2021",
      points: [
        "The protype used OpenCV to detect faces on webcam and grant attendence",
        "Collabrated with 3 of my friends in the work",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Made a prototype that would either identify the person's name or register him/her as a new user ",
      ],
    },

    
  ];
  
  const testimonials = [
    {
      testimonial:
        "My friend is an exceptional web developer who always stays up-to-date with the latest technologies and trends. I would highly recommend him to anyone looking for a skilled and reliable web developer.",
      name: "Sumegh S Pai",
      designation: "Friend",
      company: "Model Engineering College",
      image: sumegh,
    },
    {
      testimonial:
        "Working with my friend as a web developer has been an absolute pleasure.He has a keen eye for detail and always go above and beyond to ensure the end product exceeds expectations.",
      name: "Abhijith V",
      designation: "Friend",
      company: "Model Engineering College",
      image: abhijithV,
    },
    {
      testimonial:
        "I had the pleasure of working with my friend on several projects as a web developer, and I can confidently say that he is a true professional.",
      name: "Amal Dev CD",
      designation: "Friend",
      company: "Model Engineering College",
      image: amaldev,
    },
    {
      testimonial:
        "His dedication and passion for web development truly shines through in his work.",
      name: "PM Akash ",
      designation: "Friend",
      company: "Model Engineering College",
      image: akash,
    },
  ];


  // Render functions for components
  const renderNavLinks = () =>
    navLinks.map((link) => (
      <li key={link}>
        <Link
          to={link}
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
        >
          {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
        </Link>
      </li>
    ));

  const renderTechnologies = () =>
    technologies.map((tech, index) => (
      <div key={index} className="tech-card">
        <img src={tech.icon} alt={tech.name} className="tech-icon" />
        <span className="tech-name">{tech.name}</span>
      </div>
    ));

  const renderProjects = () =>
    projects.map((project, index) => (
      <div key={index} className="project">
        <h3>{project.name}- <a href={project.source_code_link}>Source Code</a></h3>
        <p>{project.description}</p>
        <p>Role: {project.role}</p>
        <p>Company: {project.company_name}</p>
        <p>Date: {project.date}</p>
        <p>Tags: {project.tags.join(", ")}</p>
        <img src={project.image} alt={project.name} className="project-image" />
        
      </div>
    ));
    const renderExperiences = () =>
      experiences.map((experience, index) => (
        <div key={index} className="experience">
          <img src={experience.icon===spectre? null:experience.icon}></img>
          <h3>{experience.title}</h3>
          <p>{experience.company_name}</p>
          <p>{experience.date}</p>
          <ul>
            {experience.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ));
    
    const renderTestimonials = () =>
      testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.testimonial}</p>
          <p>{testimonial.name}</p>
          <p>{testimonial.designation}</p>
          <p>{testimonial.company}</p>
        </div>
      ));

  return (
    <div className={`App}`}>
      <nav className="sidebar">
        <ul className="nav-links">{renderNavLinks()}</ul>
      </nav>
      <div className="main-content">
        <Element name="about">
          <h2>About Me</h2>
          {/* Hi👋, I'm Alby Thekkedan, AI ML Engineer @Rappit, Btech Computer Graduate from Model Engineering College,Kochi ,Kerala 🌴 */}
          <div className="profile-container">
  {/* <img src={alby} alt="Alby Thekkedan" className="profile-image" /> */}
  <ProfileGallery />
  {/* <Avatar /> */}
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/alby-thekkedan-3b2871210/" target="blank"><i className="fab fa-linkedin"></i></a>
    <a href="https://github.com/albymat32"><i className="fab fa-github" target="blank"></i></a>
    <a href="https://www.youtube.com/channel/UCZSm-XJOMvP0piH6HynHv_A" target="blank"><i className="fab fa-youtube"></i></a>
    <a href="https://www.facebook.com/alby.thekkedan/" target="blank"><i className="fab fa-facebook"></i></a>
    <a href="https://www.instagram.com/thekkedan_alby/" target="blank"><i className="fab fa-instagram"></i></a>
   
  </div>
  <ResumeButton />
</div>
  <div className="flex-container">
  <div className="flex-top">
    <span className='predict-text'>Hi👋,&nbsp;</span>
    <span className='predict-text'>I'm&nbsp;</span>
    <span className='predict-text'>Alby&nbsp;</span>
    <span className='predict-text'>Thekkedan&nbsp;</span>
  </div>
  <div className="flex-row">
    <span className='predict-text'>AI/ML&nbsp;</span>
    <span className='predict-text'>Engineer Lvl 1 @&nbsp;</span>
    <span className='predict-text'><a href="https://www.rappit.io" target="blank">Rappit</a>,&nbsp;Coimbatore&nbsp;</span>
  </div>
  <br></br>
  <div className="flex-row">
    <span className='predict-text'>Btech&nbsp;</span>
    <span className='predict-text'>Computer&nbsp;Science&nbsp;</span>
    <span className='predict-text'>Graduate,&nbsp;</span>
    <span className='predict-text'>from&nbsp;</span>
    <span className='predict-text'>Model&nbsp;</span>
    <span className='predict-text'>Engineering&nbsp;</span>
    <span className='predict-text'>College,Kochi,&nbsp;</span>
    <span className='predict-text'>Kerala,&nbsp;</span>
    <span className='predict-text'>🇮🇳&nbsp;</span>
  </div>
</div>
        </Element>
         <Element name="experiences">
        <h2>Experiences</h2>
        <div className="experiences">{renderExperiences()}</div>
      </Element> 
        <Element name="projects">
          <h2>Projects</h2>
          <div className="projects">{renderProjects()}</div>
        </Element>
        <Element name="contact">
          <h2>Contact- (Click the email to copy)</h2>
          <div className="contact-info">
            Email:<h1><EmailCopyButton email="albymat32@gmail.com" /></h1>
          </div>
        </Element>
        <Element name="technologies">
          <h2>Technologies</h2>
          <div className="technologies">{renderTechnologies()}</div>
        </Element>  
       
      <Element name="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials">{renderTestimonials()}</div>
      </Element>     
      </div>
 <AudioPlayer />
 <ScrollToTop />
    </div>
  );
};

export default App;
