"use client";

const CouponCard = ({ price, title, description }) => {
    return (
        <div className="card w-[1519px] h-[462px] md:w-[800px] sm:w-[90%] bg-white shadow-lg border-none rounded-lg relative overflow-hidden">
            {/* Left Circle Cutout */}
            <div className="absolute w-[90px] h-[90px] bg-[#F8FAFC] -left-[45px] top-1/2 transform -translate-y-1/2 rounded-full shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),_inset_-4px_-4px_10px_rgba(255,255,255,0.8)]"></div>

{/* Right Circle Cutout */}
<div className="absolute w-[90px] h-[90px] bg-[#F8FAFC] -right-[45px] top-1/2 transform -translate-y-1/2 rounded-full shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),_inset_-4px_-4px_10px_rgba(255,255,255,0.8)]"></div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-6">
                {/* Price Section */}
                <div className="text-center w-[330px] h-[230px] sm:ml-20">
                    <p className="text-lg text-green-600 font-bold">Price</p>
                    <p className="text-3xl font-bold text-orange-500">${price}</p>
                </div>

                {/* Divider */}
                <div className="hidden h-[559px] sm:block border-l-2 border-dashed border-gray-300"></div>

                {/* Details Section */}
                <div className="text-center w-[330px] h-[230px] lg:ml-20 sm:text-left mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Coupon = () => {
    return (
        <div className="mb-6">
            <h1 className="bg-gray-100 text-lg font-bold">Coupon Cards</h1>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="space-y-6">
                    {/* Card 1: Single Discount */}
                    <CouponCard
                        price="10.99"
                        title="Single Discount"
                        description="Customer takes 6 discounts"
                    />

                    {/* Card 2: Unlimited Discount */}
                    <CouponCard
                        price="34.99"
                        title="Unlimited Discount"
                        description="Customer gets unlimited discounts in one month"
                    />
                </div>
            </div>
        </div>
    );
};

export default Coupon;
