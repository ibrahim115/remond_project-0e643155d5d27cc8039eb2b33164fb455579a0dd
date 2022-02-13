const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  // user reference
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    required:true
  },
  name: {
    type: String,
  },
  avatar: {
    type: String
  },
  likes: [
    {
      // relation/reference
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String,
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
});

module.exports = Post = mongoose.model('post', PostSchema);