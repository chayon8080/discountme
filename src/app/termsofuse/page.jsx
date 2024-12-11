"use client";

const termsofuse = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
            <div className="bg-white w-[1520px] h-[1237px] p-10 rounded-lg shadow-lg">
                {/* About Us Section */}
                <div className="h-[339px] w-full">
                    <h2 className="text-3xl font-bold text-gray-800">Terms of use.</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Welcome to [Your Company Name]. Before using our logo design service, please carefully review our Terms and Conditions, as they govern the contractual relationship between you (the "Client") and [Your Company Name] (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.
                    </p>
                </div>

                {/* Scope of Service */}
                <div className="h-[329px] w-full">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <span className="text-gray-600 text-4xl font-bold mr-2">→</span>
                        Scope of Service
                    </h3>
                    <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2 pl-4">
                        <>
                            a. [Your Company Name] will provide custom logo design services to the Client based on the specifications provided by the Client. <br />
                        </>
                        <>
                            b. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.
                        </>
                    </ul>
                </div>

                {/* Copyright and Ownership */}
                <div className="h-[329px] w-full">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <span className="text-gray-600 text-4xl font-bold mr-2">→</span>
                        Copyright and Ownership
                    </h3>
                    <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2 pl-4">
                        <>
                            a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider. <br />
                        </>
                        <>
                            b. Final payment ensures that only the agreed design becomes the client’s property. Any previous ideas/concepts remain the property of the Service Provider unless any prior agreement has been made. <br />
                        </>
                        <>
                            c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default termsofuse;
