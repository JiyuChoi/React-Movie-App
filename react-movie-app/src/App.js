import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState();
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSelect = (event) => {
    setCurrency(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ?
        (<strong>Loading...</strong>) :
        (<div>
          <select value={currency} onChange={onSelect}>
            <option>Select currency</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <div>
            <input type="text" placeholder="Write value" onChange={onChange} />
            <h3>{currency ? value / currency : 0}</h3>
          </div>
        </div>)
      }


    </div>
  );
}

export default App;
