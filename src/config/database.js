const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// module.exports = mongoose.connect("mongodb://localhost/article");

module.exports = mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/articles-db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
