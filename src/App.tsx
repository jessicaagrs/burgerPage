import './App.css';
import Checkout from './components/checkout/Checkout';
import Dashboard from './components/dashboard/Dashboard';
import SidebarNavigation from './components/sidebarNavigation/SidebarNavigation';

function App() {
  return (
    <>
      <SidebarNavigation />
      <Dashboard />
      <Checkout />
    </>
  );
}

export default App;
