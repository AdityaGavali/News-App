import React from 'react'
import './Card.css'
function Card({news}) {
  return (
    <div className='news-card'>
      <img src={news.urlToImage} alt={news.title}/>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <button onClick={()=>
        window.open(news.url)
      } className= "button-read">Read More</button>
    </div>
  )
}

export default Card