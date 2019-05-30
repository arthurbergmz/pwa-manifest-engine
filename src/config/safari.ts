enum SafariWebAppCapable {
  YES = 'yes',
  NO = 'no'
}

enum SafariStatusBarStyle {
  /**
   * The web content is displayed below a regular status bar.
   */
  DEFAULT = 'default',
  /**
   * The web content is displayed below a black status bar.
   */
  BLACK = 'black',
  /**
   * The web content is displayed on the entire screen, partially obscured by a black and translucent status bar.
   */
  BLACK_TRANSLUCENT = 'black-translucent'
}

interface ISafariAsset {
  src: string;
  /**
   * Array of integer numbers or strings.
   *
   * Strings must have two integer numbers (width and height) separated by an "x" character.
   * Example: "128x128".
   */
  sizes?: (number | string)[];
  /**
   * A string containing a template for files' name generation.
   * Available placeholders: "name", "size", 'hash", "ext".
   *
   * If not set, the value presented in "output.icons.filename" will be used.
   * "output.icons.filename" default value: "[name]_[size].[hash][ext]".
   */
  filename?: string;
  /**
   * File's destination folder.
   *
   * If not set, the value presented in "output.icons.destination" will be used.
   */
  destination?: string;
}

interface ISafariMaskIcon {
  /**
   * Use 100% black for all vectors with a transparent background in SVG format.
   *
   * __Note:__ Adjust your artwork as needed for the best presentation in the color you’ve specified. The pinned tab icon will not accept additional colors. You can improve the visibility of your icon by avoiding a light color, such as white, bright yellow, or light gray.
   *
   * __Important:__ The SVG file must be a single layer and the viewBox attribute must be set to "0 0 16 16".
   */
  src: string;
  /**
   * Sets the display color of the image.
   *
   * You can specify a single color with a hexadecimal value (#990000), an RGB value (rgb(153, 0, 0)), or a recognized color-keyword, such as: red, lime, or navy.
   */
  color: string;
  /**
   * A string containing a template for files' name generation.
   * Available placeholders: "name", "size", 'hash", "ext".
   *
   * If not set, the value presented in "output.icons.filename" will be used.
   * "output.icons.filename" default value: "[name]_[size].[hash][ext]".
   */
  filename?: string;
  /**
   * File's destination folder.
   *
   * If not set, the value presented in "output.icons.destination" will be used.
   */
  destination?: string;
}

/**
 * Based on "Configuring Web Applications", "Apple-Specific Meta Tag Keys" and "Creating Pinned Tab Icons", by Apple.
 *
 * https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
 * _Accessed on May 30, 2019 3:19 AM._
 *
 * https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
 * _Accessed on May 30, 2019 3:29 AM._
 *
 * https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
 * _Accessed on May 30, 2019 3:38 AM._
 */
export interface ISafariOptions {
  /**
   * Standalone display mode on Safari.
   *
   * Outputs to "apple-mobile-web-app-capable" tag.
   */
  webAppCapable?: SafariWebAppCapable;
  /**
   * App title.
   *
   * Outputs to "apple-mobile-web-app-title" tag.
   */
  webAppTitle?: string;
  /**
   * Status bar that is displayed at the top of the screen on iOS.
   * "webAppCapable" must be "yes".
   *
   * Outputs to "apple-mobile-web-app-status-bar-style" tag.
   */
  webAppStatusBarStyle?: SafariStatusBarStyle;
  /**
   * Sets a custom startup image.
   *
   * _On iOS, similar to native applications, you can specify a launch screen image that is displayed while your web application launches. This is especially useful when your web application is offline. By default, a screenshot of the web application the last time it was launched is used._
   *
   * Outputs to "apple-touch-startup-image" tag.
   */
  startupImage?: ISafariAsset;
  /**
   * Pinned Sites allow your users to keep their favorite websites open, running, and easily accessible. You can set the icon that the user sees when they pin your site by providing a vector image.
   *
   * Outputs to "mask-icon" tag.
   */
  maskIcon?: ISafariMaskIcon;
  /**
   * _You may want users to be able to add your web application or webpage link to the Home screen. These links, represented by an icon, are called Web Clips._
   *
   * Outputs to an array of "apple-touch-icon" tags.
   */
  icons?: ISafariAsset[];
}
