const projectSection = document.querySelector(".project");

const projects = [
    {
        githubLink: "https://github.com/chapweb/employees-directory-mockup",
        githubDemo: "https://chapweb.github.io/employees-directory-mockup/",
        imgSrc: "./img/employee-directory.jpg",
        title: "Employee Directory",
        desc: "Using JavaScript Fetch API and Promises to return employee details from randomuser API, then display the employee card with DOM scripting, and added a modal overlay to display each employee in details." 
    },
    {
        githubLink: "https://github.com/chapweb/dashboard_mockup",
        githubDemo: "https://chapweb.github.io/dashboard_mockup/",
        imgSrc: "./img/dashboard.jpg",
        title: "Web dashboard",
        desc: "Create a web dashboard mockup from scratch, with CSS grid (in SASS) and Chart.js plugin, with mobile first approach" 
    },
    {
        githubLink: "https://github.com/chapweb/thtechdegree_unit03",
        githubDemo: "https://chapweb.github.io/thtechdegree_unit03/",
        imgSrc: "./img/form-styling.jpg",
        title: "HTML CSS Form",
        desc: "Create a HTML CSS form mockup from with form tags wtih validation and CSS" 
    },
    {
        githubLink: "https://github.com/chapweb/js_lightbox",
        githubDemo: "https://chapweb.github.io/js_lightbox/",
        imgSrc: "./img/photo-lightbox.jpg",
        title: "JS Lightbox",
        desc: "Create photo gallery lightbox with JavaScript lightbox plugin, implemented real-time search for searching strings matching the photo caption's word" 
    },
    {
        githubLink: "https://github.com/chapweb/js_hangman",
        githubDemo: "https://chapweb.github.io/js_hangman/",
        imgSrc: "./img/hangman.jpg",
        title: "jQuery Hangman Game",
        desc: "An excercise of Hangman game made with vanilla JavaScript" 
    }
]

for (const project of projects) {
    let html = `
        <li class="project__item">
            <img src="${project.imgSrc}" alt="${project.title}" class="project__preview">
            <h3 class="project__title">${project.title}</h3>
            <div class="project__info">
            <p class="project__desc">${project.desc}</p>
            <a href="${project.githubLink}" target="_blank">GitHub</a> <a href="${project.githubDemo}" target="_blank">Demo</a>
            </div>
        </li>
    `;
    projectSection.innerHTML += html;
}


