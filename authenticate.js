function generateRandomString() {
    const rand = Math.floor(Math.random() * 10);
    let randStr = '';

    for (let i = 0; i < 20 + rand; i++) {
        randStr += String.fromCharCode(33 + Math.floor(Math.random() * 94));
    }

    return randStr;
}

window.onload = () => {
    const loginLink = document.getElementById("login");
    const loginHref = "//discordapp.com/api/oauth2/authorize?client_id=568608799678791681&redirect_uri=https%3A%2F%2Flocalhost%3A8080&response_type=code&scope=identify";

    loginLink.setAttribute("href", loginHref);

    const fragment = new URLSearchParams(window.location.hash.slice(1));

    if (fragment.has('access_token')) {
        const urlState = fragment.get('state');
        const stateParameter = localStorage.getItem('stateParameter');
        if (stateParameter !== atob(decodeURIComponent(urlState))) {
            return console.log('You may have been clickjacked!');
        }
        
        const accessToken = fragment.get("access_token");
        const tokenType = fragment.get("token_type");

        fetch('https://discordapp.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(response => {
                const { username, discriminator } = response;
                document.getElementById('info').innerText += ` ${username}#${discriminator}`;
            })
            .catch(console.error);

    }
    else {
        // generate and store the string
        const randStr = generateRandomString();
        localStorage.setItem('stateParameter', randStr);

        loginLink.href += `&state=${btoa(randStr)}`;
        loginLink.style.display = 'block';
    }
    
}