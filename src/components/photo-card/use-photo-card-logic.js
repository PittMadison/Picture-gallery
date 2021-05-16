import { useBooleanState } from "../../hooks";
import { useAutoCallback } from "hooks.macro";
import { useHistory } from "react-router-dom";
import { useRootContext } from "../../root/root.context";
import { addPhotoToFavorites } from "../../services/cache-service";
import { useDetectFavoritesPage } from "../../hooks/use-detect-favorites-page";
import { useSnackbar } from 'notistack';
import { noop } from "lodash";

export const usePhotoCardLogic = (isPreview) => {
  const { push } = useHistory();
  const {enqueueSnackbar} = useSnackbar();
  const isFavoritesPage = useDetectFavoritesPage();
  const { favorites, setFavorites, previewPhoto, setPreviewPhoto } =
    useRootContext();
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  const addToFavorites = useAutoCallback((photoUrl, photoId) => {
    if (!favorites.map(({ photoId }) => photoId).includes(photoId)) {
      addPhotoToFavorites(photoUrl, photoId);
      setFavorites([{ photoUrl, photoId }, ...favorites]);
      enqueueSnackbar("Added to favorites");
    } else {
      enqueueSnackbar("Already in favorites");
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
