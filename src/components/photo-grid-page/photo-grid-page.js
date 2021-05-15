import { memo } from "react";
import { useAutoCallback } from "hooks.macro";
import { usePhotoGridPageLogic } from "./use-photo-grid-page-logic";
import { PageHeaderWrapper } from "../page-header-wrapper";
import { PhotoCard } from "../photo-card";
import "./photo-grid-page.scss";

export const PhotoGridPage = memo(() => {
  const { photos } = usePhotoGridPageLogic();

  const renderPhotos = useAutoCallback(() =>
    photos.map((photoUrl, index) => (
      <PhotoCard key={index} photoUrl={photoUrl} />
    ))
  );

  return (
    <PageHeaderWrapper>
      <div className="photo-grid">{renderPhotos()}</div>
    </PageHeaderWrapper>
  );
});
