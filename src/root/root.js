import {memo} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRootContext, RootContext } from './root.context';
import { PhotoGridPage, PhotoPreviewPage } from '../components';


export const Root = memo(() => {
    const value = useRootContext();

    return (
        <RootContext.Provider value={value}>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={PhotoGridPage}
                />
                <Route
                    path='/favorites'
                    component={PhotoGridPage}
                    />

                <Route
                    path='/photos/:id'
                    component={PhotoPreviewPage}
                />

            </Switch>
    </RootContext.Provider>
    )
})