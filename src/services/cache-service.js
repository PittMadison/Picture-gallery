export const addPhotoToFavorites = (photoUrl, photoId) => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    const extendedFavorites = [{ photoUrl, photoId }, ...JSON.parse(favorites)];
    localStorage.setItem("favorites", JSON.stringify(extendedFavorites));
  } else {
    localStorage.setItem("favorites", JSON.stringify([{ photoUrl, photoId }]));
  }
};

export const removeFromFavorites = (id) => {
  const favorites = localStorage.getItem("favorites");
  const filteredFavorites = JSON.parse(favorites).filter(
    ({ photoId }) => id !== photoId
  );
  localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};
