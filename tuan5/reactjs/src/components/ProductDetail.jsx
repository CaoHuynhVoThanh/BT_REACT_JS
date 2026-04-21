import { useNavigate } from 'react-router-dom';

function ProductDetail(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/checkout"); 
      };
    return(
        <div>
            Wanna checkout?
            <button onClick={handleClick}>Checkout</button>
        </div>
    );
}

export default ProductDetail;