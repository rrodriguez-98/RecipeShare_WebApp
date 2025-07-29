import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
        <section className="signup-container">
           <div className='display-3 font-light'>Sign Up</div>
            <div className='display-6 font-light'>Create an account</div>
            <section className="signup-field-input">
                <section className="signup-field-single-input py-2">
                    <label htmlFor="name">Name</label><br></br>
                    <input type="text" id="name"/>
                </section>
                <section className="signup-field-single-input py-2">
                    <label htmlFor="email">Email Address</label><br></br>
                    <input type="email" id="email"/>
                </section>
                <section className="signup-field-single-input py-2">
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" id="password"/>
                </section>
                <section className="signup-field-single-input py-2">
                    <label htmlFor="confirm-password">Confirm Password</label><br></br>
                    <input type="password" id="confirm-password"/>
                </section>
                <label className="checkbox-conditions">
                    <input type="checkbox" name="terms_conditions" value="agree"/>
                    <span className='mx-3'>
                        I agree to the Terms of Service
                    </span>
                </label>
            </section>
            <button className='signup-button m-2'>Sign Up</button> 
        </section>
        <Link to="/">Already have an account? Login here</Link>
    </>
  )
}
