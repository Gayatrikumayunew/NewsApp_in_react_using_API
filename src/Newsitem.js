import React from 'react'

const Newsitem =(props)=> {
  
    let { title, description, imgUrl , newsUrl,author,date,source} = props;

    return (
      <div className='my-3'>
        <div className="card" >
          <div style={
            {
              display: 'flex',
              justifyContent:'flex-end',
              position: 'absolute',
              right:'0'
            }
          }>
          <span className=' badge rounded-pill bg-danger' >{source}</span>

          </div>
          <img src={!imgUrl?"https://www.livemint.com/lm-img/img/2024/03/09/1600x900/Miss_Universe_1709996472357_1709996472564.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small class="text-muted">By {!author?"Unknown" : author} on{ new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
