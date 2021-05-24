import mongoose from "mongoose";

const khojSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    payload: [
      {
        input_values: {
          type: String,
        },
        default: Date,
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
