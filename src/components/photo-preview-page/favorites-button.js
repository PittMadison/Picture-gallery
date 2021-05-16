import { memo } from "react";
import { useRootContext } from "../../root/root.context";
import { useAutoCallback } from "hooks.macro";
import { removeFromFavorites } from "../../services/cache-service";
import { useHistory } from "react-router-dom";
import { useShowSnackbar } from '../../hooks/use-show-snackbar';

export const FavoritesButton = memo(() => {
  const { push } = useHistory();
  const {showSnackbar} = useShowSnackbar();
  const {
    favorites,
    setFavorites,
    previewPhoto: { photoId: id },
  } = useRootContext();

  const onClick = useAutoCallback(() => {
    removeFromFavorites(id);
    setFavorites(favorites.filter(({ photoId }) => id !== photoId));
    showSnackbar("Removed from favorites", "delete");
    push("/favorites");
  });

  return (
    <div onClick={onClick} className="favorites-button">
      Remove from favorites
    </div>
  );
});
