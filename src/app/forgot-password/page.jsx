"use client";

import { useState } from "react";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset email sent to:", email);
        // Add password reset logic here
    };

    return (
        <div>
            <div className="flex items-center justify-center bg-gray-100"
                style={{
                    backgroundImage: "url('/Assets/Authbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "1920px",
                    height: "120px",
                }}>

            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
