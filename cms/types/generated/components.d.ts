import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoTitleDescription extends Schema.Component {
  collectionName: 'components_seo_title_descriptions';
  info: {
    displayName: 'title-description';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.title-description': SeoTitleDescription;
    }
  }
}
