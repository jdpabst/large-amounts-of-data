import { useLocation } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
 const location = useLocation();
 const { product } = location.state || {};



 console.log(product.variants)


 return (
  <div className='main-container'>
   {product ? (
    <div className='inner-main-container'>

     <div className='product-title-info-container'>
      <h1>{product.name}</h1>
      <h2>{product.category}</h2>
      <h3>{product.subCategory}</h3>

     </div>

     <section className='variants-section'>
      {/* I need to map through the data here so it can display all variant types, and variant information */}
      <h1>{product.variants[0].variantType}</h1>
      {product.variants?.map(variant => (
       <div>
        <p>{variant.name}</p>
        {variant.media?.map(media => (
         <img src={media.url} />
        ))}

        {variant.modifiers.options?.map(option => (
         <p>{option.name}</p>
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