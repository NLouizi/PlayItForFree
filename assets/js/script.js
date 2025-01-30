window.onload = async () => {
    const games = document.getElementById("games");
    games.innerHTML = "";

    try {
        const response = await fetch('https://www.mmobomb.com/api1/games?platform=all');
        
        if (!response.ok) {
            console.log('Network response was not ok');
            return;
        }

        const data = await response.json();
        for(let i = 0; i < 101 ; i++) {
            let imag = "./assets/imgs/browser.png";
            if(data[i].platform === "PC (Windows)"){
                imag = "./assets/imgs/windows.png"
            }
            games.innerHTML += `
                <div class="game">
                    <img src="${data[i].thumbnail}" class="preview" alt="${data[i].title}">
                    <div class="titleGame">
                        <h5>
                            ${data[i].title}
                        </h5>
                        <img src="${imag}" alt="">
                    </div>
                    <p>${data[i].short_description}</p>
                </div>
            `;
        }
    } catch (error) {
        console.log('There was a problem with the fetch operation:', error);
    }
};
