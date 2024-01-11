import { categories } from "../data/data";

const Categories = () => {
    return (
        <div className="max-w-[1640px] mx-auto px-4 mb-10">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold py-10 text-orange-600 mb-10">
                Top Rated Menu Items
            </h1>
            <div className="lg:grid-cols-4 md:grid-cols-2 sm:grid gap-4">
                {categories.map((category) => {
                    return (
                        <div
                            key={category.id}
                            className="border flex flex-row justify-between items-center p-3 rounded-lg lg:mb-0 md:mb-0 sm:mb-0 mb-4"
                        >
                            <p className="font-bold text-lg">{category.name}</p>
                            <img
                                src={category.image}
                                className="max-h-[100px]"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
