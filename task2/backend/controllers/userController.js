import userModel from "../models/userModel.js";

const createUserController = async (req, res) => {
    const {name, phoneNumber, email, postalCode, city, state} = req.body;

    if(!name || !phoneNumber || !email || !postalCode || !city || !state){
        return res.status(200).send({
            success: false,
            message: "Some fields are empty."
        });
    }
    else if(phoneNumber.length !== 10){
        return res.status(200).send({
            success: false,
            message: "PhoneNumber is not correct."
        });
    }
    else if(postalCode.length !== 6){
        return res.status(200).send({
            success: false,
            message: "Postal Code is not correct."
        });
    }

    try{

        const user = await new userModel({name, phoneNumber, email, postalCode, city, state});
        await user.save();
      
        res.status(200).send({
            success: true,
            message: "Successfully Added."
        });

    }
    catch(error){
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

const editUserController = async (req, res) => {

    const { id } = req.params;
    const {name, phoneNumber, email, postalCode, city, state} = req.body;

    if(!name || !phoneNumber || !email || !postalCode || !city || !state){
        return res.status(200).send({
            success: false,
            message: "Some fields are empty."
        });
    }
    else if(phoneNumber.length !== 10){
        return res.status(200).send({
            success: false,
            message: "PhoneNumber is not correct."
        });
    }
    else if(postalCode.length !== 6){
        return res.status(200).send({
            success: false,
            message: "Postal Code is not correct."
        });
    }

    try{

        const user = await userModel.findByIdAndUpdate(id, {name, phoneNumber, email, postalCode, city, state}, {new: true});
        await user.save();
        
        res.status(200).send({
            success: true,
            message: "Successfully Edited."
        });

    }
    catch(error){
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

const removeUserController = async (req, res) => {

    const { id } = req.params;

    try{

        await userModel.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: "Successfully Deleted."
        });
    }
    catch(error){
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

const getUsersController = async (req, res) => {

    try{
        const users = await userModel.find({});

        res.status(200).send({
            success: true,
            message: "Successfully Deleted.",
            users
        });
    }
    catch(error){
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

export {createUserController, editUserController, removeUserController, getUsersController};
