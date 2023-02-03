<<<<<<< HEAD
import React from "react";

import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import UserStoreProvider from './context/UserContext'

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import UploadPage from "./pages/UploadPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PdfReport from "./pages/report/PdfReport";

import PrivateRoute from './guard/auth';

//redux setup
import { Provider } from 'react-redux'

// //thunk setup
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// const store = createStore(rootReducer, applyMiddleware(thunk))


// import { createStore } from 'redux' // ของเดิมที่ไม่ได้ใช้ redux persist
// import rootReducer from './redux/reducers/index' // ของเดิมที่ไม่ได้ใช้ redux persist
import CartPage from "./pages/CartPage";

// const store = createStore(rootReducer) // ของเดิมที่ไม่ได้ใช้ redux persist
import configureStore from './redux/configureStore'
import ChartReport from "./pages/report/ChartReport";
const { store } = configureStore(); // ของ redux persist

const queryClient = new QueryClient();
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of 17091df (ed1)


function App() {
  return (
<<<<<<< HEAD
    <Provider store={store}>
    <UserStoreProvider>
    <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={3000}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/hospital">
            <HospitalPage />
          </Route>
          <Route path="/upload">
            <UploadPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>

          <PrivateRoute path="/member">
            <MemberPage />
          </PrivateRoute>


          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/pdf">
            <PdfReport />
          </Route>
          <Route path="/chart">
            <ChartReport />
          </Route>

          <Route
            path="/category"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                  <IndexPage />
                </Route>
                <Route path={`${url}/create`} exact>
                  <CreatePage />
                </Route>
                <Route path={`${url}/edit/:id`} exact>
                  <EditPage />
                </Route>
              </>
            )}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
    </ToastProvider>
    </UserStoreProvider>

    </Provider> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of 17091df (ed1)
  );
}

export default App;
