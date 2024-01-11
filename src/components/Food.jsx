import { data } from "../data/data";

const Food = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
            {data.map((food) => {
                return (
                    <div className="border rounded-xl pb-5 overflow-hidden hover:scale-[1.02] duration-200" key={food.id}>
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
    );
};

export default Food;
