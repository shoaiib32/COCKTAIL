import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../../store/cocktailSlice";
import { MdCancelPresentation } from "react-icons/md";
import { bagAction } from "../../store/bag";


const Cart = () => {
  const dispatch = useDispatch();
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  
  const handleRemove = (id) => {
    dispatch(bagAction.removeFromBag({ id }));
  };
  

  const { cocktails } = useSelector((store) => store.app);
  const cartItems = useSelector((store) => store.bag);

  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails && cocktails.length > 0) {
      let newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strDrink } = item;
        return {
          id: Number(idDrink),
          info: strAlcoholic,
          image: strDrinkThumb,
          name: strDrink,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  
  const calculateSubtotal = () => {
    return modifiedCocktails.reduce((total, item) => {
      const quantity = cartItems[item.id] || 0;
      const itemTotal = item.id * quantity; 
      return total + itemTotal;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 200; 
  const total = subtotal + shippingFee;

  return (
    <div className="cartitems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {modifiedCocktails.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-format cartItems-format-main">
                <img src={e.image} alt={e.name} className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₹{e.id}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>₹{cartItems[e.id] * e.id}</p>
                <span className="remove" onClick={()=>handleRemove(e.id)}>
                  <MdCancelPresentation />
                </span>
              </div>
              <hr />
            </div>
          );
        }
        return null; 
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>{shippingFee}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{total}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
