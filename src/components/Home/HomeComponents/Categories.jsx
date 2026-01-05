import { ChevronRight } from 'lucide-react';
import Loading from '../../loading/Loading';
import useCategory from '../../../hooks/useCategory';

const Categories = () => {
   
    const {isLoading,categories} = useCategory()

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="py-20 bg-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-3">
                        Curated Collections
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter mb-4">
                        Shop by Category
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
                        Explore our wide range of products across different categories, designed for your lifestyle.
                    </p>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories?.map((category) => (
                        <div
                            key={category._id || category.id}
                            className="group cursor-pointer"
                        >

                            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-bg-secondary border border-border-color transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-2">
                                <img
                                    src={category.photo}
                                    alt={category.category}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                

                                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                                    <div className="bg-white text-accent p-2 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                        <ChevronRight size={20} strokeWidth={3} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 text-center px-2">
                                <h3 className="text-sm font-black text-text-main uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                                    {category.category}
                                </h3>
                                <p className="text-[10px] text-text-muted font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    BROWSE ITEMS
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;