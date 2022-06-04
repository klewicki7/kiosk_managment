import actions  from '../actions/auth';
import {SUMA } from '../actions/auth';

const authMiddleware = ({dispatch,getState}) => next => action => {
    next(action);
    switch (action.type) {
        case SUMA:
            console.log('entro aqui')
    }
}

export default authMiddleware;