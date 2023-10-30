document.addEventListener("DOMContentLoaded", function () {
    const skillsList = document.querySelectorAll(".skills__box");
    const originalParagraph = document.querySelector(".skills__paragraph");
    originalParagraph.classList.add("original-paragraph"); // Adding a class to the original paragraph

    const newParagraph = document.createElement("p");
    newParagraph.classList.add("new-paragraph");
    newParagraph.style.opacity = "0";
    newParagraph.style.transition = "opacity 0.5s ease-in-out"; // Smoother transition
    originalParagraph.parentNode.appendChild(newParagraph);

    let isFirstHover = true; // Flag to track if it's the first hover

    const descriptions = {
        "Python-logo-notext.svg.png": "Python is an interpreted, high-level, general-purpose programming language. It emphasizes code readability and its syntax allows programmers to express concepts in fewer lines of code than would be possible in languages such as C++ or Java.",
        "c_logo-1.png": "C is a general-purpose, procedural computer programming language. It was initially developed by Dennis Ritchie between 1969 and 1973 at Bell Labs and used to re-implement the Unix operating system.",
        "c++_logo-1.png": "C++ is a general-purpose programming language created as an extension of the C programming language. It provides imperative, object-oriented, and generic programming features, while also providing facilities for low-level memory manipulation.",
        "java_logo-1.png": "Java is a class-based, object-oriented programming language. It is designed to have as few implementation dependencies as possible, making it a popular choice for network applications.",
        "pandas_logo.png": "Pandas is a Python library used for data manipulation and analysis. It offers data structures and operations for manipulating numerical tables and time series.",
        "lambda_logo.png": "Lambda is a cloud computing platform provided by Amazon Web Services. It allows users to run code without provisioning or managing servers, helping to simplify the process of deploying scalable applications.",
        "aws_logo.png": "Amazon Web Services (AWS) is a secure cloud services platform, offering computing power, database storage, content delivery, and other functionality. It provides a wide range of infrastructure services, such as computing power, storage options, and content delivery.",
        "html_logo-1.png": "HTML is the standard markup language for documents designed to be displayed in a web browser. It describes the structure of web pages using markup.",
        "css_logo-2.png": "CSS is a style sheet language used for describing the presentation of a document written in HTML. It is designed to enable the separation of presentation and content, including layout, colors, and fonts.",
        "git_logo.png": "Git is a distributed version control system for tracking changes in source code during software development. It allows multiple developers to work on the same codebase and merge their changes.",
        "github_logo-1.png": "GitHub is a web-based platform for version control using Git. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.",
        "reges_logo-1.png": "Regular expressions (regex or regexp) are patterns used to match character combinations in strings. They are widely used for finding, replacing, and formatting text based on patterns.",
    };

    skillsList.forEach((item) => {
        item.addEventListener("mouseover", function () {
            const imgSrc = item.querySelector(".skills__img").getAttribute("src");
            const language = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
            if (descriptions[language]) {
                newParagraph.textContent = descriptions[language];
                newParagraph.style.opacity = "1";
                originalParagraph.style.opacity = "0";

                if (isFirstHover) {
                    originalParagraph.style.opacity = "0";
                    isFirstHover = false;
                }
            }
        });

        item.addEventListener("mouseout", function () {
            newParagraph.style.opacity = "0";
            originalParagraph.style.opacity = isFirstHover ? "1" : "0"; // Control whether to show the original paragraph or not
        });
    });
});


