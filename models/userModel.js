const mongoose = require("mongoose");
mongoose.set("strictQuery",true)
const geoLocationSchema = new mongoose.Schema({
    type: { type: String, default: 'Point'},
    coordinates: {
        type: [Number],
        index: { type: '2dsphere', sparse: false },
    }
});

const userSchema = new mongoose.Schema({
    golfCourseName: String,
    golfCourseLocation: geoLocationSchema,
}, {
    timestamps: true
});
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
