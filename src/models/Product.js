import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    description: String,
    status: {
      type: Boolean,
      enum: [0, 1],
      default: 1,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// export const Product = mongoose.model("Product", productSchema);

export default mongoose.model("Product", productSchema);
