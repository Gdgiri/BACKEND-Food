import FoodMenu from "../Models/cateringSchema.js";

// create

export const createFood = async (req, res) => {
  const { category, name, imgUrl, options } = req.body;

  try {
    // Find the existing food menu
    let foodMenu = await FoodMenu.findOne();

    // If no menu exists, create a new one
    if (!foodMenu) {
      foodMenu = new FoodMenu({ veg: [], nonVeg: [] });
    }

    // Create a new food item
    const newFoodItem = { name, imgUrl, options };

    // Add the new food item to the correct category
    if (category === "veg") {
      foodMenu.veg.push(newFoodItem);
    } else if (category === "nonveg") {
      foodMenu.nonVeg.push(newFoodItem); // Fixed the typo here
    } else {
      return res.status(400).json({ message: "Invalid category" });
    }

    // Save the updated menu
    await foodMenu.save();

    res.status(201).json({ message: "Food item added", result: foodMenu });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Food can't be created due to internal server error" });
  }
};

// get

export const getFood = async (req, res) => {
  try {
    const foodMenu = await FoodMenu.findOne();

    if (!foodMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res
      .status(200)
      .json({ message: "Food fetched successfully", result: foodMenu });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ messge: "fetch data was failed due to internal server error" });
  }
};
