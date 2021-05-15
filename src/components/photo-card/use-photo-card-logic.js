import { useBooleanState } from "../../hooks";
import { useAutoCallback } from "hooks.macro";
import { useHistory } from "react-router-dom";
import { useRootContext } from "../../root/root.context";
import { addPhotoToFavorites } from "../../services/cache-service";
import { useDetectFavoritesPage } from "../../hooks/use-detect-favorites-page";

export const usePhotoCardLogic = () => {
  const { push } = useHistory();
  const isFavoritesPage = useDetectFavoritesPage();
  const { favorites, setFavorites, previewPhoto, setPreviewPhoto, showToast } =
    useRootContext();
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  const addToFavorites = useAutoCallback((photoUrl, photoId) => {
    addPhotoToFavorites(photoUrl, photoId);
    setFavorites([...favorites, { photoUrl, photoId }]);
    showToast('Added to favorites')
  });

  const showPreviewPage = useAutoCallback((photoUrl, photoId) => {
    setPreviewPhoto({ photoUrl, photoId });
    push(`/photos/${photoId}`);
  });

  return {
    imageLoaded,
    finishImageLoading,
    onPhotoCardClick: isFavoritesPage ? showPreviewPage : addToFavorites,
    previewPhoto,
  };
};
