import { useBooleanState } from "../../hooks";
import { useAutoCallback } from "hooks.macro";
import { addPhotoToFavorites } from "../../services/cache-service";
import { useRootContext } from "../../root/root.context";

export const usePhotoCardLogic = () => {
  const { favorites, setFavorites } = useRootContext();
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  const onPhotoCardClick = useAutoCallback((photoUrl, photoId) => {
    alert(photoId);
    addPhotoToFavorites(photoUrl, photoId);
    setFavorites([...favorites, { photoUrl, photoId }]);
  });

  return {
    imageLoaded,
    finishImageLoading,
    onPhotoCardClick,
  };
};
