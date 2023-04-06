import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { CategoryContextProvider } from './context/CategoriesContext';
import { HouseContextProvider } from './context/HousesContext';
import { AuthContextProvider } from './context/AuthContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading';

//Guards
import AuthGuard from './services/guards/AuthGuard';
import AdminGuard from './services/guards/AdminGuard';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Houses = React.lazy(() => import( "./pages/Client/Houses"));
const Dashboard = React.lazy(() => import( "./pages/Admin/Dashboard"));
const Login = React.lazy(() => import( "./pages/Login/Login"));
const Register = React.lazy(() => import( "./pages/Login/Register"));

const HousesList = React.lazy(() => import('./pages/Admin/House/HousesList'));
const HousesAdd = React.lazy(() => import('./pages/Admin/House/HousesAdd'));
const HousesUpdate = React.lazy(() => import('./pages/Admin/House/HousesUpdate'));
const HouseDetails = React.lazy(() => import('./pages/Client/HouseDetails'));

// const ScootersList = React.lazy(() => import('./pages/Admin/Scooter/ScootersList'));
// const ScootersAdd = React.lazy(() => import('./pages/Admin/Scooter/ScootersAdd'));
// const ScootersUpdate = React.lazy(() => import('./pages/Admin/Scooter/ScootersUpdate'));

// const UsersList = React.lazy(() => import('./pages/Admin/User/UsersList'));
// const RentsList = React.lazy(() => import('./pages/Admin/Rent/RentsList'));
// const IncidentsList = React.lazy(() => import('./pages/Admin/Incidence/IncidentsList'));

const Profile = React.lazy(() => import('./pages/Client/Profile'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading/>}>
        <BrowserRouter>
          <AuthContextProvider>
            <CategoryContextProvider>
              <HouseContextProvider>
                <Header/>
                <ToastContainer 
                  position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop
                  closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="dark"
                />
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/houses" element={<Houses/>} />
                    <Route path="/houses/:route_filters" element={<Houses/>}/>
                    <Route path="/house/:id" element={<HouseDetails/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route element={<AdminGuard/>}>
                      <Route path="/dashboard" element={<Dashboard/>}/>
                      <Route path="/dashboard/houses" element={<HousesList/>}/>
                      <Route path="/dashboard/houses/add" element={<HousesAdd/>}/>
                      <Route path="/dashboard/houses/update/:id" element={<HousesUpdate/>}/>
                    </Route>

                    <Route element={<AuthGuard/>}>
                      <Route path="/profile/:id" element={<Profile/>}/>
                    </Route>
                  </Routes>
                <Footer/>
              </HouseContextProvider>
            </CategoryContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;