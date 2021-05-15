import { useLocation } from 'react-router-dom';

export const useDetectFavoritesPage = () => {
    const {pathname} = useLocation();
    return pathname.includes("favorites");
}
