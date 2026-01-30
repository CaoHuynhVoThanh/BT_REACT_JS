import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  var ProductNames = ["Iphone 17 Pro Max", "Xiaomi Redmi Note 15 Pro", "Oppo Reno15 F", "Samsung Galaxy S25 FE", "Iphone 17 Pro Max", "Xiaomi Redmi Note 15 Pro", "Oppo Reno15 F", "Samsung Galaxy S25 FE", "Iphone 17 Pro Max", "Xiaomi Redmi Note 15 Pro", "Oppo Reno15 F", "Samsung Galaxy S25 FE", "Iphone 17 Pro Max", "Xiaomi Redmi Note 15 Pro"];
  var ProductPrices = [30990000, 26990000, 19990000, 24990000, 30990000, 26990000, 19990000, 24990000, 30990000, 26990000, 19990000, 24990000, 30990000, 26990000];
  var ProductImgs = [
    "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360312/xiaomi-redmi-note-15-pro-5g-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360240/TimerThumb/oppo-reno15f-5g-hong-thumb.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342560/samsung-galaxy-s25-fe-blue-thumbai-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360312/xiaomi-redmi-note-15-pro-5g-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360240/TimerThumb/oppo-reno15f-5g-hong-thumb.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342560/samsung-galaxy-s25-fe-blue-thumbai-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360312/xiaomi-redmi-note-15-pro-5g-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360240/TimerThumb/oppo-reno15f-5g-hong-thumb.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342560/samsung-galaxy-s25-fe-blue-thumbai-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/360312/xiaomi-redmi-note-15-pro-5g-thumb-600x600.jpg",
  ];
  return (
    <div style={{padding:"20px"}}>
    <header style={{background:"orange", width:"100%", textAlign:"center"}}><h1>Product List</h1></header>
      {ProductNames.map((name, index) => (
        <ProductCard 
          key={index}
          name={name}
          price={ProductPrices[index]}
          img={ProductImgs[index]}
        />
      ))}
    </div>
  )
}

export default App
