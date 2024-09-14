import React, { useEffect, useState } from 'react';
import './Items.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktail } from '../../store/cocktailSlice';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'; 

const Items = () => {

  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  const { loading,cocktails } = useSelector((store) => store.app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails && cocktails.length > 0) {
      let newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strDrink } = item;
        return {
          id: idDrink,
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

  return (
    <>
      {loading ? ( 
        <Loader />
      ) : (
        <div className="container">
          {modifiedCocktails.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/productDetails/${item.id}`} className="item">
                  <img src={item.image} alt="" />
                  <div className="details">
                    <h4>{item.info}</h4>
                    <h1>{item.name}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Items;

