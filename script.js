document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");

    // Data for each chapter (image source and text)
    const chapters = [
        { image: "chapter1.png", text: "Chapter 1: Introduction to the Story" },
        { image: "chapter2.png", text: "Chapter 2: The Adventure Begins" },
        { image: "chapter3.png", text: "Chapter 3: Exploring New Territories" },
        { image: "chapter4.png", text: "Chapter 4: Facing Challenges" },
        { image: "chapter5.png", text: "Chapter 5: A Twist in the Tale" },
        { image: "chapter6.png", text: "Chapter 6: The Climax" },
        { image: "chapter7.png", text: "Chapter 7: Resolving the Conflict" },
        { image: "chapter8.png", text: "Chapter 8: The Conclusion" },
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
