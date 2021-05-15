import { memo } from "react";
import c from "classnames";
import { PhotoPlaceholder } from "./photo-placeholder";
import { useBooleanState } from "../../hooks";
import "./photo-card.scss";
import { useAutoCallback } from "hooks.macro";

export const PhotoCard = memo(({ photoUrl }) => {
  const [imageLoaded, finishImageLoading] = useBooleanState(false);

  const renderPhotoPlaceholder = useAutoCallback(
    () => !imageLoaded && <PhotoPlaceholder />
  );

  return (
    <div className="photo-card">
      {renderPhotoPlaceholder()}
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
