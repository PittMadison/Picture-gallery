import { memo } from "react";
import c from "classnames";
import "./photo-card.scss";
import { PhotoPlaceholder } from "./photo-placeholder/photo-placeholder";
import { useBooleanState } from "../../hooks";

export const PhotoCard = memo(({ photoUrl }) => {
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  return (
    <div className="photo-card">
      {!imageLoaded && <PhotoPlaceholder />}
      <img
        onLoad={() => finishImageLoading()}
        className={c("photo-card__photo", {
          "photo-card__photo--loading": !imageLoaded,
        })}
        src={photoUrl}
        alt="photo"
        loading="lazy"
      />
    </div>
  );
});
