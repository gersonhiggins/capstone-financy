import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import Date from './components/DateInfo';
import Navbar from './components/navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/capstone-financy" element={<Home />} exact />
              <Route path="/date/:date" element={<Date />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
