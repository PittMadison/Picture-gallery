import { memo } from "react";
import { useAutoCallback } from "hooks.macro";
import { usePhotoGridPageLogic } from "./use-photo-grid-page-logic";
import { PageHeaderWrapper } from "../page-header-wrapper";
import { PhotoCard } from "../photo-card";
import "./photo-grid-page.scss";

export const PhotoGridPage = memo(() => {
  const { photos, photoGridRef } = usePhotoGridPageLogic();

  const renderPhotos = useAutoCallback(() =>
    photos.map((photoUrl, index) => (
      <li key={index}>
        <PhotoCard photoUrl={photoUrl} />
      </li>
    ))
  );

  return (
    <PageHeaderWrapper>
      <div className="photo-grid">
        <ul ref={photoGridRef} className="photo-grid__container">
          {renderPhotos()}
        </ul>
      </div>
    </PageHeaderWrapper>
  );
});
