import Image from "next/image"

const page = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }} className="p-10 flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl font-bold text-gray-600">Podcast</h1>
                    <p>Quis malesuada vestibulum augue non dui leo purus aliquet a semper risus nec placerat libero tempor interdum faucibus.</p>
                    <div className="flex flex-col gap-5">
                        <p>Subscribe On:</p>
                        <span className="flex flex-row gap-5">
                            <p>Apple Podcasts</p>
                            <p>Spotify</p>
                            <p>Google Podcasts</p>
                        </span>

                    </div>
                    <p>New weekly episodes will be released on Monday & Thursday.</p>
                </div>
                <Image style={{ width: '100%' }} src="/slider/podcast_1.jpg" alt="no image" width={500} height={500} />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-500 pb-5">Latest Episode</h1>
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-4">
                        <p>Weekly shows to listen to with earbuds, headphones and more</p>
                        <Image style={{ width: '100%' }} src="/slider/podcast_2.jpg" alt="No image" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-7">
                        <h1 className="text-3xl font-bold text-gray-600">Work from Home: The Future</h1>
                        <p>
                            Purus convallis nunc quam turpis ultrices gravida consectetur id
                            imperdiet nibh feugiat netus ut ultricies gravida leo feugiat porttitor
                            venenatis proin ut lectus et aliquam leo amet proin erat congue montes, aliquam.
                        </p>
                        <span className="flex flex-row gap-10">
                            <p>Ethan H.</p>
                            <p>January 29</p>
                        </span>
                        <button type="button" className="hover:bg-blue-600 hover:text-white py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-indigo-500 bg-white text-sky-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none font-bold">
                            Listen now
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-4">
                    <Image src="/slider/podcast_6.jpg" alt="No image" width={500} height={500}/>
                    <div className="flex flex-col items-start justify-center gap-7">
                        <h1 className="text-3xl font-bold text-gray-600">Glitchy Light</h1>
                        <p>
                            Purus convallis nunc quam turpis ultrices gravida consectetur id
                            imperdiet nibh feugiat netus ut ultricies gravida leo feugiat porttitor
                            venenatis proin ut lectus et aliquam leo amet proin erat congue montes, aliquam.
                        </p>
                        <span className="flex flex-row gap-10">
                            <p>Ethan H.</p>
                            <p>January 29</p>
                        </span>
                        <button type="button" className="hover:bg-blue-600 hover:text-white py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-indigo-500 bg-white text-sky-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none font-bold">
                            Listen now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Image src="/slider/podcast_7.jpg" alt="No image" width={500} height={500}/>
                    <div className="flex flex-col items-start justify-center gap-7">
                        <h1 className="text-3xl font-bold text-gray-600">Powerup Games</h1>
                        <p>
                            Purus convallis nunc quam turpis ultrices gravida consectetur id
                            imperdiet nibh feugiat netus ut ultricies gravida leo feugiat porttitor
                            venenatis proin ut lectus et aliquam leo amet proin erat congue montes, aliquam.
                        </p>
                        <span className="flex flex-row gap-10">
                            <p>Ethan H.</p>
                            <p>January 29</p>
                        </span>
                        <button type="button" className="hover:bg-blue-600 hover:text-white py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-indigo-500 bg-white text-sky-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none font-bold">
                            Listen now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Image src="/slider/podcast_8.jpg" alt="No image" width={500} height={500}/>
                    <div className="flex flex-col items-start justify-center gap-7">
                        <h1 className="text-3xl font-bold text-gray-600">Tech 4 Life</h1>
                        <p>
                            Purus convallis nunc quam turpis ultrices gravida consectetur id
                            imperdiet nibh feugiat netus ut ultricies gravida leo feugiat porttitor
                            venenatis proin ut lectus et aliquam leo amet proin erat congue montes, aliquam.
                        </p>
                        <span className="flex flex-row gap-10">
                            <p>Ethan H.</p>
                            <p>January 29</p>
                        </span>
                        <button type="button" className="hover:bg-blue-600 hover:text-white py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-indigo-500 bg-white text-sky-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none font-bold">
                            Listen now
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-gray-500">Sign up for Newsletter</h1>
                    <p>Maecenas potenti ultrices, turpis eget turpis gravida.</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default page