const express = require('express');
const app = express();

const{mongoose} = require('./db/mongoose');


const bodyParser = require('body-parser');

//load in the mongoose models
const{ List, Task} = require('./db/models');

//load middleware
app.use(bodyParser.json());

/*ROUTE HANDLERS*/  

/*LIST ROUTES*/

/**
 * GET/lists
 * Purpose: Get all lists
 */
app.get('/lists', (req, res) => {
    //we want to return an array of the lists in the database
    List.find({}).then((lists) => {
        res.send(lists);
    });
})

/**
 * POST/lists
 * Purpose: Create a list
 */
app.post('/lists', (req, res) => {
    //we want to create a new list and return the new list document back to the user(which includes id)
    //the list information (fields) will be passed in vai JSON request body
    let title = req.body.title;

    let newList = new List({
        title
    });

    newList.save().then((listDoc) => {
        //The full list is returned
        res.send(listDoc);
    });

});

/**
 * PATH /lists/:id
 * Purpose: Update a specified list
 */
app.patch('/lists/:id', (req, res) => {
    //we want to update the specified list with new values spcified in the JSON of the request
}); 

/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete('/lists/:id', (req, res) => {
    //we want to delete the specified list (doucument with ID in the URL)
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})