// import logo from './logo.svg';
import './App.css';
import AppScramble from './components/AppScramble';
import AppTimeList from './components/AppTimeList';
import AppTimer from './components/AppTimer';

function App() {
  return (
    <div className='bg-slate-600 h-screen'>
      <AppTimeList />
      <div className='flex justify-center items-center flex-col h-screen'>
        <AppScramble />
        <AppTimer />
        <div id="timepad" className='h-96 w-screen overflow-hidden'></div>
      </div>
    </div>
    
  );
}

export default App;
