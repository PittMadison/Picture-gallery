import { useEffect, useState, useRef } from "react";
import { useAutoCallback, useAutoEffect } from "hooks.macro";
import { getFakerImageUrl } from "../../faker-service";

export const usePhotoGridPageLogic = () => {
  const photoGridRef = useRef();
  const [photos, setPhotos] = useState([]);

  const getNewPhotos = useAutoCallback((photoCount = 10) => {
    const newPhotos = [];

    while (newPhotos.length < photoCount) {
      const newImageUrl = getFakerImageUrl();
      !newPhotos.includes(newImageUrl) && newPhotos.push(newImageUrl);
    }

    setPhotos([...photos, ...newPhotos]);
  });

  useEffect(() => {
    getNewPhotos();
    return () => {
      setPhotos([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAutoEffect(() => {
    if (
      photos.length &&
      photoGridRef.current.scrollHeight === photoGridRef.current.offsetHeight
    ) {
      getNewPhotos();
    }
  });

  return {
    photos,
    getNewPhotos,
    photoGridRef,
  };
};
