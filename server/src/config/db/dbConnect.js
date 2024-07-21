const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/tracker";

const dbConnect = async () => {
  try {
    await mongoose.connect(URL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
