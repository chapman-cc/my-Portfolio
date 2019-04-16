const projectList = document.querySelector(".project__list");

const projectDetails = [
    {
        githubLink: "https://github.com/chapweb/employees-directory-mockup",
        imgSrc: "./img/employee-directory.jpg",
        title: "Employee Directory",
        descrip: "Using JS Fetch API to draw employee details and display in a modal viewer" 
    },
    {
        githubLink: "https://github.com/chapweb/dashboard_mockup",
        imgSrc: "./img/dashboard.jpg",
        title: "Web dashboard",
        descrip: "Create a dashboard mockup from scratch, with CSS grid and Chart.js plugin" 
    },
    {
        githubLink: "https://github.com/chapweb/thtechdegree_unit03",
        imgSrc: "./img/form-styling.jpg",
        title: "HTML CSS Form",
        descrip: "Create a form mockup from with HTML form tags and CSS" 
    },
    {
        githubLink: "https://github.com/chapweb/js_lightbox",
        imgSrc: "./img/photo-lightbox.jpg",
        title: "JS Lightbox",
        descrip: "Create lightbox with JS plugin" 
    },
    {
        githubLink: "https://github.com/chapweb/js_hangman",
        imgSrc: "./img/hangman.jpg",
        title: "jQuery Hangman Game",
        descrip: "An excercise of Hangman game made with jQuery" 
    }
]

`<li class="project__item">
<a href="" target="_blank">
    <img src="" alt="" class="project__preview">
    <h3 class="project__title"></h3>
    <p class="project__desc"></p>
</a>
</li>`