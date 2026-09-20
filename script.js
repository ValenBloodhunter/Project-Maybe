// =========================
// PROJECT MAYBE
// PHASE 3
// =========================

console.log(
    "Project Maybe v0.3 initialized."
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


// =========================
// PHASE 2 SCAN CONTENT
// =========================

const scanLines = [
    "initializing...",
    "loading unnecessary modules...",
    "checking system...",
    "scanning user...",
    "calculating completely objective statistics..."
];


// =========================
// PHASE 3 COMMITS
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
// PHASE 2
// START SCAN
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
// PHASE 3
// SHOW GIT COMMITS
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
// RUN BUTTON
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
// SCAN → GIT
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
// GIT → PHASE 4
// =========================

gitNextButton.addEventListener(
    "click",
    () => {

        changeScreen(
            gitScreen,
            nextScreen
        );

    }
);