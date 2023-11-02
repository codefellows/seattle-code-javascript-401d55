import AuthProvider from './auth/Context';
import Login from './auth/Login';
import Auth from './auth/Auth';
import Articles from './components/Articles';
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
        <Auth capability={'read'} >
          <Articles />
        </Auth>
      </AuthProvider>
    </>
  )
}

export default App
