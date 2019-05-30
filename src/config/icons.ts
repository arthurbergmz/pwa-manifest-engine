/**
 * EngineIcon extends ImageResource's properties, but with the following custom properties:
 *  - "sizes";
 *  - "filename";
 *  - "destination".
 */
export interface IEngineIcon {
  src: string;
  type?: string;
  purpose?: string;
  platform?: string;
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
