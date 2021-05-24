import mongoose from "mongoose";

const khojSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    search: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Khoj = mongoose.model("Khoj", khojSchema);

export default Khoj;
