import { withRouter } from 'react-router-dom';
import SessionProvider from './components/session/SessionProvider';
import Routes from './components/Routes';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <SessionProvider>
        <Header />
        <Routes />
      </SessionProvider>
      <ToastContainer />
    </div>
  );
}

export default withRouter(App);