import React from 'react'

const page = () => {
    return (
        <main className="bg-purple-100 min-h-screen py-10">
            <section className="px-[10%]">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                <p className="text-center text-gray-700 mb-10">
                    We'd love to hear from you. Fill out the form or reach us through the info below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <form
                        action=""
                        className="w-full flex flex-col justify-center gap-5 p-8 border-4 border-black rounded-2xl bg-white shadow-lg"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="username" className="mb-1 font-medium">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="tel" className="mb-1 font-medium">
                                Phone Number:
                            </label>
                            <input
                                type="tel"
                                id="tel"
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-1 font-medium">
                                Your Message:
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your query here..."
                                className="border border-gray-300 p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition"
                        >
                            Submit
                        </button>
                    </form>

                   
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-xl font-bold mb-2">Reach Us</h2>
                            <p className="text-gray-700">📍 123 Main Street, Ahemdabad, India</p>
                            <p className="text-gray-700">📞 +91 9876543210</p>
                            <p className="text-gray-700">📧 contact@example.com</p>
                        </div>

                        
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <div className="bg-gray-300 w-full h-48 flex items-center justify-center text-gray-600">
                                Google Map Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default page
