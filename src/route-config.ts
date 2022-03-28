import IndexUsers from "./auth/IndexUsers";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CreateItem from "./items/CreateItem";
//import EditItem from "./items/EditItem";
import FilterItems from "./items/FilterItems";
import IndexItems from "./items/IndexItems";
import CreateStorage from "./storages/CreateStorage";
import EditStorage from "./storages/EditStorage";
import IndexStorages from "./storages/IndexStorages";
import LandingPage from "./storages/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/storages', component: IndexStorages, exact: true},
    {path: '/storages/create', component: CreateStorage},
    {path: '/storages/edit/:id(\\d)', component: EditStorage},

    {path: '/items', component: IndexItems, exact: true},
    {path: '/items/create', component: CreateItem},
    //{path: '/items/edit/:id(\\d)', component: EditItem},
    {path: '/items/filter', component: FilterItems},

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/users', component: IndexUsers, isAdmin: true},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;