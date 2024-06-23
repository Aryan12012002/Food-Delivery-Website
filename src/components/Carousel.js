import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
        </div>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/537725266/photo/wooden-table-with-cheese-bagel.jpg?s=2048x2048&w=is&k=20&c=N-nUReKGK-SZCDohVRfrnbt060Wg5zgWGvImr_t-ES0=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=2048x2048&w=is&k=20&c=8TokrDFU7l0NCqcEng6hHp6EqYn1dcwyH7uc9tbIN3U=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=2048x2048&w=is&k=20&c=0pTqPUVieOqLV-82u4X969mbkS3f-_-gRg8trqsrY0o=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
