import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { ErrorPage, Home } from '../../UI/Pages'

function ReactRouterProvider() {
    return (
        <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
        </HashRouter>

    )
}

export default ReactRouterProvider