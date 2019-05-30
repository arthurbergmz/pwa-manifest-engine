/**
 * Represents the screen orientations to which a screen can be locked.
 */
enum OrientationLockType {
  /**
   * This is an orientation that means the screen can be locked to any one of portrait-primary, portrait-secondary, landscape-primary and landscape-secondary.
   */
  ANY = 'any',
  /**
   * Refers to either portrait-primary or landscape-primary, depending on the device's usual orientation.
   * This orientation is usually provided by the underlying operating system.
   */
  NATURAL = 'natural',
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait',
  PORTRAIT_PRIMARY = 'portrait_primary',
  PORTRAIT_SECONDARY = 'portrait_secondary',
  LANDSCAPE_PRIMARY = 'landscape-primary',
  LANDSCAPE_SECONDARY = 'landscape-secondary'
}

export enum DisplayModeType {
  FULLSCREEN = 'fullscreen',
  STANDALONE = 'standalone',
  MINIMAL_UI = 'minimal-ui',
  /**
   * Default value.
   */
  BROWSER = 'browser'
}

export enum TextDirectionType {
  LTR = 'ltr',
  RTL = 'rtl',
  /**
   * Default value.
   */
  AUTO = 'auto'
}

export enum ServiceWorkerUpdateViaCache {
  /**
   * Default value.
   */
  IMPORTS = 'imports',
  ALL = 'all',
  NONE = 'none'
}

export enum WorkerType {
  /**
   * Default value.
   */
  CLASSIC = 'classic',
  MODULE = 'module'
}

export interface IServiceWorkerRegistrationObject {
  src: string;
  scope?: string;
  type?: WorkerType;
  update_via_cache?: ServiceWorkerUpdateViaCache;
}

export interface IImageResource {
  src: string;
  sizes?: string;
  type?: string;
  purpose?: string;
  platform?: string;
}

export interface IFingerprint {
  type?: string;
  value?: string;
}

export interface IExternalApplicationResource {
  platform: string;
  url?: string;
  id?: string;
  min_version?: string;
  fingerprints: IFingerprint[];
}

/**
 * W3C Working Draft 30 May 2019.
 *
 * https://www.w3.org/TR/2019/WD-appmanifest-20190530/
 * _Accessed on May 30, 2019 1:49 AM._
 */
export interface IWebAppManifest {
  dir?: TextDirectionType;
  lang?: string;
  name?: string;
  short_name?: string;
  description?: string;
  /**
   * Reminder: the engine won't process these icons. They will be outputted as is.
   */
  icons?: IImageResource[];
  screenshots?: IImageResource[];
  categories?: string[];
  iarc_rating_id?: string[];
  start_url?: string[];
  display?: DisplayModeType;
  orientation?: OrientationLockType;
  theme_color?: string;
  background_color?: string;
  scope?: string;
  serviceworker?: IServiceWorkerRegistrationObject;
  related_applications?: IExternalApplicationResource[];
  /**
   * Default value: false.
   */
  prefer_related_applications?: boolean;
}
