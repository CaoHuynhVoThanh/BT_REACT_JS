import "./SignUp.css";

export default function SignUp({ isOpen, onClose, onSwitchToLogin }) {
    if (!isOpen) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handlePanelClick(event) {
        event.stopPropagation();
    }

    return (
        <div className="signup-overlay" onClick={onClose}>
            <div className="signup-panel" role="dialog" aria-modal="true" aria-labelledby="signup-title" onClick={handlePanelClick}>
                <button className="signup-close" type="button" aria-label="Close sign up form" onClick={onClose}>x</button>

                <h2 id="signup-title">Sign up</h2>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="signup-row">
                        <label>
                            <span>First name</span>
                            <input type="text" placeholder="Input first name"></input>
                        </label>

                        <label>
                            <span>Last name</span>
                            <input type="text" placeholder="Input last name"></input>
                        </label>
                    </div>

                    <label>
                        <span>Email</span>
                        <input type="email" placeholder="example.email@gmail.com"></input>
                    </label>

                    <label>
                        <span>Password</span>
                        <div className="password-field">
                            <input type="password" placeholder="Enter at least 8+ characters"></input>
                            <button type="button" aria-label="Show password"></button>
                        </div>
                    </label>

                    <label className="terms-row">
                        <input type="checkbox" defaultChecked></input>
                        <span>By signing up, I agree with the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></span>
                    </label>

                    <button className="signup-submit" type="submit">Sign up</button>

                    <p className="login-line">
                        Already have an account?
                        <button type="button" onClick={onSwitchToLogin}>Log in</button>
                    </p>

                    <div className="divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    <div className="social-row">
                        <button className="social-button google" type="button" aria-label="Sign up with Google">G</button>
                        <button className="social-button facebook" type="button" aria-label="Sign up with Facebook">f</button>
                        <button className="social-button apple" type="button" aria-label="Sign up with Apple">a</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
