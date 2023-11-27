document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");

    // Data for each chapter (image source and text)
    const chapters = [
        { text: "Intro" },
        { image: "chapter1.png", text: "NYC Parks" },
        { image: "chapter2.png", text: "Walking Distance" },
        { image: "chapter3.png", text: "Walkability: " },
        { image: "chapter4.png", text: "Walkability and Parks" },
        { image: "chapter5.png", text: "Diabetes" },
        { image: "chapter6.png", text: "Diabetes and Parks" },
        { image: "chapter7.png", text: "Obesity" },
        { image: "chapter8.png", text: "Obesity and Parks" },
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
