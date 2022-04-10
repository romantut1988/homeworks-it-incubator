import React from 'react'
import PreJunior from "./pages/PreJunior"
import {Switch, Route, Redirect} from "react-router-dom"
import Error404 from "./pages/Error404"
import JuniorPlus from "./pages/JuniorPlus"
import Junior from "./pages/Junior"

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: './junior-plus'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
            <Route path={PATH.PRE_JUNIOR} render={() => <JuniorPlus/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes