import React from "react"
import ProductCards from "./ProductCard"
import { Product } from "./types";
import { checkIsSelected } from "./Helpers";

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

function ProductList({products, onSelectProduct, selectedProducts} : Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCards 
                        key={product.id} 
                        product={product} 
                        onSelectProduct={onSelectProduct} 
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;