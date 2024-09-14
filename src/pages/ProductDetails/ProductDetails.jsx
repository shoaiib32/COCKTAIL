import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleCocktail } from '../../store/cocktailSlice';
import Loader from '../../components/Loader/Loader'; 
import { bagAction } from '../../store/bag';

const ProductDetails = () => {
  const [modifiedCocktail, setModifiedCocktail] = useState(null);

  const { loading, cocktail } = useSelector((state) => state.app);
  const { productDetailsId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail({ productDetailsId }));
  }, [dispatch, productDetailsId]);


  const handleAddToCart = (id) => {
    dispatch(bagAction.addToCart({ id }));
  };

  useEffect(() => {
    if (cocktail && cocktail.length > 0) {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
      } = cocktail[0];
      const newCocktail = {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strInstructions,
        ingredient1: strIngredient1,
        ingredient2: strIngredient2,
        ingredient3: strIngredient3,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [cocktail]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div>
      {modifiedCocktail && (
        <div className="product-details">
          <img src={modifiedCocktail.image} alt={modifiedCocktail.name} />

          <div className="right">
            <h1 className="name">{modifiedCocktail.name}</h1>
            <h1 className="light">HOW TO USE:-</h1>
            <p className="info">{modifiedCocktail.info}</p>
            <div className="ingre">
              <h1>Ingredients</h1>
              <ul>
                <li>{modifiedCocktail.ingredient1}</li>
                <li>{modifiedCocktail.ingredient2}</li>
                <li>{modifiedCocktail.ingredient3}</li>
              </ul>
            </div>
            <p className='inr'>₹ {modifiedCocktail.id}</p>
            <button onClick={()=>handleAddToCart(modifiedCocktail.id)}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
