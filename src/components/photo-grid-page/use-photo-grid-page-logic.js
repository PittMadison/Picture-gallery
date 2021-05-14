import { useEffect, useState } from "react";
import { useAutoCallback } from "hooks.macro";
import { getFakerImageUrl } from "../../faker-service";

export const usePhotoGridPageLogic = () => {
  const [photos, setPhotos] = useState([]);

  const getNewPhotos = useAutoCallback((number = 10) => {
    const newPhotos = [];

    for (let i = 0; i < number; i++) {
      newPhotos.push(getFakerImageUrl());
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
