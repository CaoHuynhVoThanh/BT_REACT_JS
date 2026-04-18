import "./Header.css"
function Header(){

    return(
        <div className="container">
            <div className="group">
                <img className="image" src="./logo.svg"></img>
                <div className="text">Chefify</div>
            </div>
            <div className="textbox">
                <input placeholder="What would you like to cook?"></input>
            </div>
            <div className="header-menu">
                <div className="header-menu-item">What to cook</div>
                <div className="header-menu-item">Recipes</div>
                <div className="header-menu-item">Ingredients</div>
                <div className="header-menu-item">Occasions</div>
                <div className="header-menu-item">About Us</div>
            </div>

            <button className="button">Login</button>
            <button className="button2">Subscribe</button>
        </div>
    );
}

export default Header;