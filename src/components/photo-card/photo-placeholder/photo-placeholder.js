import { memo } from "react";
import { PhotoPlaceholderIcon } from "../icons";
import './photo-placeholder.scss';

export const PhotoPlaceholder = memo(() => {
  return (
    <div className="photo-placeholder">
        <div className="photo-placeholder__activity"/>
      <PhotoPlaceholderIcon className='photo-placeholder__icon' />
    </div>
  );
});
