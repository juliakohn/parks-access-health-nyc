document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");

    // Data for each chapter (image source or text)
    const chapters = [
        { image: "images/cover1.png", text: "Intro"},
        { image: "images/F1_nycparks_map1.png", text: "This map was created using NYC OpenData’s Parks Properties 2023 dataset. The data was used to visualize the geographic locations and shapes of green spaces managed partially or completely by the NYC Parks organization in all five boroughs. This data has been produced in whole or part using secondary data. Data was collected by NYC Parks, and is updated and adjusted as the land designated under the organization’s jurisdiction expands or changes. The main limitation to this data is the constant changing, expansion, and shrinking of parks that is not always updated in real time. However, most of the green spaces shown are consistent."},
        { image: "images/F1_walkingdistance_map2.png", text: "This map was created using NYC OpenData’s Wall-to-a-Park Service 2023 dataset. The NYC Parks organization collected this data based on an analysis of what parts of the city are within 0.5 mile walking distance to an established park that is either over 8 acres large or on a waterfront, or within 0.25 mile walking distance to small green spaces such as sitting areas or playgrounds. This analysis does not include areas within walking distance to green spaces such as cemeteries, community gardens used solely for growing food, or sites with no ability to be used for recreational purposes or leisure. Parks that are privately owned and also have no relation to the NYC Parks organization are also excluded, such as small parks only available to residents of luxury buildings." },
        { image: "images/F1_walkabilityandparks_map4.png", text: "This map was created using filtered data from the United States Environmental Protection Agency’s National Walkability Index dataset. The map is filtered to show the June 2021 walkability scores for New York, categorized by the 2019 Census block groups. A walkable space, with a high level of walkability, is defined as a space that is easy to walk around. There are several factors that the Environmental Protection Agency (EPA) considers to influence walkability the most, and the walkability score for a given area is calculated based on sub-scores for each influencing factor. These factors are characteristics of the built environment that impact the likelihood of walking to be chosen as a mode of transportation for any individual. These factors include street intersection density (number of intersections), proximity to transit stops, and diversity of land usage. According to the EPA, higher street intersection density leads to higher walkability, since a higher number of intersections allows for easier and faster connectivity between spaces. Higher proximity to transit stops is also associated with higher walkability. Regarding land use, areas with a high percentage of mixed use buildings (residential and commercial) are associated with a higher walkability, as well as areas with a large number of commercial-only buildings that are occupied by various employment types and companies from varying industries. In contrast, areas with a high percentage of residential-only buildings, as well as areas concentrated with commercial buildings occupied by only one company or companies of only one industry, are associated with a lower walkability score. However, areas with residential-only buildings that hold many units or apartments often correlate with a higher walkability score, in contrast to buildings that are single-family or hold a small number of separate units. To get the official score for a block group level, each block gets a score for the above 4 categories (street intersection density, proximity to transit stops, land usage regarding employment mix, and land use regarding residential or commercial mix) up to 20, and then put into an equation that finds a weighted average (some factors are weighted higher than others - intersection density and proximity to transit). The scores are given out of 20. The equation is as follows:"},
        { image: "images/Walk_Eq.png", text: "Potential score limitations include that many main streets with popular landmarks in urban areas do not have transit stops directly in the block, but nearby. This could lower the walkability score for main streets, but increase it for surrounding streets." },
        { image: "images/Diabetes_final.png", text: "Diabetes and Parks" },
        { image: "images/Diab_Eq.png", text: "d" },
        { image: "images/Obesity_final.png", text: "Obesity and Parks" },
        { image: "images/BMI_Eq.png", text: "d" },
        { image: "images/Ob_Eq.png", text: "d" },
        { image: "images/si_1.png", text: "Most of the borough of Staten Island has a walkability index score of over 13, placing it above the national average walkability score of 10.50. By most standards, Staten Island would be considered a very walkable area. However, when looking at how much of the borough is within walking distance to a park (dataset records areas within 0.5 mile walk to an established park, or .25 mile walk to an unofficial green sitting area or small playground), Staten Island is one of the areas in the city with the least easy access to parks. Interestingly enough, the parts of Staten Island that have the highest walkability scores, namely the neighborhoods of Westerleigh, Concord, and Tottenville, are also considered to not be within walking distance to a park. " },
        { image: "images/diob_FINALcomp.png", text: "An interesting point to consider about Staten Island is that regardless of if an area is considered to be walkable and/or within walking distance to a park, the obesity rates in the borough are much higher than the rest of the city. Most studies that have been conducted to analyze the correlation between walkability and obesity have found that less walkable areas have higher obesity rates, while more walkable areas have lower obesity rates. In the case of Staten Island, this conclusion is not valid. In addition, studies that have been conducted to show the correlation between walkability and diabetes have found that less walkable areas have higher diabetes rates, while more walkable areas have lower diabetes rates. Regarding Staten Island, this conclusion would be true. Staten Island does not have a higher diabetes rate than average in New York, nor are there any areas that have abnormal spikes in diabetes levels. If anything, the areas in Staten Island with higher walkability scores, and that are closest to major green spaces, seem to have lower diabetes rates. The inconsistency between the rates of the two diseases in Staten Island is intriguing. If access to green space IS a factor impacting the obesity rate in Staten Island, it may be due to a lack of usage of major parks. One park in particular that may be suffering from a lack of usage is Freshkills Park."},
        { image: "images/Freshkills.png", text: "One of the larger green spaces in Staten Island is Freshkills Park, established on top of the former Fresh Kills Landfill. The landfill was once the largest in the world, but it closed in 2001 and upon greenifying the space, it was established as a park. The park covers 2,200 acres, almost three times the size of Central Park in Upper Manhattan. The park currently has many public, recreational facilities available for users, such as basketball courts, soccer fields, short hiking trails, and playgrounds. As of 2023, more recreational spaces are in the process of being built. These spaces include kayak and boat launches, horseback riding trails, running and bike paths, park houses, pavilions, educational facilities, and wildlife preservation systems. Most of these new programs are planned to be complete by 2036, if not earlier. While so many amenities and plans would make it seem like it would be a popular park to enjoy among Staten Island residents, this is not the case for much of the population. Despite efforts to renew and improve the space, many residents still hold negative views towards the park because of its history as a landfill. Many residents hold these views because of environmental concerns, and worries about being exposed to toxins from the landfill that could lead to adverse health impacts such as asthma or cancer. These worries have turned many Staten Island residents from wanting to use the park. Thus, despite it being such a large green space with much recreational potential, in a very walkable area as well, the park is likely not being used nearly as much as one may think. Perhaps the low usage of the green space could help explain higher obesity rates in the area."},
        { text: "Comparisons, findings, stats, conclusion" },
    ];

 const formattedChapters = chapters.map(chapter => {
        if (chapter.mainText) {
            return `${chapter.textBefore || ''}${chapter.mainText}\n\nBefore Image: ${chapter.image}\n\nAfter Image: ${chapter.image}\n\n`;
        } else {
            return `${chapter.text}\n\n`;
        }
    

});

console.log(formattedChapters.join(""));



    // Loop through chapters and create HTML elements dynamically
    chapters.forEach((chapter, index) => {
        const chapterElement = document.createElement("div");
        chapterElement.classList.add("chapter");

        const imageElement = document.createElement("img");
        imageElement.src = chapter.image;
        imageElement.alt = `Chapter ${index + 1} Image`;
        imageElement.classList.add("center-image", "fade-in");

        const textElement = document.createElement("p");
        textElement.textContent = chapter.text;

        chapterElement.appendChild(imageElement);
        chapterElement.appendChild(textElement);

        storyContainer.appendChild(chapterElement);
    });

// Add the fade-in effect when scrolling
    const images = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    images.forEach(image => {
        observer.observe(image);
    });
});