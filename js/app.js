const projectSection = document.querySelector(".project");

const projects = [
    {
        githubLink: "https://github.com/chapweb/employees-directory-mockup",
        githubDemo: "https://chapweb.github.io/employees-directory-mockup/",
        imgSrc: "./img/employee-directory.jpg",
        title: "Employee Directory",
        desc: "Using JS Fetch API to draw employee details and display in a modal viewer" 
    },
    {
        githubLink: "https://github.com/chapweb/dashboard_mockup",
        githubDemo: "https://chapweb.github.io/dashboard_mockup/",
        imgSrc: "./img/dashboard.jpg",
        title: "Web dashboard",
        desc: "Create a dashboard mockup from scratch, with CSS grid and Chart.js plugin" 
    },
    {
        githubLink: "https://github.com/chapweb/thtechdegree_unit03",
        githubDemo: "https://chapweb.github.io/thtechdegree_unit03/",
        imgSrc: "./img/form-styling.jpg",
        title: "HTML CSS Form",
        desc: "Create a form mockup from with HTML form tags and CSS" 
    },
    {
        githubLink: "https://github.com/chapweb/js_lightbox",
        githubDemo: "https://chapweb.github.io/js_lightbox/",
        imgSrc: "./img/photo-lightbox.jpg",
        title: "JS Lightbox",
        desc: "Create lightbox with JS plugin" 
    },
    {
        githubLink: "https://github.com/chapweb/js_hangman",
        githubDemo: "https://chapweb.github.io/js_hangman/",
        imgSrc: "./img/hangman.jpg",
        title: "jQuery Hangman Game",
        desc: "An excercise of Hangman game made with jQuery" 
    }
]

for (const project of projects) {
    let html = `
        <li class="project__item">
            <img src="${project.imgSrc}" alt="${project.title}" class="project__preview">
            <h3 class="project__title">${project.title}</h3>
            <p class="project__desc">${project.desc}</p>
            <div class="project__help">
                <a href="${project.githubLink}" target="_blank">GitHub</a> <a href="${project.githubDemo}" target="_blank">Demo</a>
            </div>
        </li>
    `;
    projectSection.innerHTML += html;
}


