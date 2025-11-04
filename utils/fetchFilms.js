// LEER / GET
const getFilm = async (apikey= "", Title= "") => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${Title}`);
    let products = await response.json();

    if(products) 
        return products;
    else 
        throw new Error(products.Error || "Película no encontrada");
};

// AÑADIR / POST
const postFilm = async (newFilm, apikey="") => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&`, {
        method: "POST",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(newFilm)
    });
    let answer = await response.json();
    return answer
};

const id = {
    "id": 123
}

module.exports = {
    getFilm,
    postFilm
};