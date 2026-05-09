import "./Login.css";

export default function Login({ isOpen, onClose }) {
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
        <div className="login-overlay" onClick={onClose}>
            <div className="login-panel" role="dialog" aria-modal="true" aria-labelledby="login-title" onClick={handlePanelClick}>
                <div className="login-visual">
                    <p>"Embrace the art of cooking, where flavors come alive!"</p>
                </div>

                <div className="login-content">
                    <button className="login-close" type="button" aria-label="Close login form" onClick={onClose}></button>
                    <h2 id="login-title">Login</h2>
                    <p className="login-subtitle">Enter your email to log in.</p>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter your email" aria-label="Email"></input>
                        <button className="continue-button" type="submit">Continue</button>
                    </form>

                    <div className="login-divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    <p className="login-terms">
                        By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                    </p>

                    <div className="login-social-list">
                        <button className="login-social google-login" type="button">
                            <strong>G</strong>
                            Continue with Google
                        </button>
                        <button className="login-social facebook-login" type="button">
                            <strong>f</strong>
                            Continue with Facebook
                        </button>
                        <button className="login-social apple-login" type="button">
                            <strong>a</strong>
                            Continue with Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
