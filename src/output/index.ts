import { IEngineConfig } from "../config";
import { IWebAppManifest } from "../config/manifest";

export interface IEngineAssetOutput {
  filename?: string;
  buffer: Buffer;
}

export interface IEngineImageOutput extends IEngineAssetOutput {
  /**
   * File's MIME type.
   */
  type: string;
  /**
   * Format: `${width}x${height}`
   * Example: 128x128
   */
  size: string;
}

export interface ISafariMaskIconOutput extends IEngineAssetOutput {
  /**
   * Hexadecimal value (#990000), or an RGB value (rgb(153, 0, 0)), or a recognized color-keyword, such as: red, lime, or navy.
   */
  color: string;
}

export interface ISafariOutput {
  'apple-mobile-web-app-capable'?: string;
  'apple-mobile-web-app-title'?: string;
  'apple-mobile-web-app-status-bar-style'?: string;
  'apple-touch-startup-image'?: IEngineAssetOutput;
  'mask-icon'?: ISafariMaskIconOutput;
  'apple-touch-icon'?: IEngineImageOutput[];
}

export interface IManifestOutput {
  filename: string;
  content: IWebAppManifest;
  assets: IEngineAssetOutput[];
  crossOrigin?: string;
}

export interface IEngineOutput {
  manifest?: IManifestOutput;
  favicons?: IEngineImageOutput[];
  safari?: ISafariOutput;
}
