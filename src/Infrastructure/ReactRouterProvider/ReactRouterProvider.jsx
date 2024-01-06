import React, { useState } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { ErrorPage, Dashboard, Team } from '../../UI/Pages'
import { Topbar, Sidebar } from '../../UI/Components/global';

function ReactRouterProvider() {
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <HashRouter>
            <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/team" component={Team} />
                        <Route path="*">
                            <ErrorPage />
                        </Route>
                    </Switch>
                </main>

            </div>

        </HashRouter>

    )
}

export default ReactRouterProvider