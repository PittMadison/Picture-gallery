import { memo } from "react";
import { useRootContext } from "../../root/root.context";
import { useAutoCallback } from "hooks.macro";
import { removeFromFavorites } from "../../services/cache-service";
import { useHistory } from "react-router-dom";
import { useShowToast } from '../../hooks/use-show-toast';

export const FavoritesButton = memo(() => {
  const { push } = useHistory();
  const {showToast} = useShowToast();
  const {
    favorites,
    setFavorites,
    previewPhoto: { photoId: id },
  } = useRootContext();

  const onClick = useAutoCallback(() => {
    removeFromFavorites(id);
    setFavorites(favorites.filter(({ photoId }) => id !== photoId));
    showToast("Removed from favorites", "delete");
    push("/favorites");
  });

  return (
    <div onClick={onClick} className="favorites-button">
      Remove from favorites
    </div>
  );
});
