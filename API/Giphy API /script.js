const APIKEY = "t9lJNxWDH9fnuqv6IrdIe1uVJuizsXBz";
const btn = document.getElementById("btnSearch");
const urlBase = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;

btn.addEventListener("click", ev => {
    ev.preventDefault();
    
    const userSearch = document.getElementById("search");
    const userSearchValue = userSearch.value;
    const url = urlBase + userSearchValue;

    console.log(url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(content => {
            if (content.data && content.data.length > 0) {
                const result = content.data[0];
                const fig = document.createElement('figure');
                const img = document.createElement('img');
                const caption = document.createElement('figcaption');
                
                img.src = result.images.downsized.url;
                img.alt = result.title;
                caption.textContent = result.title;

                fig.appendChild(img);
                fig.appendChild(caption);

                const out = document.querySelector(".out");
                // Clear previous result
                out.innerHTML = '';
                out.appendChild(fig);
            } else {
                throw new Error("No results , try another word.");
            }
        })
        .catch(err => {
            console.log(err);
            alert("An error occurred. Please try again.");
        });
});



