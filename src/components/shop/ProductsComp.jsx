import axios from "axios";
import { useEffect, useState } from "react";

const ProductsComp = () => {
    const [products, setProducts] = useState([]);
    const fetchApi = async () => {
      const res = await axios.get("http://localhost:3000/data");
      const data = await res.data;
      setProducts(data);
    };
    useEffect(() => {
      fetchApi();
    }, []);
  return (
    <div>
        <div className="product_box">
        {products.map((product) => (
          <div className="data_card" key={product.id}>
            <img src={product.image} alt="" />
            <div className="data_card__body">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>Rp {product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsComp