import React from 'react'
import "./NewsArticle.css"

function NewsArticle({ author, title, description, url, urlToImage, publishment, content }) {
    return (
        <div className="news-article-cards">
            <img src={urlToImage} alt="" className="news-article-img" />
            <h1>{title}</h1>
            <div>
                <p className='author-name'>- {author}</p>
                <b className='des'>{description}</b>
            </div>
          <div className='btn'> <a className='readbtn' target='blank' href='{url}'>Read More</a></div>
        </div>
    )
}

export default NewsArticle