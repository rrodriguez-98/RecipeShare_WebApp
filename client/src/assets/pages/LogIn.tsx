import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <>
        <section className='login-container'>
            <div className='display-3' style={{color:"#FDF6E3"}}>Welcome Back</div>
        <section className='py-2'>
            <input className='mt-4 mb-2 form-control' type="email"  placeholder="Email" />
            <input className='form-control' type="password"  placeholder="Password" />
        </section>
        <section className='py-2'>
            <button className='login-button'>Log In</button>
        <Link to="/register" className="m-3" style={{color:"#FDF6E3"}}>Don't have an account?</Link> 
        </section>
        </section>
    </>
  )
}
