import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import Date from './components/date';
import Navbar from './components/navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/date/:date" element={<Date />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
