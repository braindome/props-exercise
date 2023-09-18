import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ParentComponent = () => {
  const [bankMoney, setBankMoney] = useState(1000);

  const handleBuyToy = (toyPrice) => {
    setBankMoney(prevBankMoney => prevBankMoney - toyPrice);
  };

  return (
    <div>
      <h1>Dad</h1>
      <h2>Bank Account: ${bankMoney}</h2>
      <ToyComponent toyName="Lego" priceTag="$20" onBuy={handleBuyToy} />
      <ToyComponent toyName="Transformers" priceTag="$45" onBuy={handleBuyToy} />
    </div>
  );
}


const ToyComponent = ({ toyName, priceTag, onBuy }) => {
  const handleBuyClick = () => {
    const toyPrice = parseInt(priceTag.slice(1), 10);
    onBuy(toyPrice);
  };

  return (
    <div className='Item'>
      <h2>{toyName}</h2>
      <h3>{priceTag}</h3>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}


function App() {

  return (
    <div className='App'>
      <ParentComponent />

    </div>
  )
}

export default App
