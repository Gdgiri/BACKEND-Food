import mongoose from "mongoose";

const foodMenuSchema = new mongoose.Schema({
  veg: [
    {
      name: String,
      imgUrl: String,
      options: [
        {
          label: String,
          price: Number,
        },
      ],
    },
  ],
  nonVeg: [
    {
      name: String,
      imgUrl: String,
      options: [
        {
          label: String,
          price: Number,
        },
      ],
    },
  ],
});

const FoodMenu = mongoose.model("FoodMenu", foodMenuSchema);
export default FoodMenu;
