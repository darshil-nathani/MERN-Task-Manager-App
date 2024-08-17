const User = require('../model/user.model');
const {createUserSchema } = require('../validations/user.validation');


const createUser = async(req,res) => {
    try{
        const user = req.body;
        const validationError = await createUserSchema.validateAsync(user);
            if(validationError){
                return res.send(validationError);
            }

        const newUser = new User(user);
        await newUser.save();
        res.status(200).send(newUser);
    }
    catch(e){
        console.log("not Create User");
        res.status(400).json({message : e.message});
        
    }
}

const getUser = async(req,res) => {
    try{
        const users = await User.find({});
        res.status(400).json(users);
    }
    catch(err){
        console.log("not found user");
        res.status(400).send(err);
    }
};


module.exports = {createUser , getUser };