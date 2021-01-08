import React, { useEffect, useState } from "react";
import "./styles.css";
import StepsHeader from "./Stepsheader";
import ProductList from "./ProductList";
import { Product, OrderLocationData } from "./types";
import { fetchProducts, saveOrder } from "../../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSumary";
import Footer from "../../Components/Footer";
import { checkIsSelected } from "./Helpers";
import { toast } from 'react-toastify';


function Orders() {

    const [products, setProducts] = useState<Product[]>([]);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(() => toast.warning('Erro ao listar produtos'))
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload).then((response) => {
            toast.error(`Pedido enviado com sucesso! Nª ${response.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    )
}

export default Orders;