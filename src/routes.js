/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import ConfirmUser from "views/examples/ConfirmUser";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import CustomerList from "views/examples/CustomerList.js";
import QuoteList from "views/examples/QuoteList.js";
import InvoiceList from "views/examples/InvoiceList.js";
import CertificateList from "views/examples/CertificateList.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customer",
    icon: "ni ni-circle-08 text-primary",
    component: CustomerList,
    layout: "/admin",
  },  
  {
    path: "/quotes",
    name: "Quotes",
    icon: "ni ni ni-single-copy-04 text-primary",
    component: QuoteList,
    layout: "/admin",
  },  
  {
    path: "/invoices",
    name: "Invoices",
    icon: "ni ni ni ni-books text-primary",
    component: InvoiceList,
    layout: "/admin",
  },  
  {
    path: "/certificates",
    name: "Certificates",
    icon: "ni ni ni ni-paper-diploma text-primary",
    component: CertificateList,
    layout: "/admin",
  },  
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    invisible: true,    
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    invisible: true,    
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    invisible: true,    
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    //invisible: true,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    invisible: true,
  },
  {
    path: "/confirmuser/:id",
    name: "ConfirmUser",
    icon: "ni ni-key-25 text-info",
    component: ConfirmUser,
    layout: "/auth",
    invisible: true,
  },  
];
export default routes;
