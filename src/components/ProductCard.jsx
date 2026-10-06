function ProductCard({ title, price,image,des,soldOut }) {
  return (
    <div className="product">
     <img 
     className={soldOut ? "soldOut" :""}
     src={image} 
     alt="Adobe Premiere Pro"
      />

      <div>
        <h3>{title}</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <span>{soldOut ? "soldOut" : `$ {price}`}</span>
      </div>
    </div>

  )
}
export default ProductCard