import { memo } from "react";
import { useAutoCallback } from "hooks.macro";
import { usePhotoGridPageLogic } from "./use-photo-grid-page-logic";
import { PageHeaderWrapper } from "../page-header-wrapper";
import { PhotoCard } from "../photo-card";
import { PhotoGridLoader } from "./photo-grid-loader";
import "./photo-grid-page.scss";

export const PhotoGridPage = memo(() => {
  const { photos, photoGridRef, onGridScroll, photosLoading, isFavoritesPage } =
    usePhotoGridPageLogic();

  const renderPhotos = useAutoCallback(() =>
    photos.map(({ photoUrl, photoId }, index) => (
      <li key={index}>
        <PhotoCard {...{ photoUrl, photoId, isFavoritesPage }} />
      </li>
    ))
  );

  const renderLoader = useAutoCallback(
    () => photosLoading && <PhotoGridLoader />
  );

  return (
    <PageHeaderWrapper>
      {renderLoader()}
      <div ref={photoGridRef} onScroll={onGridScroll} className="photo-grid">
        <ul className="photo-grid__container">{renderPhotos()}</ul>
      </div>
    </PageHeaderWrapper>
  );
});
