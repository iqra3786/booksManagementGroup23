const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;   

//..................................CreateReviewSchema..................................................................................//

const reviewSchema = new mongoose.Schema({
    bookId : {
        type: objectId,
        required: true,
        ref: "Book"
    },
    reviewedBy: {
        type: String,
        required: true,
        default: 'Guest'
    },
    reviewedAt: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model("review", reviewSchema);
