import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
    NAVIGATION_BUTTON_CLASSNAMES,
    NAVIGATION_BUTTON_LINKS_MAP, NAVIGATION_BUTTON_NAMES,
    NAVIGATION_BUTTON_TYPES
} from './page-header.constants';

export const NavigationButton = memo(({type = NAVIGATION_BUTTON_TYPES.photos}) => {
    return (
        <NavLink
            exact
            to={NAVIGATION_BUTTON_LINKS_MAP[type]}
            className={NAVIGATION_BUTTON_CLASSNAMES.default}
            activeClassName={NAVIGATION_BUTTON_CLASSNAMES.active}
        >
            { NAVIGATION_BUTTON_NAMES[type]}
        </NavLink>
    );
});
