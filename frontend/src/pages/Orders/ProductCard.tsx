import React from "react";
import { Product } from "./types";
import { formatPrice } from "./Helpers";

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void
    isSelected: boolean;
}

function ProductCards({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`} onClick={() => onSelectProduct(product)} >
            <h3 className="order card title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.description} />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>

        </div>
    )
}

export default ProductCards;