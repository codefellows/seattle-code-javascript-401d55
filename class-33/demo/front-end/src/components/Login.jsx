import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthProvider';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log('Form is submitted!!');
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    console.log('VALUES FROM THE FORM!', username, password);
    auth.login(username, password);
  }
  console.log(auth);
  return (
    <div>
      {!auth.isLoggedIn
        ? (
          <form onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="username"/>
            <input name="password" type="password" placeholder="password" />
            <button type="submit" >Login!</button>
          </form>
        ) 
        : (<button onClick={auth.logout}>logout</button>)
      }
    </div>
  )
}

export default Login;