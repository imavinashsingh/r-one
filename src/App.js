import './App.css';
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import CustomLayout from './CustomLayout';
import { AuthProvider } from './auth_provider/AuthProvider';
import Login from './Container/Login';
import { Route } from "react-router-dom";
import ResetPassword from './Container/Reset_Password';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin loginPage={<Login />} authProvider={AuthProvider} layout={CustomLayout} dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <CustomRoutes noLayout>
    {/* <Route path="/avi" element={<Login />} /> */}
    <Route path="/reset" element={<ResetPassword />} />
  </CustomRoutes>
  </Admin>
);

export default App;
