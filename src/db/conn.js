const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://raspreetdb:dbpreetsingh@cluster0.lh13d.mongodb.net/raspreetportfolio?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.log(err);
})