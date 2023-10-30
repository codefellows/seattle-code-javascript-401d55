import './App.css'
import ThemeProvider from './context/Theme';
import SettingsProvider from './context/Settings';
import ThemeSettings from './components/ThemeSettings';
import SettingsList from './components/SettingsList';

function App() {

  return (
    <>
      <ThemeProvider>
        <SettingsProvider>
          {/* any between the opening and closing is a child, any child can be a consumer */}
          <header>
            <h1>I am a header!!</h1>
          </header>
          <ThemeSettings />
          <SettingsList />
        </SettingsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
