// =========================
// PROJECT MAYBE
// PHASE 1
// =========================

console.log(
    "Project Maybe initialized."
);


// =========================
// ELEMENTS
// =========================

const runButton =
    document.getElementById(
        "runButton"
    );

const landingScreen =
    document.getElementById(
        "landingScreen"
    );

const nextScreen =
    document.getElementById(
        "nextScreen"
    );


// =========================
// RUN BUTTON
// =========================

runButton.addEventListener(
    "click",
    () => {

        // Prevent multiple clicks
        runButton.disabled = true;

        runButton.innerHTML =
            "<span>&gt;</span> Running...";


        // Fade current screen out
        landingScreen.classList.add(
            "leaving"
        );


        // Wait for animation
        setTimeout(() => {

            landingScreen.classList.remove(
                "active",
                "leaving"
            );

            nextScreen.classList.add(
                "active"
            );

        }, 450);

    }
);