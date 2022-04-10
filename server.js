const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");
const {
    typeList,
    names,
    types,
    evolutionData,
} = require("./models/database.model");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const pokemonDbLoaded = [];

const removeUnwantedArrowText = (text) => {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "") {
            text[i] = " ";
        }
    }
    return text;
};

const findEvolutionTree = (pokemonId) => {
    for (let tree of evolutionData) {
        if (tree.includes(Number(pokemonId))) return tree;
    }
};

const createPokemonObject = async (id) => {
    try {
        // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
        // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

        const pokeDataAPI = axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const descriptionAPI = axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );

        //-- Once data is received, convert to json
        const pokeData = await Promise.all([pokeDataAPI, descriptionAPI]);
        const pokeDataStats = pokeData[0].data;
        const pokeDataDescription = pokeData[1].data;

        // -- Get description parts and remove unwanted arrow text
        // -- Then combine description parts into one
        const desciptionPart1 = removeUnwantedArrowText(
            pokeDataDescription.flavor_text_entries[10].flavor_text.split("")
        ).join("");
        const desciptionPart2 = removeUnwantedArrowText(
            pokeDataDescription.flavor_text_entries[11].flavor_text.split("")
        ).join("");
        const description = `${desciptionPart1} ${desciptionPart2}`;

        // -- Create pokemon object
        const pokemonObject = {
            id: id,
            image: `./images/pokemon_${id}.jpg`,
            name: names[id - 1],
            type: typeList[id - 1],
            description: description,
            hp: pokeDataStats.stats[0].base_stat,
            height: pokeDataStats.height,
            weight: pokeDataStats.weight,
            attack: pokeDataStats.stats[1].base_stat,
            defense: pokeDataStats.stats[2].base_stat,
            speed: pokeDataStats.stats[5].base_stat,
        };

        return pokemonObject;
    } catch (e) {
        console.log(e);
    }
};

(async () => {
    try {
        for (let i = 1; i < 152; i++) {
            const pokemon = await createPokemonObject(i);
            pokemonDbLoaded.push(pokemon);
        }
    } catch (e) {
        console.log(e);
    }
})();

//-- Route Handlers --//
const getPokemon = async (req, res) => {
    if (req.params.id < pokemonDbLoaded.length) {
        res.status(200).send(pokemonDbLoaded[req.params.id - 1]);
    } else {
        try {
            const pokemon = await createPokemonObject(req.params.id);
            res.status(200).send(pokemon);
        } catch (e) {
            console.log(e);
        }
    }
};

const getNames = (req, res) => {
    res.send(names);
};

const getTypeList = (req, res) => {
    res.status(200).send(typeList);
};

const getTypes = (req, res) => {
    res.status(200).send(types);
};

const getEvolutionTree = (req, res) => {
    const tree = findEvolutionTree(req.params.id);
    res.status(200).send(tree);
};

//-- Routes --//
app.get("/pokemon/:id", getPokemon);
app.get("/names", getNames);
app.get("/typeList", getTypeList);
app.get("/types", getTypes);
app.get("/evolveTree/:id", getEvolutionTree);

//-- Production Route --//
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

//-- Runs server --//
app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server runnning on port ${port}`);
});
