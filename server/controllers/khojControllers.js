import asyncHandler from "express-async-handler";
import Khoj from "../models/khojModel.js";

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khoj = asyncHandler(async (req, res) => {
  console.log(req.body);
});
