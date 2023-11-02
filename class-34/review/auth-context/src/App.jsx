// import AuthProvider from './auth/Context';
import AuthProvider from './auth/_Context';
// import Login from './auth/Login';
import Login from './auth/_Login';
// import Auth from './auth/Auth';
import Auth from './auth/_Auth';
import './App.css'

function App() {
  return (
    <>
      <AuthProvider>
        <header>
          <h1>I am the todo App!</h1>
          <Login />
        </header>
        <Auth capability={'delete'}>
          <p>I am an Auth Child!</p>
        </Auth>
      </AuthProvider>
    </>
  )
}

export default App
