// =========================
// PROJECT MAYBE
// PHASE 7
// =========================

console.log(
    "Project Maybe v0.7 initialized."
);


// =========================
// ELEMENTS
// =========================

const runButton =
    document.getElementById(
        "runButton"
    );

const continueButton =
    document.getElementById(
        "continueButton"
    );

const gitNextButton =
    document.getElementById(
        "gitNextButton"
    );

const databaseContinueButton =
    document.getElementById(
        "databaseContinueButton"
    );

const evidenceContinueButton =
    document.getElementById(
        "evidenceContinueButton"
    );

const showCauseButton =
    document.getElementById(
        "showCauseButton"
    );


// Screens

const landingScreen =
    document.getElementById(
        "landingScreen"
    );

const scanScreen =
    document.getElementById(
        "scanScreen"
    );

const gitScreen =
    document.getElementById(
        "gitScreen"
    );

const databaseScreen =
    document.getElementById(
        "databaseScreen"
    );

const evidenceScreen =
    document.getElementById(
        "evidenceScreen"
    );

const errorScreen =
    document.getElementById(
        "errorScreen"
    );

const revealScreen =
    document.getElementById(
        "revealScreen"
    );


// Phase 2

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );

const resultCard =
    document.getElementById(
        "resultCard"
    );


// Phase 3

const commitList =
    document.getElementById(
        "commitList"
    );


// Phase 4

const databaseOutput =
    document.getElementById(
        "databaseOutput"
    );

const personResult =
    document.getElementById(
        "personResult"
    );


// Phase 5

const evidenceCards =
    document.querySelectorAll(
        ".evidence-card"
    );

const evidenceConclusion =
    document.getElementById(
        "evidenceConclusion"
    );


// Phase 6

const errorTitle =
    document.getElementById(
        "errorTitle"
    );

const unableText =
    document.getElementById(
        "unableText"
    );

const reasonBlock =
    document.getElementById(
        "reasonBlock"
    );

const diagnosticText =
    document.getElementById(
        "diagnosticText"
    );

const causeFound =
    document.getElementById(
        "causeFound"
    );


// Phase 7

const revealOkay =
    document.getElementById(
        "revealOkay"
    );

const revealIntro =
    document.getElementById(
        "revealIntro"
    );

const confessionBlock =
    document.getElementById(
        "confessionBlock"
    );

const revealMessage =
    document.getElementById(
        "revealMessage"
    );

const revealEnding =
    document.getElementById(
        "revealEnding"
    );

const revealFinalMarker =
    document.getElementById(
        "revealFinalMarker"
    );

const heartContainer =
    document.getElementById(
        "heartContainer"
    );


// =========================
// DATA
// =========================

const scanLines = [

    "initializing...",

    "loading unnecessary modules...",

    "checking system...",

    "scanning user...",

    "calculating completely objective statistics..."

];


const commits = [

    {
        number: "001",
        type: "feat:",
        message:
            "started a random project",
        personal: false
    },

    {
        number: "002",
        type: "fix:",
        message:
            "immediately broke the random project",
        personal: false
    },

    {
        number: "003",
        type: "fix:",
        message:
            "somehow fixed it",
        personal: false
    },

    {
        number: "004",
        type: "feat:",
        message:
            "added one specific person",
        personal: true
    },

    {
        number: "005",
        type: "bug:",
        message:
            "that person is unusually distracting",
        personal: true
    },

    {
        number: "006",
        type: "fix:",
        message:
            "no fix found",
        personal: true
    }

];


const databaseLines = [

    {
        text:
            "Searching database...",
        type:
            "normal"
    },

    {
        text:
            "8,231,492,103 people indexed.",
        type:
            "normal"
    },

    {
        text:
            "Applying filters...",
        type:
            "normal"
    },

    {
        text:
            "interesting",
        type:
            "filter"
    },

    {
        text:
            "funny",
        type:
            "filter"
    },

    {
        text:
            "annoyingly memorable",
        type:
            "filter"
    },

    {
        text:
            "makes my day better",
        type:
            "filter"
    },

    {
        text:
            "1 result found.",
        type:
            "result"
    }

];


// =========================
// HELPERS
// =========================

function wait(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );

}


function changeScreen(
    currentScreen,
    newScreen
) {

    currentScreen.classList.add(
        "leaving"
    );


    setTimeout(() => {

        currentScreen.classList.remove(
            "active",
            "leaving"
        );

        newScreen.classList.add(
            "active"
        );

    }, 400);

}


// =========================
// PHASE 2
// =========================

async function typeLine(text) {

    const line =
        document.createElement(
            "p"
        );

    line.classList.add(
        "terminal-line"
    );

    terminalOutput.appendChild(
        line
    );


    const cursor =
        document.createElement(
            "span"
        );

    cursor.classList.add(
        "cursor"
    );


    for (
        let i = 0;
        i < text.length;
        i++
    ) {

        line.textContent +=
            text[i];

        line.appendChild(
            cursor
        );

        await wait(30);

    }


    cursor.remove();

}


async function startScan() {

    terminalOutput.innerHTML = "";

    resultCard.classList.add(
        "hidden"
    );

    continueButton.classList.add(
        "hidden"
    );


    await wait(500);


    for (
        const line of scanLines
    ) {

        await typeLine(
            line
        );

        await wait(500);

    }


    await wait(600);


    resultCard.classList.remove(
        "hidden"
    );


    await wait(650);


    continueButton.classList.remove(
        "hidden"
    );

}


// =========================
// PHASE 3
// =========================

async function startGitHistory() {

    commitList.innerHTML = "";

    gitNextButton.classList.add(
        "hidden"
    );


    await wait(500);


    for (
        const commit of commits
    ) {

        const commitElement =
            document.createElement(
                "div"
            );


        commitElement.classList.add(
            "commit"
        );


        if (
            commit.personal
        ) {

            commitElement.classList.add(
                "personal"
            );

        }


        commitElement.innerHTML = `
            <div class="commit-number">
                ${commit.number}
            </div>

            <div class="commit-message">

                <span class="type">
                    ${commit.type}
                </span>

                ${commit.message}

            </div>
        `;


        commitList.appendChild(
            commitElement
        );


        await wait(700);

    }


    await wait(700);


    gitNextButton.classList.remove(
        "hidden"
    );

}


// =========================
// PHASE 4
// =========================

function createDatabaseLine(
    text,
    type
) {

    const line =
        document.createElement(
            "div"
        );


    line.classList.add(
        "database-line"
    );


    if (
        type === "filter"
    ) {

        line.classList.add(
            "filter"
        );

        line.textContent =
            text;

    }

    else {

        const prefix =
            document.createElement(
                "span"
            );

        prefix.classList.add(
            "database-prefix"
        );

        prefix.textContent = ">";


        const content =
            document.createElement(
                "span"
            );

        content.textContent =
            text;


        line.appendChild(
            prefix
        );

        line.appendChild(
            content
        );

    }


    if (
        type === "result"
    ) {

        line.classList.add(
            "result-line"
        );

    }


    databaseOutput.appendChild(
        line
    );

}


async function startDatabaseSearch() {

    databaseOutput.innerHTML = "";

    personResult.classList.add(
        "hidden"
    );

    databaseContinueButton.classList.add(
        "hidden"
    );


    await wait(600);


    for (
        const item of databaseLines
    ) {

        createDatabaseLine(
            item.text,
            item.type
        );


        if (
            item.type === "filter"
        ) {

            await wait(650);

        }

        else {

            await wait(900);

        }

    }


    await wait(1300);


    personResult.classList.remove(
        "hidden"
    );


    await wait(1400);


    databaseContinueButton.classList.remove(
        "hidden"
    );

}


// =========================
// PHASE 5
// =========================

async function startEvidence() {

    evidenceCards.forEach(
        card => {

            card.classList.remove(
                "visible"
            );

        }
    );


    evidenceConclusion.classList.add(
        "hidden"
    );

    evidenceContinueButton.classList.add(
        "hidden"
    );


    await wait(700);


    for (
        const card of evidenceCards
    ) {

        card.classList.add(
            "visible"
        );

        await wait(850);

    }


    await wait(700);


    evidenceConclusion.classList.remove(
        "hidden"
    );


    await wait(1000);


    evidenceContinueButton.classList.remove(
        "hidden"
    );

}


// =========================
// PHASE 6
// =========================

async function startErrorSequence() {

    errorTitle.classList.add(
        "hidden"
    );

    unableText.classList.add(
        "hidden"
    );

    reasonBlock.classList.add(
        "hidden"
    );

    diagnosticText.classList.add(
        "hidden"
    );

    causeFound.classList.add(
        "hidden"
    );

    showCauseButton.classList.add(
        "hidden"
    );


    await wait(800);


    errorTitle.classList.remove(
        "hidden"
    );


    await wait(900);


    unableText.classList.remove(
        "hidden"
    );


    await wait(900);


    reasonBlock.classList.remove(
        "hidden"
    );


    await wait(1600);


    diagnosticText.classList.remove(
        "hidden"
    );


    await wait(1700);


    causeFound.classList.remove(
        "hidden"
    );


    await wait(1100);


    showCauseButton.classList.remove(
        "hidden"
    );

}


// =========================
// HEART EFFECT
// =========================

function createHeart() {

    const heart =
        document.createElement(
            "span"
        );


    heart.classList.add(
        "floating-heart"
    );


    heart.textContent = "♥";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        3 +
        Math.random() * 2 +
        "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 5000);

}


function startHearts() {

    let heartsCreated = 0;


    const heartInterval =
        setInterval(() => {

            createHeart();

            heartsCreated++;


            if (
                heartsCreated >= 14
            ) {

                clearInterval(
                    heartInterval
                );

            }

        }, 220);

}


// =========================
// PHASE 7
// FINAL REVEAL
// =========================

async function startReveal() {

    revealOkay.classList.add(
        "hidden"
    );

    revealIntro.classList.add(
        "hidden"
    );

    confessionBlock.classList.add(
        "hidden"
    );

    revealMessage.classList.add(
        "hidden"
    );

    revealEnding.classList.add(
        "hidden"
    );

    revealFinalMarker.classList.add(
        "hidden"
    );


    /*
        Small pause after clicking
        "Show cause".
    */

    await wait(900);


    revealOkay.classList.remove(
        "hidden"
    );


    await wait(1600);


    revealIntro.classList.remove(
        "hidden"
    );


    await wait(2600);


    /*
        Main confession.
    */

    confessionBlock.classList.remove(
        "hidden"
    );


    /*
        Only now do the hearts appear.
    */

    startHearts();


    await wait(2600);


    revealMessage.classList.remove(
        "hidden"
    );


    await wait(3300);


    revealEnding.classList.remove(
        "hidden"
    );


    await wait(2500);


    revealFinalMarker.classList.remove(
        "hidden"
    );

}


// =========================
// BUTTON EVENTS
// =========================


// Phase 1 → Phase 2

runButton.addEventListener(
    "click",
    () => {

        runButton.disabled =
            true;

        runButton.innerHTML =
            "&gt; Running...";


        changeScreen(
            landingScreen,
            scanScreen
        );


        setTimeout(() => {

            startScan();

        }, 500);

    }
);


// Phase 2 → Phase 3

continueButton.addEventListener(
    "click",
    () => {

        continueButton.disabled =
            true;


        changeScreen(
            scanScreen,
            gitScreen
        );


        setTimeout(() => {

            startGitHistory();

        }, 500);

    }
);


// Phase 3 → Phase 4

gitNextButton.addEventListener(
    "click",
    () => {

        gitNextButton.disabled =
            true;


        changeScreen(
            gitScreen,
            databaseScreen
        );


        setTimeout(() => {

            startDatabaseSearch();

        }, 500);

    }
);


// Phase 4 → Phase 5

databaseContinueButton.addEventListener(
    "click",
    () => {

        databaseContinueButton.disabled =
            true;


        changeScreen(
            databaseScreen,
            evidenceScreen
        );


        setTimeout(() => {

            startEvidence();

        }, 500);

    }
);


// Phase 5 → Phase 6

evidenceContinueButton.addEventListener(
    "click",
    () => {

        evidenceContinueButton.disabled =
            true;


        changeScreen(
            evidenceScreen,
            errorScreen
        );


        setTimeout(() => {

            startErrorSequence();

        }, 500);

    }
);


// Phase 6 → Phase 7

showCauseButton.addEventListener(
    "click",
    () => {

        showCauseButton.disabled =
            true;


        changeScreen(
            errorScreen,
            revealScreen
        );


        setTimeout(() => {

            startReveal();

        }, 500);

    }
)