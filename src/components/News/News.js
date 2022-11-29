import React from 'react';
import './news.css';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Title from '../constants/Title';

const News = () => {
    const data = useStaticQuery(query);
    const news = data.allContentfulNews.nodes
    console.log(news)
    return (
        <div className="container">
            <div className="news-container">
                <Title title="Latest News"/>
                <div className="news">
                {
                news.map((newpaper) => {
                    const {id, newsTitle, img, date,} = newpaper;
                    const pathToImage = getImage(img);
                return (
                            <div className="new" key={id}>
                                <GatsbyImage image={pathToImage} alt={newsTitle} className="new-img"/>
                                <div className="product-texts">
                                    <div className="date">
                                        <span>{date}</span>
                                    </div>
                                <h4 className="heading">{newsTitle}</h4>
                                    <p className="descr">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eius tempor incididunt ut labore et dolore</p>
                                    <a className="read-more">read more</a>
                                </div>
                                
                            </div>
                    )})
                }
                </div>
            </div>
        </div>
    )
}

const query = graphql`
  {
    allContentfulNews {
      nodes {
        id
        newsTitle
        date
        img {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          title
        }
        description {
          raw
        }
      }
    }
  }`

export default News
