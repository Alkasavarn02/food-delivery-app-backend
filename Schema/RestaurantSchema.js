const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        reviews:{
            type:Number,
            required:true
        },
        Image:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phoneNo:{
            type:String,
            required:true
        },
        website:{
            type:String,
            required:true
        },
        deliveryInformation:[
            {
                day:{
                    type:String,
                    required:true
                },
                timing:{
                    type:String,
                    required:true
                },
            }
        ],
        estimatedTime:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
        products:[
            {
                type:mongoose.Schema.ObjectId,
                ref:"Product"
            }
        ]

    }
)

module.exports = mongoose.model("Restaurant",RestaurantSchema);