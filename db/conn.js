const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://madhur:IHRXDy2h7XD1lRwK@cluster0.52fun.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

 

  
