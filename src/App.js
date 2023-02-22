// import logo from './logo.svg';
import './App.css';
import AppScramble from './components/AppScramble';
import AppTimer from './components/AppTimer';

function App() {
  return (
    <div className='flex justify-center items-center flex-col h-screen bg-slate-600'>
      <AppScramble />
      <AppTimer />
    </div>
  );
}

export default App;
