export enum IEngineOptionsCrossOrigin {
  NONE = 'none',
  ANONYMOUS = 'anonymous',
  USE_CREDENTIALS = 'use-credentials'
}

export interface IEngineOptionsManifest {
  crossOrigin?: IEngineOptionsCrossOrigin;
  filename?: string;
  destination?: string;
}

export interface IEngineOptionsIcons {
  filename?: string;
  destination?: string;
}

export interface IEngineOptions {
  publicPath?: string;
  injectHtml?: boolean;
  includeDirectory?: true;
  manifest?: IEngineOptionsManifest;
  icons?: IEngineOptionsIcons;
}
