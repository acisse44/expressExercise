const express = require("express");
const router = express.Router(); // defines the router object, will serve for everything we need


router.get("/", (request, response) => {
    response.send("Alina is here");
});

// /routes/pakistan/alina
router.get("/alina", (request, response) => {
    console.log("THIS IS THE PAKISTAN ROUTE WITH ALINA");
    const object = { flag: "white", food: "bread" };
    const jsonObj = JSON.stringify(object);
    response.send(jsonObj);
});


module.exports = router;
// without this, we would not be able to import our files 