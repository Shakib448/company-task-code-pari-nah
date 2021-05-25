import asyncHandler from "express-async-handler";
import KhojSchema from "../models/khojModel.js";

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khoj = asyncHandler(async (req, res) => {
  const { search, user } = req.body;

  const khoj = new KhojSchema({
    user: user._id,
    input_values: search,
  });
  const khojSave = await khoj.save();
  res.status(201).json(khojSave);

  await KhojSchema.findOneAndUpdate(
    {
      user: user._id,
    },
    {
      $push: { input_values: search },
    }
  );
});
