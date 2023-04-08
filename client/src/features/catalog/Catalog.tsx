import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";
import { useEffect, useState } from "react";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    // adding empty array as dependency, will allow it to execute only once

    // function addProduct() {
    //     setProducts(prevState =>
    //         [...prevState, {
    //             id: prevState.length + 101,
    //             name: "Product " + (prevState.length + 1),
    //             price: (prevState.length * 100) + 100,
    //             brand: "some brand",
    //             description: "some description",
    //             pictureUrl: "http://picsum.photos/200"
    //         }]
    //     )
    // }
    return (
        <>
            <ProductList products={products} />
            {/* <Button variant="contained" onClick={addProduct}>Add Product</Button> */}
        </>
    )
}