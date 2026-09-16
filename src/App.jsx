import './App.css';
import Aside from './components/aside/Aside';
import DashGrid from './components/DashGrid';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <main>
        <Header />
        <div className='dashboard-content'>
          <Aside />
          <DashGrid />
        </div>
      </main>
    </>
  );
}

export default App;
