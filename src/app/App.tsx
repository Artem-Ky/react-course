import './styles/index.scss';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import classNames from 'classnames';
import { Router } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <Router />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
