const express = require("express");
const router = express.Router(); // defines the router object, will serve for everything we need

router.get("/", (request, response) => {
    response.send("Cleopatra lives here");
});


module.exports = router;
// without this, we would not be able to import our files 