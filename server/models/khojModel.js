import mongoose from "mongoose";

const khojSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    input_values: [
      {
        type: String,
        trim: true,
        default: Date.now,
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
