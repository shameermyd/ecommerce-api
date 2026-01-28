require('dotenv').config();
const app = require("./src/app");
const {connectDB} = require("./src/config/database");

connectDB()
.then( () => {
    app.listen(process.env.PORT, ()=>{
        console.log(`running on port ${process.env.PORT}`);
    });
})
.catch( (err)=>{
    console.log("Error Connect to Server", err);
});