type Props = {
  onRegisterSuccess: () => void;
  onGoToLogin: () => void;
};

function RegisterPage({ onRegisterSuccess, onGoToLogin }: Props) {
  return (
    <>
      <div className="auth-main">
        <div className="auth-card">
          <h2 className="auth-title">Register</h2>
          <p className="auth-subtitle">
            Create an account to start managing your tasks.
          </p>

          <form onSubmit={onRegisterSuccess} className="vertical-form">
            <label htmlFor="email-field">Email</label>
            <input id="email-field" type="email" name="email-field" />

            <label htmlFor="password-field">Password</label>
            <input id="password-field" type="password" name="password-field" />

            <button type="submit" className="auth-button">
              Register
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account?{" "}
            <span onClick={onGoToLogin}>Login here!</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
