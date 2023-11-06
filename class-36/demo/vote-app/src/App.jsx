import './App.css'
import CandidateList from './components/CandidateList';
import store from './store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <CandidateList />
    </Provider>
  )
}

export default App
