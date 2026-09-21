import './App.css';
import Aside from './components/aside/Aside';
import DashGrid from './components/DashGrid';
import Header from './components/header/Header';
import useMediaQuery from './utility/useMediaQuery';

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <main>
      <Header />

      <div className='dashboard-content'>
        {isDesktop && <Aside />}
        <DashGrid />
      </div>
    </main>
  );
}

export default App;
