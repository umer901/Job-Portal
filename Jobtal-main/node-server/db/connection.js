const mongoose = require('mongoose');

// const dbURL = 'mongodb+srv://user:wiQd44tSAZg9O24Q@cluster0.eknly6e.mongodb.net/JobPortal?retryWrites=true&w=majority';

// const dbURL = 'mongodb://user:wiQd44tSAZg9O24Q@ac-o9wltkc-shard-00-00.eknly6e.mongodb.net:27017,ac-o9wltkc-shard-00-01.eknly6e.mongodb.net:27017,ac-o9wltkc-shard-00-02.eknly6e.mongodb.net:27017/JobPortal?ssl=true&replicaSet=atlas-ro4oyr-shard-0&authSource=admin&retryWrites=true&w=majority';

// const dbURL  = 'mongodb+srv://muhammadhamza:hamza123@cluster0.ejy7buo.mongodb.net/jobtal?retryWrites=true&w=majority';

const dbURL  = 'mongodb://muhammadhamza:hamza123@ac-7eqpmyw-shard-00-00.ejy7buo.mongodb.net:27017,ac-7eqpmyw-shard-00-01.ejy7buo.mongodb.net:27017,ac-7eqpmyw-shard-00-02.ejy7buo.mongodb.net:27017/jobtal?ssl=true&replicaSet=atlas-5y798y-shard-0&authSource=admin&retryWrites=true&w=majority';

// const dbURL  = 'mongodb+srv://hamza:hamza123@cluster0.dsmhzsu.mongodb.net/test?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbURL,connectionParams)
    .then(()=> {
        console.info("Connected to DB")
    })
    .catch((e)=>{
        console.log("Error! Not Connected!",e)
    });