import mongoose from 'mongoose';
const schema = mongoose.Schema({
  dislikes: Number,
  comments: Number,
  retweets: Number,
  tuit: String,
  likes: Number,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;