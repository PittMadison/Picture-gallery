import { useRef, useEffect } from "react";
import { useAutoCallback, useAutoEffect } from "hooks.macro";
import { useBooleanState } from "../../hooks";
import { useDetectFavoritesPage } from "../../hooks/use-detect-favorites-page";
import { noop } from "lodash";
import { useRootContext } from "../../root/root.context";

export const usePhotoGridPageLogic = () => {
  const photoGridRef = useRef();
  const isFavoritesPage = useDetectFavoritesPage();
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
    if (!isFavoritesPage) {
      const { scrollHeight, offsetHeight } = photoGridRef.current;
      scrollHeight === offsetHeight && getNewPhotos();
    }
  });

  useEffect(() => {
    photoGridRef.current.scrollTop = 0;
  }, [isFavoritesPage])

  return {
    photos: !isFavoritesPage ? photos : favorites,
    photoGridRef,
    onGridScroll: !isFavoritesPage ? onGridScroll : noop,
    photosLoading,
    isFavoritesPage,
  };
};
