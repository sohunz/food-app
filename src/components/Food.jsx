import { useState } from "react";
import { data } from "../data/data";

const Food = () => {

    const [foods, setFoods] = useState(data);

    // FilterType
    const filterType = (category) => {
        setFoods(data.filter((item) => item.category === category))
    }

    // Filter Price
    const filterPrice = (price) => {
        setFoods(data.filter((item) => item.price === price))
    }

    return (
        <>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold py-10 text-orange-600">
                Top Rated Menu Items
            </h1>
            <div className="lg:flex justify-between p-4">
                <div className="flex flex-col mb-3">
                    <p className="font-bold">Filter Type</p>
                    <ul className="flex gap-3 pt-3 flex-wrap">
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => setFoods(data)}>
                            All
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterType('burger')}>
                            Burgers
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterType('pizza')}>
                            Pizza
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterType('salad')}>
                            Salads
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterType('chicken')}>
                            Chicken
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col flex-wrap">
                    <p className="font-bold">Filter Price</p>
                    <ul className="flex gap-3 pt-3">
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterPrice('$')}>
                            $
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterPrice('$$')}>
                            $$
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterPrice('$$$')}>
                            $$$
                        </li>
                        <li className="cursor-pointer border rounded-full px-5 py-2 text-orange-600" onClick={() => filterPrice('$$$$')}>
                            $$$$
                        </li>
                    </ul>
                </div>
            </div>


            {/* display foods */}

            <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
                {foods.map((food) => {
                    return (
                        <div
                            className="border rounded-xl pb-5 overflow-hidden hover:scale-[1.02] duration-200"
                            key={food.id}
                        >
                            <img
                                src={food.image}
                                className="max-h-[160px] w-full object-cover"
                            />
                            <div className="flex flex-row justify-between p-3">
                                <p>{food.name}</p>
                                <p>{food.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Food;
