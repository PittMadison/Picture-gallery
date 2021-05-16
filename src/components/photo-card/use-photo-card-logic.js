import { useBooleanState } from "../../hooks";
import { useAutoCallback } from "hooks.macro";
import { useHistory } from "react-router-dom";
import { useRootContext } from "../../root/root.context";
import { addPhotoToFavorites } from "../../services/cache-service";
import { useDetectFavoritesPage } from "../../hooks/use-detect-favorites-page";
import { noop } from "lodash";
import { useShowSnackbar } from '../../hooks/use-show-snackbar';

export const usePhotoCardLogic = (isPreview) => {
  const { push } = useHistory();
  const {showSnackbar} = useShowSnackbar();
  const isFavoritesPage = useDetectFavoritesPage();
  const { favorites, setFavorites, previewPhoto, setPreviewPhoto } =
    useRootContext();
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  const addToFavorites = useAutoCallback((photoUrl, photoId) => {
    if (!favorites.map(({ photoId }) => photoId).includes(photoId)) {
      addPhotoToFavorites(photoUrl, photoId);
      setFavorites([{ photoUrl, photoId }, ...favorites]);
      showSnackbar("Added to favorites");
    } else {
      showSnackbar("Already in favorites", "info");
    }
  });

  const showPreviewPage = useAutoCallback((photoUrl, photoId) => {
    setPreviewPhoto({ photoUrl, photoId });
    push(`/photos/${photoId}`);
  });

  return {
    imageLoaded,
    finishImageLoading,
    onPhotoCardClick: isFavoritesPage
      ? showPreviewPage
      : isPreview
      ? noop
      : addToFavorites,
    previewPhoto,
  };
};
