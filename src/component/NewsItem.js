import React from 'react'

const  NewsItem = (props) => {
   
       let  {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger"> {source}</span>
                </div>
                    <img src={!imageUrl?"https://images.deccanherald.com/deccanherald%2F2024-02%2Fa1275a49-5b87-4ac2-a1b5-2888a3c8e6eb%2FiStock_508139163.jpg?rect=0%2C135%2C3600%2C1890&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author?author:"unknown"} on {new Date (date).toGMTString()}</small></p>
                        <a href={newsUrl} className = "btn btn-sm btn-primary" rel="noreferrer" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
