const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = apiResponse.data;
d
    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        cordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    console.log(name, avatar_url, bio, github_username);

    return res.json(dev);
})

module.exports = routes;