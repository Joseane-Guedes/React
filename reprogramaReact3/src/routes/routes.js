import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/simpsons' component={Simpsons} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
