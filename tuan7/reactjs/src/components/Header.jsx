import "./Header.css"

function Header({ onLogin, onSubscribe }) {
    return(
        <header className="site-header">
            <div className="brand">
                <div className="brand-mark" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="brand-name">Chefify</div>
            </div>

            <div className="search-box">
                <span className="search-icon" aria-hidden="true"></span>
                <input placeholder="What would you like to cook?"></input>
            </div>

            <nav className="header-menu" aria-label="Main navigation">
                <a href="#">What to cook</a>
                <a href="#">Recipes</a>
                <a href="#">Ingredients</a>
                <a href="#">Occasions</a>
                <a href="#">About Us</a>
            </nav>

            <div className="header-actions">
                <button className="login-button" type="button" onClick={onLogin}>Login</button>
                <button className="subscribe-button" type="button" onClick={onSubscribe}>Subscribe</button>
            </div>
        </header>
    );
}

export default Header;
