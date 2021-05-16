import { useState } from "react";
import { useAutoCallback } from "hooks.macro";
import { v4 as uuidv4 } from "uuid";
import { getFavorites } from "../services/cache-service";
import { getRandomImageUrl } from "../services/image-service";

export const useRootLogic = () => {
  const [previewPhoto, setPreviewPhoto] = useState({});
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(getFavorites());
  const [toastList, setToastList] = useState([]);

  const showToast = (toastMessage) => {
    setToastList([...toastList, { toastMessage, toastId: uuidv4() }]);
  };

  const getNewPhotos = useAutoCallback(async (photoCount = 10) => {
    const newPhotos = [];

    for (let i = 0; i < photoCount; i++) {
      newPhotos[i] = {
        photoUrl: getRandomImageUrl(),
        photoId: uuidv4(),
      };
    }

    setPhotos([...photos, ...newPhotos]);
  });

  return {
    getNewPhotos,
    photos,
    favorites,
    setFavorites,
    previewPhoto,
    setPreviewPhoto,
    showToast,
    toastList,
  };
};
