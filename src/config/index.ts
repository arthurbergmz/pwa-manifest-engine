import { IWebAppManifest, TextDirectionType, DisplayModeType } from './manifest';
import { IEngineOptions, IEngineOptionsCrossOrigin } from './options';
import { IEngineIcon } from './icons';
import { ISafariOptions, SafariWebAppCapable, SafariStatusBarStyle } from './safari';
import { IEngineFavicon } from './favicons';

export interface IEngineConfig {
  /**
   * Engine settings.
   */
  options?: IEngineOptions;
  /**
   * Regular manifest options.
   */
  manifest?: IWebAppManifest;
  /**
   * Icons to be processed by the engine.
   */
  icons?: IEngineIcon[];
  /**
   * Favicons to be processed by the engine.
   */
  favicons?: IEngineFavicon[];
  /**
   * Safari-specific options.
   */
  safari?: ISafariOptions;
}

export const defaultConfig: IEngineConfig = {
  options: {
    injectHtml: true,
    includeDirectory: true,
    manifest: {
      crossOrigin: IEngineOptionsCrossOrigin.NONE,
      filename: 'manifest.webmanifest',
      destination: '/'
    },
    icons: {
      filename: '[name]_[size].[hash][ext]',
      destination: '/'
    }
  },
  manifest: {
    name: 'App',
    dir: TextDirectionType.AUTO,
    display: DisplayModeType.BROWSER,
    // eslint-disable-next-line @typescript-eslint/camelcase
    prefer_related_applications: false
  },
  safari: {
    webAppCapable: SafariWebAppCapable.YES,
    webAppTitle: 'App',
    webAppStatusBarStyle: SafariStatusBarStyle.DEFAULT
  }
}
