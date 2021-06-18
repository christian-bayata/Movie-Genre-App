const express = require('express');
const router = express.Router();

//Movie genre array
const genres = [
    {id: 1, name: "Action"},
    {id: 2, name: "Romance"},
    {id: 3, name: "Sci-Fi"},
    {id: 4, name: "Epic"}
];

//get all genres
router.get('/', (req, res) => {
    res.send(genres);
});

//get genres by id
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    //search for the genre
    //if not found, send a 404 error
    //else send it as a response
    var findGenre = genres.find((genre) => genre.id === parseInt(ID))

    if(!findGenre) {
        res.status(404).send("The genre with this ID cannot be found")
        return;
    }

    res.send(findGenre);
});

//post genres
router.post("/", (req, res) => {
    var NAME = req.body.name 
    //Input authetication
    if(!NAME || NAME.length < 3) return res.status(400).send("Please input name or make the charater of name be more than 3");
    
    var postGenre = {
        name: NAME,
        id: genres.length + 1
    };
    
    genres.push(postGenre);
    res.send(postGenre);
})

//Update genres by id
router.put("/:id", (req, res) => {
    //search for the genre
    //if not found, send a 404 status
    var ID = req.params.id;
    var findGenre = genres.find((genre) => genre.id === parseInt(ID))

    if(!findGenre) {
        res.status(404).send("The genre with this ID cannot be found")
        return;
    }
    //validate the input
    var NAME = req.body.name 
    //Input authetication
    if(!NAME || NAME.length < 3) return res.status(400).send("Please input name or make the charater of name be more than 3")
    //Finally update the course
    findGenre.name = NAME;
    res.send(findGenre);
})
//Delete genres by id
//search for the genre
    //if not found, send a 404 status
    router.delete("/:id", (req, res) => {
    var ID = req.params.id;
    var findGenre = genres.find((genre) => genre.id === parseInt(ID))

    if(!findGenre) {
        res.status(404).send("The genre with this ID cannot be found")
        return;
    };
    //Delete a genre
    var genreIndex = genres.indexOf(findGenre);
    genres.splice(genreIndex, 1);

    res.send(findGenre)
    })
    

module.exports = router;