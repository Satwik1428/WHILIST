function Wishlist({ name, price, saved})
{
  return(
    <div className="wishlist-container">
      <div className="wishlist-left">
        <h2>{name}</h2>
        <p className="wishlist-saved">Saved: ${saved}</p>
      </div>
      <div className="wishlist-right">
        ${price}
      </div>
    </div>
  )
}
export default Wishlist;