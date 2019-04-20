const overlayOpen = document.querySelector("#overlayOpen");
const overlay = document.querySelector("#overlay");
const overlayInnerHTML = `
        <div class="overlay__content">
            <i class="fas fa-times fa-2x overlay__close"></i>
            <h2 class="overlay__title">Sorry, form's not work'in yet</h2>
            <form method="POST" action="https://formspree.io/chapman.reg@gmail.com" class="form">
                <fieldset>
                    <input type="text" name="senderName" id="messageName" placeholder="Name"><br>
                    <input type="email" name="senderEmail" id="messageEmail" placeholder="Email"><br>
                    <textarea name="senderMessage" id="messageContent" placeholder="What do you want to say?"></textarea><br>
                    <button type="submit">Send</button>
                </fieldset>
            </form>
            <p class="overlay__text">or you can send to <span>chapman.reg@gmail.com</span></p>
        </div>
        `;

overlayOpen.addEventListener("click", ()=> {
    overlay.innerHTML = overlayInnerHTML;
    overlay.classList.toggle("overlay--hidden")
})

overlay.addEventListener("click", (e)=> {
    if (e.target.classList.contains("overlay__close")) {
        overlay.classList.toggle("overlay--hidden");
        overlay.innerHTML="";
    }
})