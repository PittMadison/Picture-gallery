import { memo } from "react";
import { PageHeaderWrapper } from "../page-header-wrapper";
import { useAutoCallback } from "hooks.macro";
import { usePhotoGridPageLogic } from "./use-photo-grid-page-logic";
import './photo-grid-page.scss';

export const PhotoGridPage = memo(() => {
  const { photos } = usePhotoGridPageLogic();

  const renderPhotos = useAutoCallback(() =>
    photos.map((photoUrl, index) => (
      <div key={index} className="photo-card">
        <img src={photoUrl} alt="photo" />
      </div>
    ))
  );

  return (
    <PageHeaderWrapper>
      <div className="photo-grid">
          {renderPhotos()}
      </div>
    </PageHeaderWrapper>
  );
});
