import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
 const location = useLocation();
 const [selectedImage, setSelectedImage] = useState('');
 const [price, setPrice] = useState('');
 const [selectedVariant, setSelectedVariant] = useState('')
 const [selectedOptionId, setSelectedOptionId] = useState(null);
 const { product } = location.state || {};



 console.log(product.variants)

 function handleSelectionChange(variant, img, option) {
  setSelectedVariant(variant);
  setSelectedImage(img);
  setPrice(option ? option.price : `Select ${variant.modifiers[0].name} For Pricing`);
  setSelectedOptionId(option ? option.id : null);
 }


 return (
  <div className='main-container'>
   {product ? (
    <div className='inner-main-container'>

     <section className="main-product-title-section">

      <div className='main-img-container'>
       <img src={selectedImage ? selectedImage : product.variants[0].media[0].url} />
      </div>

      <div className='product-title-info-container'>
       <h1>{product.name}</h1>
       <h2>{product.category}</h2>
       <h3>{product.subCategory}</h3>

       <p>{price ? price : product.variants[0].modifiers[0].options[0].price}</p>




      </div>

     </section>


     <h1 className='variants-title'>{product.variants[0].variantType}:</h1>
     <section className='variants-section'>
      {/* I need to map through the data here so it can display all variant types, and variant information */}
      {product.variants?.map(variant => (
       <div key={variant.id} className='variant-container'>
        <p>{variant.name}</p>
        {variant.media?.map(media => (
         <img
          key={media.id}
          onClick={() => handleSelectionChange(variant, media.url)}
          src={media.url}
          alt={variant.name}
          style={{ cursor: 'pointer' }}
         />
        ))}

        {variant.modifiers?.map((modifier) => (
         <div key={modifier.id}>
          <h3>{modifier.name}:</h3>
          {modifier.options?.map((option) => (
           <div key={option.id}>
            <p
             onClick={() => handleSelectionChange(variant, variant.media[0].url, option)}
             className={selectedOptionId === option.id ? 'selected-option' : ''}
            >
             {option.name}
            </p>
            {/* <p>Price: ${option.price}</p> */}
            {/* <p>Inventory Available: {option.inventoryAvailable}</p> */}
           </div>
          ))}
         </div>
        ))}
       </div>
      ))}
     </section>

     <section className="modifiers-section">

     </section>
    </div>
   ) : (
    <p>No product data available.</p>
   )}
  </div>
 )
}

export default ProductPage;