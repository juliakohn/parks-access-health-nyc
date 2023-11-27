document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");

    // Data for each chapter (image source and text)
    const chapters = [
        { text: "Intro" },
        { image: "images/parks_DARK.png", text: "NYC Parks" },
        { image: "images/walkingdistance_DARK.png", text: "Walking Distance" },
        { image: "images/walkability_DARK.png", text: "Walkability: " },
        { image: "images/WalkingAndParks_DARK.png", text: "Walkability and Parks" },
        { image: "images/F1_Diabetes_darkOp2.png", text: "Diabetes" },
        { image: "images/DiabetesPark_DARK.png", text: "Diabetes and Parks" },
        { image: "images/F1_ObesePop_darkOp2.png", text: "Obesity" },
        { image: "images/ObesityPark_DARK.png", text: "Obesity and Parks" },
        { text: "Comparisons, findings, stats, conclusion" },
    ];

    // Loop through chapters and create HTML elements dynamically
    chapters.forEach((chapter, index) => {
        const chapterElement = document.createElement("div");
        chapterElement.classList.add("chapter");

        const imageElement = document.createElement("img");
        imageElement.src = chapter.image;
        imageElement.alt = `Chapter ${index + 1} Image`;

        const textElement = document.createElement("p");
        textElement.textContent = chapter.text;

        chapterElement.appendChild(imageElement);
        chapterElement.appendChild(textElement);

        storyContainer.appendChild(chapterElement);
    });
});
