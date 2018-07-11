const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    addedby: {type: Schema.Types.ObjectId, ref: 'User'},
	dateadded: { type: Date, default: Date.now }

});
module.exports = mongoose.model('inquiryContent', schema);
