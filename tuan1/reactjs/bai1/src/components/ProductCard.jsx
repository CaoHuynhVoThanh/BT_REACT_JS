import './ProductCard.css';

function ProductCard({name, price, img}){
    return(
        <div id="card">
            <img src={img} alt={name} style={{width:"200px", height:"200px", objectFit:"cover"}}></img>
            <h2 style={{color: "black", fontSize:"16px"}}>{name}</h2>
            <h3 style={{color: "black", fontSize:"14px"}}>{price}</h3>
            <button style={{backgroundColor:"black", color:"white", border:"none", padding:"10px 20px", borderRadius:"5px", cursor:"pointer"}} >Add to card</button>
        </div>
    );
}
export default ProductCard;