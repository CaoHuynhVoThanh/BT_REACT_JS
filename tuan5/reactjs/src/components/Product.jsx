import { useParams } from "react-router-dom";

function Product(){
    const {id} = useParams();
    return(<div>This is product {id}!</div>);
}
export default Product;