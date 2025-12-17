import React from "react";
import { Star, Heart } from "lucide-react";
import type { Product } from "../../data/dataPageProduct";
const CardProduct = React.memo(
  ({ product }: { product: Product;}) => {
    return (
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-eco-dark/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
        {/* Image Area Placeholder */}
        <div className="bg-eco-light/50 rounded-2xl h-48 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-eco-primary/10 transition-colors">
          <div className="transform group-hover:scale-110 transition-transform duration-500">
            <img src={product.imageIcon} alt="" />
          </div>
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-eco-primary bg-eco-primary/10 px-2 py-1 rounded-lg uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          <h3 className="font-bold text-eco-dark text-lg mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-eco-dark/60 mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
        </div>
      </div>
    );
  }
);

export default CardProduct;
