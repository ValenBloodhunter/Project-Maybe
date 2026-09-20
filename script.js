// =========================
// PROJECT MAYBE
// PERSONALIZED BUILD
// =========================

console.log(
    "Project Maybe v0.9 initialized."
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

const happinessButton =
    document.getElementById(
        "happinessButton"
    );


// =========================
// SCREENS
// =========================

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


// =========================
// PHASE 2
// =========================

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );

const resultCard =
    document.getElementById(
        "resultCard"
    );


// =========================
// PHASE 3
// =========================

const commitList =
    document.getElementById(
        "commitList"
    );


// =========================
// PHASE 4
// =========================

const databaseOutput =
    document.getElementById(
        "databaseOutput"
    );

const personResult =
    document.getElementById(
        "personResult"
    );


// =========================
// PHASE 5
// =========================

const evidenceCards =
    document.querySelectorAll(
        ".evidence-card"
    );

const evidenceConclusion =
    document.getElementById(
        "evidenceConclusion"
    );


// =========================
// PHASE 6
// =========================

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


// =========================
// FINAL REVEAL
// =========================

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

const achievementCard =
    document.getElementById(
        "achievementCard"
    );

const happinessCount =
    document.getElementById(
        "happinessCount"
    );

const happinessMessage =
    document.getElementById(
        "happinessMessage"
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
// SYSTEM SCAN
// =========================

const scanLines = [

    "initializing...",

    "loading unnecessary modules...",

    "checking system...",

    "scanning user...",

    "detecting aesthetic tendencies...",

    "measuring suspiciously cute habits...",

    "calculating completely objective statistics..."

];


// =========================
// FAKE GIT HISTORY
// =========================

const commits = [

    {
        number: "001",
        type: "feat:",
        message:
            "started a completely normal project",
        personal: false
    },

    {
        number: "002",
        type: "fix:",
        message:
            "immediately broke the completely normal project",
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
            "added one suspiciously specific person",
        personal: true
    },

    {
        number: "005",
        type: "bug:",
        message:
            "person keeps becoming more important than expected",
        personal: true
    },

    {
        number: "006",
        type: "bug:",
        message:
            "physical contact causes unexpected happiness",
        personal: true
    },

    {
        number: "007",
        type: "fix:",
        message:
            "no fix found. apparently this is intentional.",
        personal: true
    }

];


// =========================
// DATABASE SEARCH
// =========================

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
            "trying to make everything aesthetic",
        type:
            "filter"
    },

    {
        text:
            "uses tiny thumbs-up confirmation protocol",
        type:
            "filter"
    },

    {
        text:
            "certified Aatal",
        type:
            "filter"
    },

    {
        text:
            "occasionally gets suspiciously annoyed about other girls",
        type:
            "filter"
    },

    {
        text:
            "somehow ridiculously easy to talk to",
        type:
            "filter"
    },

    {
        text:
            "makes ordinary moments memorable",
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
// TERMINAL TYPING
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


// =========================
// SYSTEM SCAN
// =========================

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

        await wait(450);

    }


    await wait(600);


    resultCard.classList.remove(
        "hidden"
    );


    await wait(750);


    continueButton.classList.remove(
        "hidden"
    );

}


// =========================
// GIT HISTORY
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


        await wait(680);

    }


    await wait(700);


    gitNextButton.classList.remove(
        "hidden"
    );

}


// =========================
// DATABASE
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

        prefix.textContent =
            ">";


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

    databaseOutput.innerHTML =
        "";

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

            await wait(600);

        }

        else {

            await wait(900);

        }

    }


    await wait(1400);


    personResult.classList.remove(
        "hidden"
    );


    await wait(1600);


    databaseContinueButton.classList.remove(
        "hidden"
    );

}


// =========================
// EVIDENCE
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

        await wait(1000);

    }


    await wait(800);


    evidenceConclusion.classList.remove(
        "hidden"
    );


    await wait(1100);


    evidenceContinueButton.classList.remove(
        "hidden"
    );

}


// =========================
// ERROR SEQUENCE
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


    await wait(1700);


    diagnosticText.classList.remove(
        "hidden"
    );


    await wait(1800);


    causeFound.classList.remove(
        "hidden"
    );


    await wait(1200);


    showCauseButton.classList.remove(
        "hidden"
    );

}


// =========================
// HEARTS
// =========================

function createHeart(
    startX = Math.random() * 100
) {

    const heart =
        document.createElement(
            "span"
        );


    heart.classList.add(
        "floating-heart"
    );


    heart.textContent =
        "♥";


    heart.style.left =
        startX + "%";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 12
        ) +
        "px";


    heart.style.animationDuration =
        (
            3 +
            Math.random() * 2
        ) +
        "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 5200);

}


function startRevealHearts() {

    let heartsCreated = 0;


    const interval =
        setInterval(() => {

            createHeart();

            heartsCreated++;


            if (
                heartsCreated >= 12
            ) {

                clearInterval(
                    interval
                );

            }

        }, 240);

}


// =========================
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

    achievementCard.classList.add(
        "hidden"
    );

    revealFinalMarker.classList.add(
        "hidden"
    );


    await wait(900);


    revealOkay.classList.remove(
        "hidden"
    );


    await wait(1700);


    revealIntro.classList.remove(
        "hidden"
    );


    await wait(2900);


    confessionBlock.classList.remove(
        "hidden"
    );


    startRevealHearts();


    await wait(3000);


    revealMessage.classList.remove(
        "hidden"
    );


    await wait(5200);


    revealEnding.classList.remove(
        "hidden"
    );


    await wait(3400);


    achievementCard.classList.remove(
        "hidden"
    );


    await wait(1100);


    revealFinalMarker.classList.remove(
        "hidden"
    );

}


// =========================
// HAPPINESS COUNTER
// =========================

let happiness = 0;


happinessButton.addEventListener(
    "click",
    () => {

        happiness++;

        happinessCount.textContent =
            happiness;


        createHeart(
            40 +
            Math.random() * 20
        );


        happinessButton.classList.remove(
            "pop"
        );


        void happinessButton.offsetWidth;


        happinessButton.classList.add(
            "pop"
        );


        if (
            happiness === 5
        ) {

            happinessMessage.textContent =
                "okay Shree, the experiment is working";

        }

        else if (
            happiness === 10
        ) {

            happinessMessage.textContent =
                "this is becoming statistically significant";

        }

        else if (
            happiness === 20
        ) {

            happinessMessage.textContent =
                "big Aatal behaviour honestly";

        }

        else if (
            happiness === 30
        ) {

            happinessMessage.textContent =
                "okay fine, keep going";

        }

        else if (
            happiness === 50
        ) {

            happinessMessage.textContent =
                "achievement unlocked: maximum Shree";

        }

    }
);


// =========================
// NAVIGATION
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


// Phase 6 → Reveal

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
);