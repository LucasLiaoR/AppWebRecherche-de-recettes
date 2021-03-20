const express = require('express');
const cors = require('cors');
const database = require('./config/database');

const app = express();


const SELECT_ALL_RECIPES_QUERY = 'SELECT * FROM recettes_bis';
const SELECT_ALL_USERS_QUERY = 'SELECT * FROM utilisateurs';
const SELECT_ALL_PROTEINES_QUERY = 'SELECT * FROM proteines';


database.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors());

app.get('/recipes', (req,res) => {
    database.query(SELECT_ALL_RECIPES_QUERY, (err, results) => {
        if (err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    });

});

app.get('/users', (req,res) => {
    database.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    });

});
app.get('/proteines', (req,res) => {
    database.query(SELECT_ALL_PROTEINES_QUERY, (err, results) => {
        if (err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    });

});

app.get('/addRecipe', (req,res) => {
    
})

app.listen(4000, () => {
    console.log("Running on port 4000");
})