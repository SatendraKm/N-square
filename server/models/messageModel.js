import mongoose from  "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    created_for: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
      },
  },
  {
    timestamps: true,
  }
);


const Message = mongoose.model("Message", messageSchema);
export default Message;


