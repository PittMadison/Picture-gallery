import { memo } from 'react';

export const PageHeaderWrapper = memo(({children}) => {
        return (
            <>
            <div className='app-header'>
            </div>
                {children}
            </>
        );
});
