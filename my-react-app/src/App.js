    import logo from './logo.svg';
    import './App.css';
    import LoginForm from './Components/LoginForm/LoginForm';
    import RegisterForm from './Components/RegisterForm/RegisterForm';
    import Home from './Pages/Home'
    import AccountPage from './Pages/AccountPage'
    import {BrowserRouter, Routes, Route} from 'react-router-dom';
    import ProtectedRoute from './Components/ProtectedRoute';

    function App() {
      return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/register" element={<RegisterForm/>}/>
              <Route
                    path="/account"
                    element={
                        <ProtectedRoute>
                            <AccountPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
          </BrowserRouter>
        </div>
      );
    }

    export default App;
