import { useState } from "react";
import { useAutoCallback } from "hooks.macro";
import { getFavorites } from "../services/cache-service";
import { getRandomPhotos } from '../services/photo-service';

export const useRootLogic = () => {
  const [previewPhoto, setPreviewPhoto] = useState({});
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(getFavorites());

  const getNewPhotos = useAutoCallback( () => {
    const newPhotos = getRandomPhotos();
    setPhotos([...photos, ...newPhotos]);
  });

  return {
    getNewPhotos,
    photos,
    favorites,
    setFavorites,
    previewPhoto,
    setPreviewPhoto,
  };
};
