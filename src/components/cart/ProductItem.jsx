import { useEffect, useState } from "react";
import "../../SASS/cart/Cart.scss";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const handleDecrement = (id) => {
    setProducts((products) =>
      products.map((item) =>
        id == item.id
          ? { ...item, count: item.count - (item.count > 1 ? 1 : 0) }
          : item
      )
    );
  };
  const hadleIncrement = (id) => {
    setProducts((products) =>
      products.map((item) =>
        id == item.id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const hadleDelete = (id) => {
    setProducts(products=>
        products.filter((pr) =>
        pr.id !== id ? {...pr, pr} : '')
        );
    };
    useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(products))
})

  return (
    <div>
      {products.map((product) => (
        <div className="product_card" key={product.id}>
          <div className="product_img">
            <img src={product.image} alt="" />
          </div>
          <h2>{product.name}</h2>
          <h4>Rp {product.price}</h4>
          <div className="btn_box">
            <button onClick={() => handleDecrement(product.id)}>-</button>
            <p>{product.count}</p>
            <button onClick={() => hadleIncrement(product.id)}>+</button>
          </div>
          <h4>Rp {product.price * product.count}.00</h4>
          <button onClick={() => hadleDelete(product.id)}>del</button>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
