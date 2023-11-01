import './App.css'
import SettingsProvider from './context/settings/SettingsProvider'
import AuthProvider from './context/auth/AuthProvider';
import Login from './components/Login';
import Auth from './components/Auth';

function App() {

  return (
    <>
      <SettingsProvider>
        <AuthProvider>
          <header>
            <h1>I am a child of the Provider!</h1>
          </header>
          <Login />
          <Auth capability={'read'}>
            <p>You can only see me when you are logged in and authorized</p>
          </Auth>
        </AuthProvider>
      </SettingsProvider>
    </>
  )
}

export default App
