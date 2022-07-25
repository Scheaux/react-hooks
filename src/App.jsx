import './App.css';
import ListAndDetails from './components/ListAndDetails/ListAndDetails';
import FetchContainer from './components/useJsonFetch/FetchContainer';

function App() {
  return (
    <div className='App'>
      <ListAndDetails />
      <FetchContainer />
    </div>
  );
}

export default App;
