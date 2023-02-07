import { createRouter, createWebHistory } from "vue-router";

import { DefaultLayout, AdminLayout, AccountLayout } from "../Layouts";

import {
    Start,
    Dashboard,
    Login,
    Register,
    Overview,
    Clients,
    Contact,
    Error404,
    Privacy,
    Terms,
    AccountSettings,
    MyTrainings,
    MyEvents,
    Calendar,
    Booking,
    CoachTrainings,
    Offer,
    AboutUs,
    PageInProgress,
} from "../views";

const routes = [
    {
        component: DefaultLayout,
        path: "/start",
        children: [
            { path: "/start", name: "Start", component: Start },
            {
                path: "/login",
                name: "Login",
                component: Login,
            },
            {
                path: "/rejestracja",
                name: "Register",
                component: Register,
            },
            {
                path: "/kontact",
                name: "Contact",
                component: Contact,
            },
            {
                path: "/polityka-prywatnosci",
                name: "Privacy",
                component: Privacy,
            },
            {
                path: "/warunki-korzystania",
                name: "Terms",
                component: Terms,
            },
            {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                component: Error404,
            },
            {
                path: "/kalendarz",
                name: "Calendar",
                component: PageInProgress, //Calendar
            },
            {
                path: "/oferta",
                name: "Offer",
                component: Offer,
            },
            {
                path: "/o-nas",
                name: "AboutUs",
                component: AboutUs,
            },
        ],
    },

    {
        component: AccountLayout,
        path: "/konto",
        redirect: "/konto/ustawienia",
        children: [
            {
                path: "/konto/ustawienia",
                name: "AccountSettings",
                component: AccountSettings,
            },
            {
                path: "/konto/treningi",
                name: "MyTrainings",
                component: MyTrainings,
            },
            {
                path: "/konto/wydarzenia",
                name: "MyEvents",
                component: MyEvents,
            },
            {
                path: "/konto/rezerwacje",
                name: "UserBooking",
                component: Booking,
            },

            {
                path: "/konto/rezerwacje",
                name: "CoachTrainings",
                component: CoachTrainings,
            },
        ],
    },

    {
        path: "/",
        redirect: "/start",
    },

    {
        component: AdminLayout,
        path: "/admin",
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard/",
                component: Dashboard,
                name: "Dashboard",
                redirect: "/dashboard/overview",
                // beforeEnter: (to, from, next) => {
                //     axiosAuthenticator
                //         .get("/api/authenticated")
                //         .then(() => {
                //             next();
                //         })
                //         .catch(() => {
                //             return next({ name: "Login" });
                //         });
                // },

                children: [
                    {
                        path: "/dashboard/overview",
                        component: Overview,
                        name: "Overview",
                    },
                    {
                        path: "/dashboard/Clients",
                        component: Clients,
                        name: "Clients",
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
