enum IEngineOptionsCrossOrigin {
  NONE = 'none',
  ANONYMOUS = 'anonymous',
  USE_CREDENTIALS = 'use-credentials'
}

interface IEngineOptionsManifest {
  crossOrigin?: IEngineOptionsCrossOrigin;
  filename?: string;
  destination?: string;
}

interface IEngineOptionsIcons {
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
