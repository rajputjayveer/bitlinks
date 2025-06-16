import React from 'react';
import Image from "next/image";

const page = () => {
    return (
        <main className=' bg-purple-200 '>
            <section>
                <div className=' flex flex-col justify-center items-center pt-16'>
                    <h1 className=' font-bold text-center text-2xl'>About us</h1>
                    <p className='px-52 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit assumenda, eos, sit sint dolorum totam et odit quam itaque qui architecto similique? Unde optio, magni veniam officiis exercitationem sit accusamus rem asperiores natus, fuga numquam amet, saepe ab corrupti voluptates provident culpa? Autem deserunt in sapiente aut pariatur cum obcaecati praesentium laudantium, alias odit?
                    </p>
                </div>

                <section className="py-10">
                    <h2 className="text-2xl font-bold text-center mb-6">Meet Our Team</h2>
                    <div className="flex justify-center gap-10 flex-wrap">
                        <div className="bg-purple-100 rounded-lg p-4 w-64 shadow-lg">
                            <Image className="rounded-full mx-auto w-24 h-24" alt="an Image of a vector" src={"/profile.avif"}  height={24} width={24}  />
                            <h3 className="text-xl font-semibold text-center mt-4">Jayveer</h3>
                            <p className="text-center text-sm text-gray-600">Fullstack Developer</p>
                        </div>
                        <div className="bg-purple-100 rounded-lg p-4 w-64 shadow-lg">
                             <Image className="rounded-full mx-auto w-24 h-24" alt="an Image of a vector" src={"/profile.avif"}  height={24} width={24}  />
                            <h3 className="text-xl font-semibold text-center mt-4">Dhruvil</h3>
                            <p className="text-center text-sm text-gray-600">Software Developer</p>
                        </div>
                        <div className="bg-purple-100 rounded-lg p-4 w-64 shadow-lg">
                             <Image className="rounded-full mx-auto w-24 h-24" alt="an Image of a vector" src={"/profile.avif"}  height={24} width={24}  />
                            <h3 className="text-xl font-semibold text-center mt-4">Prince</h3>
                            <p className="text-center text-sm text-gray-600">Marketing Head</p>
                        </div>
                    </div>
                </section>

                <section className="py-10">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                        <p>To empower users through simple, effective web solutions.</p>
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                        <p>To become the leading platform for intuitive digital experiences.</p>
                    </div>
                </section>
            </section>


        </main>
    )
}

export default page
