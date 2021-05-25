import mongoose from "mongoose";

const khojSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    input_values: [
      {
        type: String,
        trim: true,
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
