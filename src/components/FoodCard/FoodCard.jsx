"use client";
import React from "react";
import Image from "next/image";

const FoodCard = () => {
    // Local JSON Data
    const foodData = [
        {
            id: 1,
            title: "SkatSkateboard Shoe",
            imageUrl: "/Assets/food1.png",
            price: "$125",
        },
        {
            id: 2,
            title: "SkaSkateboard Shoee",
            imageUrl: "/Assets/food2.png",
            price: "$125",
        },
        {
            id: 3,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food3.png",
            price: "$25",
        },
        {
            id: 4,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food4.png",
            price: "$125",
        },
        {
            id: 5,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food5.png",
            price: "$25",
        },
        {
            id: 6,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food6.png",
            price: "$125",
        },
        {
            id: 7,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food1.png",
            price: "$25",
        },
        {
            id: 8,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food2.png",
            price: "$125",
        },
        {
            id: 9,
            title: "Skateboard Shoe",
            imageUrl: "/Assets/food3.png",
            price: "$125",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 rounded-3xl ">
            {foodData.map((foodItem) => (
                <div
                    key={foodItem.id}
                    className="overflow-hidden"
                >
                    <Image
                        src={foodItem.imageUrl}
                        alt={foodItem.title}
                        width={500}
                        height={295}
                        className="w-full h-auto px-4"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800">{foodItem.title}</h2>
                        <p className="text-gray-800 font-semibold mt-2">{foodItem.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodCard;
