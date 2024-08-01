import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Tasks />
    </>
  );
}

export default App;
