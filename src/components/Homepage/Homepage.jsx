"use client";
import Image from 'next/image'
import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi';
import FoodCard from "@/components/FoodCard/FoodCard"
export const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
  const cards = [
    { src: "/Assets/box-4.png", title: "Discount", details: "Every week new sales" },
    { src: "/Assets/delivery-truck.png", title: "Free Delivery", details: "100% free to all orders" },
    { src: "/Assets/24-hours.png", title: "Great Support 24/7", details: "We care your expriences" },
    { src: "/Assets/shield.png", title: "Secure payment", details: "100% secure payment method" },
  ];
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
    }
  ];
  return (
    <div className="bg-gray-100 font-sans w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left w-[849px]">
            <h1 className="text-4xl font-bold text-gray-800">
              Good <span className="text-orange-500">food</span>, great <br /> memories
            </h1>
            <p className="text-gray-600 mt-4 w-[821px]">
              Enable diners to customize their booking by requesting a specific table location or view.
            </p>
            {/* Search Location Form */}
            <div className="relative hidden lg:block lg:ml-10">
              {/* Search Bar */}
              <div className="flex items-center bg-white rounded-full shadow-md border border-gray-300 w-96">
                {/* Location Button */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-l-full hover:bg-green-600"
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
                <button className="bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600 mr-12">
                  <FaSearch />
                </button>
              </div>
            </div>


          </div>
          {/* Hero Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/Assets/img1.png"
              alt="Coffee shop"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* cards */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-[22%] flex flex-col md:flex-row items-center">
              {/* Image Section */}
              <div className="flex items-center justify-center w-[41px] h-[41px] lg:ml-4">
                <Image
                  src={card.src}
                  alt={`Image for ${card.title}`}
                  width={41}
                  height={41}
                  className="rounded-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="p-4 flex flex-col w-full md:w-2/3 items-center md:items-start">
                <h3 className="text-lg font-bold text-gray-800 text-center md:text-left">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2 text-center md:text-left">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Explore <span className='text-orange-500'>Top Restaurants</span>
              <br />
              <p className="text-sm font-normal font-sans text-gray-500">Check your city Near by Restaurant</p>
            </h2>
            <a href="/restaurants" className="text-gray-500 hover:underline">See All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {restaurantInfo.map((restaurant) => (
              <div key={restaurant.id}>
                <div className="card-body border-slate-200 bg-slate-50 rounded-sm">
                  <Image
                    src={restaurant.imageUrl}
                    alt="Restaurant image"
                    width={400}
                    height={400}
                    className="rounded-lg mr-2"
                  />
                  <div className="flex items-center">
                    <Image
                      src={restaurant.iconUrl}
                      alt="Restaurant Icon"
                      width={15}
                      height={15}
                      className="rounded-lg mr-2"
                    />
                    <p>{restaurant.address}</p>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="card-title">{restaurant.title}</h2>
                    <p className="ml-2 font-bold">
                      <span className="text-yellow-400">★</span> ({restaurant.rating})
                    </p>
                  </div>
                  <button className="text-left">
                    {restaurant.description} <span className="font-bold">Read More...</span>
                  </button>
                  <div className="card-actions">
                    <button className="btn w-full bg-green-500">Visit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <FoodCard></FoodCard>
      </section>

    </div>
  )
}
