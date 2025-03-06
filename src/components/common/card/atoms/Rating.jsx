function Rating({ rating, className }) {
  return(
    <>
    <img alt="rating-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeav6-jz7cOHhL87nZagKk_X_46aJ23bsGw&s' className={className}/>
        <span className="ml-[6px]">{rating}</span>
    </>
    
  )
}

export default Rating;