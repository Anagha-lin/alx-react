import React from 'react';
import '../App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const App = () => {
  return (
    <>
      <div className="App">
        <div id="notifications-root">
          <Notifications />
        </div>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
};

export default App;

