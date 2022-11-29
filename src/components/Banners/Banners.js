import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import './banners.css'
const Banners = () => {
    const data = useStaticQuery(query);
    const banners = data.allContentfulBanner.nodes
    console.log(banners)
    return (
        <>
            
                <div className="container">
                <main className="banners">
                {
            banners.map((banner) => {
                const {id, sale, season, bannerImg, title} = banner;
                const pathToImage = getImage(bannerImg)
            return (
                        <div className="banner" key={id}>
                            <GatsbyImage image={pathToImage} alt={title} className="banner-img" layout="fullWidth"/>
                            <div className="banner-texts">
                                <h2>{sale}</h2>
                                <h3>{season}</h3>
                            </div>
                            
                        </div>
                  )})
            }
            </main>
            </div>
            
        </>
    )
}

const query = graphql`
  {
    allContentfulBanner {
      nodes {
        bannerImg {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          title
        }
        sale
        season
      }
    }
  }
`

export default Banners
