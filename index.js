import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const ctailName = response.data.drinks[0].strDrink;
        const ctailPic = response.data.drinks[0].strDrinkThumb;
        res.render("index.ejs", {
            cocktail: ctailName,
            photo: ctailPic
        });
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})