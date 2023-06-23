const express = require("express");
const router = express.Router(); // defines the router object, will serve for everything we need


router.get("/", (request, response) => {
    response.send("The best African country");
}); // basically sends our message onto the local host



module.exports = router;
// without this, we would not be able to import our files and give index.js access 