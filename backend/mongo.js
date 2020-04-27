const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect("mongodb://localhost:27017/employee",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("mongoDb is connected");
})

.catch((err)=>{
    console.log('Error is occured '+err)
})

    mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
