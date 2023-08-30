let image;
let imageContainer
let isProjectsClicked = false;
let menu;
let isMenuActive = true;
document.addEventListener("DOMContentLoaded", () => {
  image = document.getElementById("mainImage");
  const menu = document.querySelector(".menu");
  const imageContainer = document.querySelector(".image-container");

  

  imageContainer.addEventListener("mouseenter", () => {
    if (!isProjectsClicked) {
      image.style.filter = "blur(5px) brightness(1)"; 
      }
  });

  imageContainer.addEventListener("mouseleave", () => {
    if (!isProjectsClicked) {
      image.style.filter = "none"; 
    }
  });

  const firstButton = document.querySelector(".menu a:nth-child(1)");
  firstButton.addEventListener("click", () => {
    if (isMenuActive){
      isMenuActive = false;
      hideMenu();    
      showAbout();
    }
  });

  const projectsLink = document.querySelector(".menu a:nth-child(2)");
  projectsLink.addEventListener("click", (event) => {
 
    if (isMenuActive){
      isMenuActive = false;
         event.preventDefault(); 
      hideMenu();
      setTimeout(function() {
        menu.style.display = "none";
      }, 500)
      isProjectsClicked = true;
      image.style.filter = "blur(0px) brightness(0)";
      // Symulacja działania terminala po opóźnieniu 3 sekundy
      const animationDelay = 150; // Opóźnienie między krokami animacji (ms)
      const startDelay = 500; // Opóźnienie przed rozpoczęciem animacji (ms)
      setTimeout(() => {
        const terminalText = "Witaj w terminalu!\n$ ";
        const terminalElement = document.createElement("pre");
        terminalElement.classList.add("terminal");
        terminalElement.textContent = terminalText;
        imageContainer.appendChild(terminalElement);
      
        const loadingText = "Uruchamianie";
        let animationFrame = 0;
      
        const loadingAnimationInterval = setInterval(() => {
          const animationFrames = ["|", "/", "-", "\\"];
          const loadingAnimationText = `${loadingText} ${animationFrames[animationFrame % animationFrames.length]}`;
          
          terminalElement.textContent = terminalText + loadingAnimationText;
          animationFrame++;
        }, animationDelay);
      
        setTimeout(() => {
          clearInterval(loadingAnimationInterval);
          terminalElement.textContent = terminalText + loadingText; // Wyświetl "$ Uruchamianie" bez animacji
      
          // ---- link
          addTerminalLink(
            document.querySelector(".terminal"),
            "Projekty w języku Python:    ",
            "Algebra Liniowa",
            "https://www.interia.pl"
          );
          addTerminalLink(
            document.querySelector(".terminal"),
            "Projekt  w języku Python:    ",
            "Emulator parkometru",
            "https://github.com/SebLyc/Emulator-Parkometru"
          );
          addTerminalLink(
            document.querySelector(".terminal"),
            "Projekt w JavaScript:        ",
            "Analizator wyrażeń",
            "https://github.com/SebLyc/Calc-JS"
          );
          addBackToMenuButton();
          
      }, 3000);;
      }, startDelay);
      
  
    }
    
   
  });

  const thirdButton = document.querySelector(".menu a:nth-child(3)");
  thirdButton.addEventListener("click", () => {
    if (isMenuActive){
      isMenuActive = false;
      hideMenu();    
      showKnowledge();
    }
  });

  const fourthButton = document.querySelector(".menu a:nth-child(4)");
  fourthButton.addEventListener("click", () => {
    if (isMenuActive){
      isMenuActive = false;
      hideMenu();    
      showContact();
    }
  });
    


  // Pokazujemy menu po załadowaniu strony
  showMenu();
});

function showMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = "none";
  menu.style.filter = "blur(0px)";
  menu.style.opacity = 1;
  menu.style.display = "block";
  isMenuActive = true;
}

function hideMenu() {
  const menu = document.querySelector(".menu");
  menu.style.transition = "0.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
  menu.style.opacity = 0;
  menu.style.filter = "blur(10px)";
}

function addTerminalLink(terminalElement, terminalPrefix = "", linkText = "", linkUrl = "") {
  if (terminalPrefix || linkText) {
    const newLineText = `\n$ ${terminalPrefix} `;
    terminalElement.appendChild(document.createTextNode(newLineText));
  }

  if (linkText) {
    const link = document.createElement("a");
    link.textContent = linkText;
    link.href = linkUrl;
    link.target = "_blank";
    terminalElement.appendChild(link);
  }
}

function addBackToMenuButton() {
  const terminalElement = document.querySelector(".terminal");
  const backButton = document.createElement("span");
  backButton.textContent = "kliknij aby wrócić do menu";
  backButton.classList.add("terminal-link");
  terminalElement.appendChild(document.createTextNode("\n$ "));
  terminalElement.appendChild(backButton);

  backButton.addEventListener("click", () => {
  // Resetuj wszystkie stany i powróć do menu

  isProjectsClicked = false;
  
  image.style.filter = "none"; 
  terminalElement.remove();
  showMenu();
  });
}
let aboutTextContainer;
function showAbout() {
  const aboutTextContainer = document.getElementById("aboutTextContainer");
  aboutTextContainer.style.display = "flex";
  aboutTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    aboutTextContainer.style.filter = "opacity(1)";
  }, 500)
}
function showContact() {
  const contactTextContainer = document.getElementById("contactTextContainer");
  contactTextContainer.style.display = "flex";
  contactTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    contactTextContainer.style.filter = "opacity(1)";
  }, 500)
}

function showKnowledge() {
  const contactTextContainer = document.getElementById("knowledgeTextContainer");
  contactTextContainer.style.display = "flex";
  contactTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    contactTextContainer.style.filter = "opacity(1)";
  }, 500)
}

function backButtonFromAbout(){
  const aboutTextContainer = document.getElementById("aboutTextContainer");
  aboutTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    aboutTextContainer.style.display = "none";
    showMenu();
  }, 500)
}

function backButtonFromContact(){
  const contactTextContainer = document.getElementById("contactTextContainer");
  contactTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    contactTextContainer.style.display = "none";
    showMenu();
  }, 500)
}

function backButtonFromKnowledge(){
  const knowledgeTextContainer = document.getElementById("knowledgeTextContainer");
  knowledgeTextContainer.style.filter = "opacity(0)";
  setTimeout(function() {
    knowledgeTextContainer.style.display = "none";
    showMenu();
  }, 500)
}
