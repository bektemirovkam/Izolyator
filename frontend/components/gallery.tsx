"use client";

import { Media } from "@/types/media";
import { useMemo } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryProps {
  gallery: Media[];
}

export const Gallery = ({ gallery }: GalleryProps) => {
  const images: ReactImageGalleryItem[] = useMemo(() => {
    return gallery.map((g) => {
      return {
        original: g.attributes.url,
        thumbnail: g.attributes.formats.thumbnail?.url || g.attributes.url,
      };
    });
  }, [gallery]);

  return <ImageGallery items={images} />;
};
