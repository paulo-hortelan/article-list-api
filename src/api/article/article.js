const restful = require("node-restful");
const mongoose = restful.mongoose;

const articleSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = restful.model("Article", articleSchema);
