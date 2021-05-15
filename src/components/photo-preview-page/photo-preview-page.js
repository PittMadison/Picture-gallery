import { memo } from "react";
import { PageHeaderWrapper } from "../page-header-wrapper";
import { PhotoCard } from "../photo-card";
import { useRootContext } from "../../root/root.context";
import { useHistory } from "react-router-dom";
import { useAutoEffect } from "hooks.macro";
import { FavoritesButton } from "./favorites-button";
import "./photo-preview-page.scss";

export const PhotoPreviewPage = memo(() => {
  const { push } = useHistory();
  const {
    previewPhoto: { photoUrl },
    setPreviewPhoto,
  } = useRootContext();

  if (!photoUrl) {
    push("/");
  }

  useAutoEffect(() => {
    return () => setPreviewPhoto({});
  });

  return (
    <PageHeaderWrapper>
      <div className="photo-preview">
        <PhotoCard {...{ photoUrl, isPreview: true }} />
        <FavoritesButton />
      </div>
    </PageHeaderWrapper>
  );
});
