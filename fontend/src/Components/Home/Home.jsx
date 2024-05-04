import React from "react";

const Home = () => {
    return (
        <div className="flex justify-center items-center height overflow-hidden">
            <div className="max-w-6xl mx-auto my-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-1">
                        <h5 className="text-zinc-500 dark:text-zinc-300 uppercase mb-4">Testimonials</h5>
                        <h2 className="text-3xl font-bold mb-6">See What Our Customers Say</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec
                            tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices
                            dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia.
                        </p>
                        <p className="font-semibold">Ali Al Marzooqi</p>
                        <div className="flex items-center mb-2">
                            <div className="text-yellow-400">★★★★★</div>
                            <div className="text-zinc-400">★</div>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">- 2 Months Ago</p>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec
                                    tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices
                                    dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia.
                                </p>
                                <p className="font-semibold">Ali Al Marzooqi</p>
                                <div className="flex items-center mb-2">
                                    <div className="text-yellow-400">★★★★★</div>
                                    <div className="text-zinc-400">★</div>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">- 2 Months Ago</p>
                            </div>
                            <div className="p-6 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec
                                    tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices
                                    dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia.
                                </p>
                                <p className="font-semibold">Ali Al Marzooqi</p>
                                <div className="flex items-center mb-2">
                                    <div className="text-yellow-400">★★★★★</div>
                                    <div className="text-zinc-400">★</div>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">- 2 Months Ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Animated Blob */}
             <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

        </div>
    );
};

export default Home;
