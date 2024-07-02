import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { getData } from './fakeApi';

function App() {
  const [products, setProducts] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    getApiData();
  }, [])

  async function getApiData() {
    // in real life this would be an axios call
    const apiData = await getData();
    setProducts(apiData)
  }

  const handleProductClick = (product) => {
    navigate('/product-page', { state: { product } });
  };

  console.log(products)

  return (
    <div className="App">
      {products?.map((product) => (
        <div key={product.id}>
          <p onClick={() => handleProductClick(product)}>{product.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
