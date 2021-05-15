import { memo } from "react";
import c from "classnames";
import { v4 as uuidv4 } from 'uuid';
import { PhotoPlaceholder } from "./photo-placeholder";
import "./photo-card.scss";
import { useAutoCallback } from "hooks.macro";
import { usePhotoCardLogic } from './use-photo-card-logic';

export const PhotoCard = memo(({ photoUrl, photoId = uuidv4() }) => {
const {imageLoaded, finishImageLoading, onPhotoCardClick} = usePhotoCardLogic();

  const renderPhotoPlaceholder = useAutoCallback(
    () => !imageLoaded && <PhotoPlaceholder />
  );

  return (
    <div onClick={() => onPhotoCardClick(photoUrl, photoId)} className="photo-card">
      {renderPhotoPlaceholder()}
      <img
        onLoad={() => finishImageLoading()}
        className={c("photo-card__photo", {
          "photo-card__photo--loading": !imageLoaded,
        })}
        src={photoUrl}
        alt="pic"
      />
    </div>
  );
});
