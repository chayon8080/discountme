import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#232323] text-white w-full" style={{ height: "360px" }}>
            <div className="container mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-5 gap-8 px-6 py-10">
                <div className="space-y-4">
                    <Image
                        src="/Assets/Logo.png"
                        alt="DiscountMe Logo"
                        width={234}
                        height={61}
                        className="mb-4"
                    />
                    <p className="opacity-50">Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.</p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Type your email address"
                            className="px-4 py-2 rounded-full w-full focus:outline-none text-white bg-[#232323] border border-slate-100"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 py-2 ml-2 rounded-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Account</h3>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:underline">My Account</a></li>
                        <li><a href="" className="hover:underline">Cart</a></li>
                        <li><a href="" className="hover:underline">Login/Register</a></li>
                        <li><a href="" className="hover:underline">Wishlist</a></li>
                        <li><a href="" className="hover:underline">Shop</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/temsofuse" className="hover:underline">Terms of Use</a></li>
                        <li><a href="" className="hover:underline">FAQ</a></li>
                        <li><a href="" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Download Our App</h3>
                    <div className="flex flex-row">
                        <div>
                            <Image
                                src="/Assets/QrCode.png"
                                alt="QR Code"
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Image
                                src="/Assets/GooglePlay.png"
                                alt="Google Play"
                                width={104}
                                height={30}
                            />
                            <Image
                                src="/Assets/AppStore.png"
                                alt="Apple Store"
                                width={104}
                                height={34}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
