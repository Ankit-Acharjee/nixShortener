import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    originalUrl: {
      type: String,
      required: true,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,
        "Please provide a valid url",
      ],
    },
    shortenedUrl: {
      type: String,
      required: true,
    },
    analytics:[
      {
        time:{
          type: Date,
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.models.Url || mongoose.model("Url", urlSchema);

export default Url;
