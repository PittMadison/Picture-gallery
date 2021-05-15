import { memo } from "react";
import c from "classnames";
import { PhotoPlaceholder } from "./photo-placeholder";
import { useBooleanState } from "../../hooks";
import "./photo-card.scss";

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
        alt="pic"
        loading="lazy"
      />
    </div>
  );
});
