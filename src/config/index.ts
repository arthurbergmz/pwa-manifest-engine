import { IWebAppManifest } from './manifest';
import { IEngineOptions } from './options';
import { IEngineIcon } from './icons';
import { ISafariOptions } from './safari';
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
