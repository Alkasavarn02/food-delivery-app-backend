const CustomerReviews = require("../../Schema/CustomerReviews");
const Restaurant = require("../../Schema/RestaurantSchema");
const User = require("../../Schema/UserSchema");

const CreateReviews = async(req,res) => {
    try {

            const { userId, restaurantId, reviewText } = req.body;
    
            // Check if user and restaurant exist
            const user = await User.findById(userId);
            const restaurant = await Restaurant.findById(restaurantId);
    
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
    
            // Create new review
            const newReview = await CustomerReviews.create({
                User: userId,
                restaurantId: restaurantId,
                reviewText: reviewText,
            });

            const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$push:{Customer:newReview._id}},{new:true}).populate("Customer")
    
            // Send response
            res.status(201).json({
                success: true,
                message: "Review created successfully!",
                data: updatedRestaurant,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "An error occurred while creating the review",
            });
        }
}

module.exports = CreateReviews