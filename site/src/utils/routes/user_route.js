import Dashboard from "../../pages/Dashboard";
import ForgotPwd from "../../pages/ForgotPwd";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

export let user_route = [
    {  path:"/signup", component: <Registration /> },
    {  path:"/login", component: <Login /> },
    {  path:"/forgot-pwd", component: <ForgotPwd /> },
    {  path:"/", component: <Dashboard /> }

]