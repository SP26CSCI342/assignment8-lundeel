import { Routes, Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.jsx';
import HomePage from '../../pages/HomePage.jsx';
import SignupForm from '../../forms/SignupForm.jsx';
import LoginForm from '../../forms/LoginForm.jsx';
import PageNotFound from '../../pages/PageNotFound.jsx';
import Profile from '../../pages/Profile.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>PlateScout</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;