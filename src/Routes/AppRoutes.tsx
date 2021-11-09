import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { NavbarHome } from '../Components/SharaUI/Navbar/NavbarHome';
import DetailsCarScreen from '../Screens/DetailsCarScreen';
import HomeScreen from '../Screens/HomeScreen';
import RegisterScreen from '../Screens/RegisterCarScreen';
import PropertyScreen from '../Screens/PropertyScreen';

function AppRoutes():JSX.Element{

return (
    <Router>
    <NavbarHome/>
    <Switch>
    <Route path="/" element={<HomeScreen/>}/> 
    <Route  path="/details/:carid" element={<DetailsCarScreen/>}/> 
    <Route  path="/register" element={<RegisterScreen/>}/> 
    <Route path="/propertys" element={<PropertyScreen/>}/>
    </Switch>  
    </Router>
)    
}
export default AppRoutes;