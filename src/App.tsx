import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import SidebarNavigation from './components/sidebarNavigation/SidebarNavigation';

function App() {
  return (
    <>
      <SidebarNavigation />
      <Dashboard />
      <aside style={{ width: '255px' }}>Barra lateral 2</aside>
    </>
  );
}

export default App;
