import { useRef } from "react";
import { useAutoCallback, useAutoEffect } from "hooks.macro";
import { useBooleanState } from "../../hooks";
import { useDetectFavoritesPage } from "../../hooks/use-detect-favorites-page";
import { noop } from "lodash";
import { useRootContext } from "../../root/root.context";

export const usePhotoGridPageLogic = () => {
  const photoGridRef = useRef();
  const isFavorites = useDetectFavoritesPage();
  const { photos, getNewPhotos, favorites } = useRootContext();
  const [
    photosLoading,
    enablePhotosLoadingProcess,
    disablePhotosLoadingProcess,
  ] = useBooleanState(false);

  const onGridScroll = useAutoCallback((event) => {
    const { scrollTop, offsetHeight, scrollHeight } = event.target;
    if (scrollTop + offsetHeight === scrollHeight) {
      enablePhotosLoadingProcess();

      setTimeout(async () => {
        await getNewPhotos();
        disablePhotosLoadingProcess();
      }, 1000);
    }
  });

  useAutoEffect(() => {
    if (!isFavorites) {
      const { scrollHeight, offsetHeight } = photoGridRef.current;
      scrollHeight === offsetHeight && getNewPhotos();
    }
  });

  return {
    photos: !isFavorites ? photos : favorites,
    photoGridRef,
    onGridScroll: !isFavorites ? onGridScroll : noop,
    photosLoading,
  };
};
