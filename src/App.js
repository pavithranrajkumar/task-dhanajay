import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

/**
 * Key points:
 * 1. I prefer to use css/scss modules, by using this we can avoid namespace conflicts for css classes
 * 2. I have used vw for units everywhere to acheive more reponsiveness o
 * 3.
 */

function App() {
  return (
    <div className='App'>
      <Sidebar />
    </div>
  );
}

export default App;
