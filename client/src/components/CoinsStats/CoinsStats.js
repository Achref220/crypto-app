import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './CoinStats.css';
import Coin from '../Coin/Coin';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '../../redux/actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoinsStats = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
  }, []);
  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const isAuth = useSelector((state) => state.UserReducer.isAuth);
  useEffect(() => {
    const succnotify = () => {
      toast.info('You are logged in')
    }
    if (isAuth) {
      succnotify()
    }
  }, [isAuth]);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()));
    
    
  return (
    <div className="coin-app">
      <ToastContainer />
      <div className="coin-search">
        <h1 className="coin-text">CURRENCY</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
        )
      })}
    </div>
  );
}

export default CoinsStats;
