/* =====================================================
   PAGE SYSTEM — EXACTLY 5 PAGES
===================================================== */

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5")
];

let currentPage = 0;


function showPage(number) {

    pages.forEach((page, index) => {

        if (!page) return;

        page.classList.toggle(
            "active",
            index === number
        );

    });

    /* Update page state on body */

    document.body.classList.remove(
        "page1-active",
        "page2-active",
        "page3-active",
        "page4-active",
        "page5-active"
    );

    document.body.classList.add(
        `page${number + 1}-active`
    );

    currentPage = number;
}


/* =====================================================
   WAIT
===================================================== */

function wait(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}


/* =====================================================
   INTRO CARD DELAY
===================================================== */

const introCard =
    document.querySelector(".intro-card");


if (introCard) {

    setTimeout(() => {

        introCard.classList.add("show");

    }, 1800);

}


/* =====================================================
   FALLING DECORATIONS
===================================================== */

const decorationTypes = [

    "✦",
    "✧",
    "◇",
    "♡",
    "💫",
    "🎉",
    "🎊",
    "✨",
    "🎈",
    "💖"

];


function getFallingContainer() {

    /*
       Prefer the current page's local
       falling-decoration container.

       If you are still using the old
       global container, this also works.
    */

    const activePage =
        document.querySelector(".page.active");

    if (activePage) {

        const localContainer =
            activePage.querySelector(
                ".page-falling"
            );

        if (localContainer) {

            return localContainer;

        }
    }


    return document.getElementById(
        "fallingDecorations"
    );
}


function createFallingDecoration() {

    const container =
        getFallingContainer();

    if (!container) return;


    const item =
        document.createElement("span");


    item.className =
        "falling";


    item.textContent =
        decorationTypes[
            Math.floor(
                Math.random() *
                decorationTypes.length
            )
        ];


    item.style.left =
        Math.random() * 100 + "%";


    item.style.fontSize =
        (12 + Math.random() * 16) + "px";


    item.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    item.style.animationDelay =
        (Math.random() * 0.4) + "s";


    container.appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 9000);

}


/*
   Start with a few immediately
*/

for (
    let i = 0;
    i < 5;
    i++
) {

    setTimeout(
        createFallingDecoration,
        i * 220
    );

}


/*
   Continue falling
*/

setInterval(
    createFallingDecoration,
    500
);


/* =====================================================
   READY BUTTON
===================================================== */

const readyButton =
    document.getElementById(
        "readyButton"
    );


if (readyButton) {

    setTimeout(() => {

        readyButton.classList.add(
            "show"
        );

    }, 1200);


    readyButton.addEventListener(
        "click",
        async () => {

            if (readyButton.disabled) {
                return;
            }

            readyButton.disabled = true;

            await startCountdown();

        }
    );

}


/* =====================================================
   COUNTDOWN
===================================================== */

const countdownNumber =
    document.getElementById(
        "countdownNumber"
    );


async function startCountdown() {

    showPage(1);


    const numbers = [
        "3",
        "2",
        "1"
    ];


    for (
        const number of numbers
    ) {

        if (!countdownNumber) {
            break;
        }


        countdownNumber.textContent =
            number;


        countdownNumber.classList.remove(
            "count-pop"
        );


        /*
           Force browser to restart animation
        */

        void countdownNumber.offsetWidth;


        countdownNumber.classList.add(
            "count-pop"
        );


        await wait(1000);

    }


    await birthdayReveal();

}


/* =====================================================
   TYPEWRITER
===================================================== */

function typeText(
    element,
    text,
    speed
) {

    return new Promise(resolve => {

        if (!element) {

            resolve();

            return;

        }


        let index = 0;


        element.textContent = "";


        element.classList.add(
            "typing"
        );


        const interval =
            setInterval(() => {

                element.textContent +=
                    text[index];


                index++;


                if (
                    index >=
                    text.length
                ) {

                    clearInterval(
                        interval
                    );


                    element.classList.remove(
                        "typing"
                    );


                    resolve();

                }

            }, speed);

    });

}


/* =====================================================
   BIRTHDAY REVEAL
===================================================== */

async function birthdayReveal() {

    showPage(2);


    const card =
        document.getElementById(
            "birthdayCard"
        );


    const happy =
        document.getElementById(
            "happyText"
        );


    const birthday =
        document.getElementById(
            "birthdayText"
        );


    const name =
        document.getElementById(
            "nameText"
        );


    const nextButton =
        document.getElementById(
            "birthdayNext"
        );


    /* -----------------------------------------
       CARD APPEARS
    ----------------------------------------- */

    await wait(450);


    if (card) {

        card.classList.add(
            "visible"
        );

    }


    await wait(500);


    /* -----------------------------------------
       TYPE HAPPY
    ----------------------------------------- */

    await typeText(
        happy,
        "Happy",
        115
    );


    await wait(180);


    /* -----------------------------------------
       TYPE BIRTHDAY
    ----------------------------------------- */

    await typeText(
        birthday,
        "Birthday",
        100
    );


    await wait(180);


    /* -----------------------------------------
       TYPE VAIBHAVI
    ----------------------------------------- */

    await typeText(
        name,
        "Vaibhavi",
        105
    );


    /* -----------------------------------------
       SUSPENSE
    ----------------------------------------- */

    await wait(600);


    /* -----------------------------------------
       ONE HUGE POP
    ----------------------------------------- */

    createCelebration();


    if (card) {

        card.classList.remove(
            "celebrate"
        );


        void card.offsetWidth;


        card.classList.add(
            "celebrate"
        );

    }


    await wait(850);


    /* -----------------------------------------
       PHOTOS APPEAR ONE BY ONE
    ----------------------------------------- */

    const photo1 =
        document.querySelector(
            ".photo1"
        );


    const photo2 =
        document.querySelector(
            ".photo2"
        );


    const photo3 =
        document.querySelector(
            ".photo3"
        );


    const photo4 =
        document.querySelector(
            ".photo4"
        );


    if (photo1) {

        photo1.classList.add(
            "show"
        );

    }


    await wait(250);


    if (photo2) {

        photo2.classList.add(
            "show"
        );

    }


    await wait(250);


    if (photo3) {

        photo3.classList.add(
            "show"
        );

    }


    /*
       Fourth photo is optional.
       If it exists, show it too.
    */

    if (photo4) {

        await wait(250);

        photo4.classList.add(
            "show"
        );

    }


    /* -----------------------------------------
       CONTINUE BUTTON
    ----------------------------------------- */

    await wait(850);


    if (nextButton) {

        nextButton.classList.add(
            "show"
        );

    }

}


/* =====================================================
   CELEBRATION BURST
===================================================== */

function createCelebration() {

    const oldBurst =
        document.getElementById(
            "celebrationBurst"
        );


    if (oldBurst) {

        oldBurst.remove();

    }


    const burst =
        document.createElement(
            "div"
        );


    burst.id =
        "celebrationBurst";


    const pieces = [

        "🎉",
        "🎊",
        "✨",
        "🎆",
        "💫",
        "🎉",
        "✨",
        "🎊",
        "🎆",
        "💖",
        "✦",
        "💫",
        "🎉",
        "🎊",
        "✨",
        "🎆",
        "💫",
        "✦",
        "🎉",
        "🎊"

    ];


    pieces.forEach(
        (piece, index) => {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "burst";


            particle.textContent =
                piece;


            const angle =
                (
                    index /
                    pieces.length
                ) *
                Math.PI *
                2
                +
                Math.random() * 0.45;


            const distance =
                260 +
                Math.random() * 240;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            particle.style.setProperty(
                "--x",
                x + "px"
            );


            particle.style.setProperty(
                "--y",
                y + "px"
            );


            burst.appendChild(
                particle
            );

        }
    );


    const page3 =
        document.getElementById(
            "page3"
        );


    if (page3) {

        page3.appendChild(
            burst
        );

    }


    setTimeout(() => {

        burst.remove();

    }, 1900);

}


/* =====================================================
   BIRTHDAY → POSITIVE MESSAGE PAGE
===================================================== */

const birthdayNext =
    document.getElementById(
        "birthdayNext"
    );


if (birthdayNext) {

    birthdayNext.addEventListener(
        "click",
        () => {

            showPage(3);


            /*
               Start Page 4 photo reveal
            */

            showPage4Photo();

        }
    );

}


/* =====================================================
   PAGE 4 — DELAYED GAMING PHOTO
===================================================== */

function showPage4Photo() {

    const gamePhoto =
        document.querySelector(
            ".game-photo"
        );


    if (!gamePhoto) return;


    /*
       Reset it every time Page 4 opens
    */

    gamePhoto.classList.remove(
        "photo-show"
    );


    /*
       Wait before revealing
    */

    setTimeout(() => {

        /*
           Make sure we're still on Page 4
        */

        if (currentPage !== 3) {
            return;
        }


        gamePhoto.classList.add(
            "photo-show"
        );

    }, 1200);

}


/* =====================================================
   POSITIVE MESSAGE ROTATION
===================================================== */

const messages =
    document.querySelectorAll(
        ".message"
    );


const messageDots =
    document.querySelectorAll(
        ".message-dot"
    );


let messageIndex = 0;


function nextMessage() {

    if (!messages.length) {
        return;
    }


    /*
       Current message out
    */

    messages[
        messageIndex
    ].classList.remove(
        "active"
    );


    if (
        messageDots[messageIndex]
    ) {

        messageDots[
            messageIndex
        ].classList.remove(
            "active"
        );

    }


    /*
       Next
    */

    messageIndex++;


    if (
        messageIndex >=
        messages.length
    ) {

        messageIndex = 0;

    }


    /*
       New message in
    */

    messages[
        messageIndex
    ].classList.add(
        "active"
    );


    if (
        messageDots[messageIndex]
    ) {

        messageDots[
            messageIndex
        ].classList.add(
            "active"
        );

    }

}


setInterval(
    nextMessage,
    3500
);


/* =====================================================
   POSITIVE MESSAGE → FINAL
===================================================== */

const messageNext =
    document.getElementById(
        "messageNext"
    );


if (messageNext) {

    messageNext.addEventListener(
        "click",
        () => {

            showPage(4);

        }
    );

}


/* =====================================================
   START ON PAGE 1
===================================================== */

showPage(0);