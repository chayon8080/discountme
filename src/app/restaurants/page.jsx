"use client";

import React from "react";
import { useState } from 'react';
import Image from "next/image";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

// Sample Restaurant Data
const restaurantInfo = [
    {
        "id": 1,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 2,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-1.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 3,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-2.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 4,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 5,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-1.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 6,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-2.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 7,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 8,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-1.png",
        "iconUrl": "/Assets/Icon.png"
    },
    {
        "id": 9,
        "title": "Trattoria dall'Oste",
        "rating": 4.5,
        "address": "Via Luigi Alamanni, 3, 50123 Firenze",
        "description": "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.",
        "imageUrl": "/Assets/Rectangle 2-2.png",
        "iconUrl": "/Assets/Icon.png"
    }
];

export default function Restaurants() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Explore <span className='text-orange-500'>Top Restaurants</span>
                    <br />
                    <p className="text-sm font-normal font-sans text-gray-500">Check your city Near by Restaurant</p>
                </h2>
                <div className="relative hidden lg:block lg:ml-10">
                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full shadow-md border border-gray-300 w-96">
                        {/* Location Button */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-l-full hover:bg-orange-600"
                            >
                                <FaMapMarkerAlt className="mr-2" />
                                Location
                                <FiChevronDown className="ml-2" />
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    {locations.map((location, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                console.log(`Selected: ${location}`);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {location}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-grow pl-4 py-2 border-none focus:ring focus:ring-orange-300 focus:outline-none rounded-full"
                        />

                        {/* Search Button */}
                        <button className="bg-orange-500 text-white px-2 py-2 rounded-full hover:bg-orange-600 mr-12">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {restaurantInfo.map((restaurant) => (
                    <div key={restaurant.id} className="card-body border-slate-200 bg-slate-50 rounded-sm">
                        <Image
                            src={restaurant.imageUrl}
                            alt="Restaurant image"
                            width={400}
                            height={400}
                            className="rounded-lg mr-2"
                        />
                        <div className="flex items-center mt-2">
                            <Image
                                src={restaurant.iconUrl}
                                alt="Restaurant Icon"
                                width={15}
                                height={15}
                                className="rounded-lg mr-2"
                            />
                            <p>{restaurant.address}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h2 className="text-lg font-bold">{restaurant.title}</h2>
                            <p className="ml-2 font-bold">
                                <span className="text-yellow-400">★</span> ({restaurant.rating})
                            </p>
                        </div>
                        <p className="text-left text-sm mt-2">
                            {restaurant.description} <span className="font-bold">Read More...</span>
                        </p>
                        <div className="card-actions mt-4">
                            <button className="btn w-full bg-green-500 text-white py-2 rounded-lg">Visit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
