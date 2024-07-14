import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

type appRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
    PROFILE='profile',
    Not_Found='not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    //
    [AppRoutes.Not_Found]: '*',
};

export const routeConfig: Record<AppRoutes, appRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    //
    [AppRoutes.Not_Found]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
