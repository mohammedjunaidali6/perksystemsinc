import React,{useState} from 'react';
import login from './login1.jpg'

const Login = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const validationErrors = {};
    
        if (name.trim() === '') {
          validationErrors.name = 'Username is required.';
        }
    
        if (password.trim() === '') {
          validationErrors.password = 'Password is required.';
        }
    
        if (Object.keys(validationErrors).length === 0) {
          // Perform login logic
          alert('Login successful!');
          setName('');
          setPassword('');
          setErrors('');

        } else {
          setErrors(validationErrors);
        }
      };
    
    return (
        <div>
            <div className='login'>
                <img src={login} alt='login banner' id="loginbannerimg"/>
                <h1 id="contacthead">Employee Login</h1>
            </div>
            <div className='logindiv'>
                <div className='loginform'>
                <h5>Employee Login</h5>
                   <form onSubmit={handleSubmit}>
                    <input type="text" className='form-control'  placeholder='Username'value={name} onChange={(e)=>setName(e.target.value)}/>
                    {errors.name && <p style={{color:'red',textAlign:'center'}}>{errors.name}</p>}
                    <input type="password" className='form-control'  placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {errors.password && <p style={{color:'red',textAlign:'center'}}>{errors.password}</p>}
                    <button type='submit' className='btn btn-primary loginbtn'>Login</button><br/>
                    <span id="lostpassword"><a href='##' >Forgot Password</a></span>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Login;