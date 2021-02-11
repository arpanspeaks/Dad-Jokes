const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button');

const addDadJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    const hr = document.createElement('hr');
    newLi.append(jokeText);
    newLi.append(hr);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const newJoke = await axios.get('https://icanhazdadjoke.com/', config);
        return newJoke.data.joke + ' 😂';
    } catch (e) {
        return 'No jokes available! Sorry 😢';
    }
}

button.addEventListener('click', addDadJoke);