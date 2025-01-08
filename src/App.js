import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import StoreProvider from './StoreProvider';

function App() {
  return (
    <>
      <StoreProvider> 
        <NavBar />
        <Main />
        <Footer />
      </StoreProvider>
    </>
  );
}

export default App;
