import { useEffect, useState, useRef } from "react";
import { useAutoCallback, useAutoEffect } from "hooks.macro";
import { getFakerImageUrl } from "../../faker-service";
import { useBooleanState } from "../../hooks";

export const usePhotoGridPageLogic = () => {
  const photoGridRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [
    photosLoading,
    enablePhotosLoadingProcess,
    disablePhotosLoadingProcess,
  ] = useBooleanState(false);

  const getNewPhotos = useAutoCallback((photoCount = 10) => {
    const newPhotos = [];

    while (newPhotos.length < photoCount) {
      const newImageUrl = getFakerImageUrl();
      !newPhotos.includes(newImageUrl) && newPhotos.push(newImageUrl);
    }

    setPhotos([...photos, ...newPhotos]);
  });

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

  useEffect(() => {
    getNewPhotos();
    return () => {
      setPhotos([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAutoEffect(() => {
    const pageHeader = document.querySelector(".page-header");

    if (
      photos.length &&
      photoGridRef.current.scrollHeight <=
        photoGridRef.current.offsetHeight + pageHeader.offsetHeight
    ) {
      getNewPhotos();
    }
  });

  return {
    photos,
    photoGridRef,
    onGridScroll,
    photosLoading,
  };
};
