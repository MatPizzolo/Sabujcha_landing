import React from 'react';
import './newproducts.css'
import Title from '../constants/Title'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const NewProducts = () => {
    const data = useStaticQuery(query);
    const products = data.allContentfulProduct.nodes
    console.log(products)
    return (
        <>

        <main className="newProducts-container">
            <Title title="New Products" />
            <div className="container">
            <div className="products-tea">
            {
            products.map((product) => {
                const {id, title, img, price, discountPrice} = product;
                const pathToImage = getImage(img)
            return (
                        <div className="product" key={id}>
                            <GatsbyImage image={pathToImage} alt={title} className="product-img"/>
                            <div className="product-texts">
                              <h2 className='product-title'>{title}</h2>
                              <h2 className='product-addtocart-text'>+ Add to cart</h2>
                                <div className="product-prices">
                                   <span>${price} -</span><span className="price-line"> ${discountPrice}</span>  
                                </div> 
                            </div>
                            
                        </div>
                  )})
            }
            </div>
            </div>
        </main>

    </>)
}

const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        img {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
          discountPrice
          price
      }
    }
  }`

export default NewProducts;
