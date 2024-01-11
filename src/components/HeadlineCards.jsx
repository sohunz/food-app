const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-5">
                    <div>
                        <p className="font-bold text-2xl">
                            Sun's Out, BOGO's Out
                        </p>
                        <p>Through 8/26</p>
                    </div>
                    <button className="border-white bg-white text-black w-[130px] rounded-full">
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-5">
                    <div>
                        <p className="font-bold text-2xl">
                            New Restaurants
                        </p>
                        <p>Add Daily</p>
                    </div>
                    <button className="border-white bg-white text-black w-[130px] rounded-full">
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-5">
                    <div>
                        <p className="font-bold text-2xl">
                            We Deliver Desserts
                        </p>
                        <p>Tasty Treats</p>
                    </div>
                    <button className="border-white bg-white text-black w-[130px] rounded-full">
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/970108/pexels-photo-970108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
        </div>
    );
};

export default HeadlineCards;
