// Get HTML Elements

const firstColor = document.getElementById("firstcolor");

const secondColor = document.getElementById("secondcolor");

const direction = document.getElementById("direction");

const preview = document.getElementById("preview");

const code = document.getElementById("code");

const colorCode1 = document.getElementById("colorcode1");

const colorCode2 = document.getElementById("colorcode2");


// Generate Gradient Function

function generateGradient() {

    // Get selected colors

    const color1 = firstColor.value;

    const color2 = secondColor.value;


    // Get selected direction

    const dir = direction.value;


    // Create gradient

    const gradient =
        `linear-gradient(${dir}, ${color1}, ${color2})`;


    // Apply gradient to preview

    preview.style.background = gradient;


    // Show CSS code

    code.textContent = gradient;


    // Show color codes

    colorCode1.textContent =
        color1.toUpperCase();

    colorCode2.textContent =
        color2.toUpperCase();
}


// Change first color

firstColor.addEventListener(
    "input",
    generateGradient
);


// Change second color

secondColor.addEventListener(
    "input",
    generateGradient
);


// Change direction

direction.addEventListener(
    "change",
    generateGradient
);


// Copy CSS Code Function

function copyCode() {

    const text = code.textContent;


    // Check Clipboard API

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(text)

            .then(function () {

                alert(
                    "CSS gradient code copied successfully! ✅"
                );

            })

            .catch(function () {

                fallbackCopy(text);

            });

    } else {

        // Use fallback method

        fallbackCopy(text);

    }
}


// Fallback Copy Function

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");


    textarea.value = text;


    textarea.style.position = "fixed";

    textarea.style.left = "-9999px";


    document.body.appendChild(textarea);


    textarea.focus();

    textarea.select();


    try {

        document.execCommand("copy");

        alert(
            "CSS gradient code copied successfully! ✅"
        );

    } catch (error) {

        alert(
            "Copy failed. Please copy the code manually."
        );

    }


    document.body.removeChild(textarea);
}


// Generate gradient when page loads

generateGradient();