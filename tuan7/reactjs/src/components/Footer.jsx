import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter your email" aria-label="Email address"></input>
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="footer-column">
                    <h3>Learn More</h3>
                    <a href="#">Our Cooks</a>
                    <a href="#">See Our Features</a>
                    <a href="#">FAQ</a>
                </div>

                <div className="footer-column">
                    <h3>Shop</h3>
                    <a href="#">Gift Subscription</a>
                    <a href="#">Send Us Feedback</a>
                </div>

                <div className="footer-column">
                    <h3>Recipes</h3>
                    <a href="#">What to Cook This Week</a>
                    <a href="#">Pasta</a>
                    <a href="#">Dinner</a>
                    <a href="#">Healthy</a>
                    <a href="#">Vegetarian</a>
                    <a href="#">Vegan</a>
                    <a href="#">Christmas</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-brand">
                    <div className="footer-mark" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <strong>Chefify</strong>
                </div>
                <span>2023 Chefify Company</span>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
            </div>
        </footer>
    );
}
