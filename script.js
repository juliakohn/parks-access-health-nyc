document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");

    // Data for each chapter (image source or text)
    const chapters = [
        { image: "white.png", text: "Intro" },
        { image: "images/F1_nycparks_map1.png", text: "NYC Parks" },
        { image: "images/F1_walkingdistance_map2.png", text: "Walking Distance" },
        { image: "images/F1_walkabilityandparks_map4.png", text: "Walkability and Parks" },
        { image: "images/DiabetesParks_LIGHT.png", text: "Diabetes and Parks" },
        { image: "images/ObesityParks_LIGHT.png", text: "Obesity and Parks" },
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
