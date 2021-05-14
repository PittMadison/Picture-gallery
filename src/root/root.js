import {memo} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRootContext, RootContext } from './root.context';
import { PhotoGridPage } from '../components';


export const Root = memo(() => {
    const value = useRootContext();

    return (
        <RootContext.Provider value={value}>
        <div className='app'>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={PhotoGridPage}
                />
            </Switch>
        </div>
    </RootContext.Provider>
    )
})