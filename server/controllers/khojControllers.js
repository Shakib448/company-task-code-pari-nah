import asyncHandler from "express-async-handler";
import KhojSchema from "../models/khojModel.js";

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khoj = asyncHandler(async (req, res) => {
  const { search, user } = req.body;

  const khoj = new KhojSchema({
    userId: user._id,
    input_values: search,
  });

  // const findKhoj = await KhojSchema.find({ userId: user._id });

  //   await KhojSchema.findOneAndUpdate(
  //     {
  //       userId: user._id,
  //     },
  //     {
  //       $push: { input_values: search },
  //     }
  //   );
  const khojSave = await khoj.save();
  res.status(201).json(khojSave);
});
