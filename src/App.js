import './App.css';
import MainSidebar from './components/MainSidebar/MainSidebar';
import PayoutsSidebar from './components/PayoutsSidebar/PayoutsSidebar';

/**
 * Key points:
 * 1. I prefer to use css/scss modules, by using this we can avoid namespace conflicts for css classes
 * 2. I have used vw for units everywhere to acheive more reponsiveness o
 * 3.
 */

function App() {
  return (
    <div className='App'>
      <MainSidebar />
      <PayoutsSidebar />
    </div>
  );
}

export default App;
