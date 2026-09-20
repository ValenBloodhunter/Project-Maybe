// =========================
// PROJECT MAYBE
// PHASE 4
// =========================

console.log(
    "Project Maybe v0.4 initialized."
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

const nextScreen =
    document.getElementById(
        "nextScreen"
    );


const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );

const resultCard =
    document.getElementById(
        "resultCard"
    );

const commitList =
    document.getElementById(
        "commitList"
    );

const databaseOutput =
    document.getElementById(
        "databaseOutput"
    );

const personResult =
    document.getElementById(
        "personResult"
    );


// =========================
// PHASE 2
// SYSTEM SCAN
// =========================

const scanLines = [
    "initializing...",
    "loading unnecessary modules...",
    "checking system...",
    "scanning user...",
    "calculating completely objective statistics..."
];


// =========================
// PHASE 3
// GIT COMMITS
// =========================

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


// =========================
// PHASE 4
// DATABASE SEQUENCE
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
// WAIT HELPER
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


// =========================
// SCREEN TRANSITION
// =========================

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
// TYPE TERMINAL LINE
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
// START SYSTEM SCAN
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
// START GIT HISTORY
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
// DATABASE LINE
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


// =========================
// START DATABASE SEARCH
// =========================

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

            await wait(650);

        }

        else {

            await wait(900);

        }

    }


    /*
        Pause after:
        "1 result found."
    */

    await wait(1300);


    /*
        Reveal their name.
    */

    personResult.classList.remove(
        "hidden"
    );


    await wait(1400);


    databaseContinueButton.classList.remove(
        "hidden"
    );

}


// =========================
// PHASE 1 → PHASE 2
// =========================

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


// =========================
// PHASE 2 → PHASE 3
// =========================

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


// =========================
// PHASE 3 → PHASE 4
// =========================

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


// =========================
// PHASE 4 → PHASE 5
// =========================

databaseContinueButton.addEventListener(
    "click",
    () => {

        databaseContinueButton.disabled =
            true;


        changeScreen(
            databaseScreen,
            nextScreen
        );

    }
);