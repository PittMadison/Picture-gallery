import { memo } from "react";
import { PhotoPlaceholderIcon } from "../icons";
import transparentImageUrl from "./images/transparent-image.png";
import "./photo-placeholder.scss";

export const PhotoPlaceholder = memo(() => {
  return (
    <>
      <div className="photo-placeholder">
        <div className="photo-placeholder__activity" />
        <PhotoPlaceholderIcon className="photo-placeholder__icon" />
      </div>
      <img
        className="photo-card__photo"
        src={transparentImageUrl}
        alt="transparency"
      />
    </>
  );
});
