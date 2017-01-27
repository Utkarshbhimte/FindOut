import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router'


import './css/style.css'
import MsgMain from './components/msgMain'

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={MsgMain}/>
                {/*<Match exactly pattern='/store/:storeId' component={App}/>*/}
                {/*<Miss component={NotFound}/>*/}
            </div>
        </BrowserRouter>
    )
};

render(<Root />, document.getElementById('main'))