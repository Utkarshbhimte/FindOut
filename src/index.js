import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match} from 'react-router'

import MsgMain from './components/msgMain'
import Login from './components/login'

import './css/style.css'

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={ MsgMain }/>
                <Match exactly pattern='/login' component={ Login }/>
                {/*<Match exactly pattern='/store/:storeId' component={App}/>*/}
                {/*<Miss component={NotFound}/>*/}
            </div>
        </BrowserRouter>
    )
};

render(<Root />, document.getElementById('main'))