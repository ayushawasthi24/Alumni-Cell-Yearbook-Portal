const mongoose = require("mongoose");
const Auth = require("./authModel");

const userSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Auth,
    },

    name: {
        type: String,
        required: [true, "Name is Required"],
    },

    roll_no: {
        type: String,
        required: [true, "Roll Number is required"],
        unique: true,
    },

    academic_program: {
        type: String,
        required: [true, "Academic Program is required"],
    },

    department: {
        type: String,
        required: [true, "Department is required"],
    },

    contact_details: {
        type: String,
        required: [true, "Contact_Details is required"],
    },

    personal_email_id: {
        type: String,
        required: [true, "Department is required"],
    },

    current_company: {
        type: String,
    },

    designation: {
        type: String,
    },

    about: {
        type: String,
        required: true,
    },

    profile_img: {
        type: String,
        required: [true, "Profile_image is required"],
    }
});

module.exports("Users", userSchema);