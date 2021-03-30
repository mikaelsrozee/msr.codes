// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IComponentRichTextFields {
  /** Content */
  content: Document;
}

export interface IComponentRichText extends Entry<IComponentRichTextFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentRichText";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** URL Slug */
  urlSlug: string;

  /** SEO Config */
  seoConfig: ISeoConfig;

  /** Page Blocks */
  pageBlocks?: IComponentRichText[] | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISeoConfigFields {
  /** title */
  title: string;

  /** description */
  description: string;

  /** siteName */
  siteName: string;

  /** siteUrl */
  siteUrl?: string | undefined;

  /** twitterUser */
  twitterUser: string;

  /** favicon */
  favicon: Asset;

  /** image */
  image: Asset;
}

export interface ISeoConfig extends Entry<ISeoConfigFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "seoConfig";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "componentRichText" | "page" | "seoConfig";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";