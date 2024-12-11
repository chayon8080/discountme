"use client";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div>
            <div className="flex items-center justify-center bg-gray-100 mt-4"
                style={{
                    backgroundImage: "url('/Assets/Authbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "1890px",
                    height: "219px",
                }}>

            </div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        {/* Email Input */}
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

                        {/* Password Input with Eye Icon */}
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <Link href="/forgot-password" className="text-sm text-gray-500 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Log In Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-6 text-sm text-gray-600 text-center">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-black hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
