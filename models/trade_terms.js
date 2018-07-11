const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const schema = new Schema({
    term: String,
    type: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    addedOn: {
        type: Date,
        default: Date.now
    }
});

schema.statics.getDeals = (callback) => {
    tradeTerms.find({}, callback);
};

const tradeTerms = mongoose.model('tradeTerms', schema);
module.exports = tradeTerms;