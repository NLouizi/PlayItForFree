window.onload = () => {
    const games = document.getElementById("games");
    games.innerHTML = "";
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            try {
                const responseData = JSON.parse(this.responseText);
                for (let i = 0; i < 101; i++) {
                    let imag = "./assets/imgs/browser.png";
                    if (responseData[i].platform === "PC (Windows)") {
                        imag = "./assets/imgs/windows.png";
                    }
                    games.innerHTML += `
                        <div class="game">
                            <img src="${responseData[i].thumbnail}" class="preview" alt="${responseData[i].title}">
                            <div class="titleGame">
                                <h5>
                                    ${responseData[i].title}
                                </h5>
                                <img src="${imag}" alt="">
                            </div>
                            <p>${responseData[i].short_description}</p>
                        </div>
                    `;
                }
            } catch (error) {
                console.log('Error parsing response:', error);
            }
        }
    });
    xhr.open('GET', 'https://mmo-games.p.rapidapi.com/games?platform=all');
    xhr.setRequestHeader('x-rapidapi-key', '3465e39d57msh2bc3658af9cc507p11359djsnead8d527bedb');
    xhr.setRequestHeader('x-rapidapi-host', 'mmo-games.p.rapidapi.com');
    xhr.setRequestHeader('platform', 'all');

    xhr.send(data);
};
