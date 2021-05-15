import { memo } from "react";
import { useRootContext } from "../../../root/root.context";
import { useAutoCallback } from "hooks.macro";
import "./favorites-button.scss";
import { removeFromFavorites } from "../../../services/cache-service";
import { useHistory } from 'react-router-dom';

export const FavoritesButton = memo(() => {
  const {push} = useHistory()
  const {
    favorites,
    setFavorites,
    previewPhoto: { photoId: id },
    showToast,
  } = useRootContext();

  const onClick = useAutoCallback(() => {
    removeFromFavorites(id);
    setFavorites(favorites.filter(({ photoId }) => id !== photoId));
    showToast("Removed from favorites");
    push('/favorites');
  });

  return (
    <div onClick={onClick} className="favorites-button">
      Remove from favorites
    </div>
  );
});
