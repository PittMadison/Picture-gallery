import { useEffect, useState } from "react";
import { useAutoCallback } from "hooks.macro";
import { getFakerImageUrl } from "../../faker-service";

export const usePhotoGridPageLogic = () => {
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
  }, []);

  return {
    photos,
    getNewPhotos,
  };
};
