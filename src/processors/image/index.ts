export interface IImageDimensions {
  width: number;
  height: number;
  /**
   * Suggestion:
   *
   *     function (): string {
   *         return `${this.width}x${this.height}`
   *     }
   */
  toString: () => string;
}

export interface IImageData {
  buffer: Buffer;
  dimensions: IImageDimensions;
  type: string;
}

export interface IImageResizedData extends IImageData {
  previousDimensions: IImageDimensions;
}

/**
 * Initialize a new object that suits ImageResizedData.
 *
 * @param buffer Image buffer.
 * @param mimeType Image's mime type.
 * @param width Image's current width.
 * @param height Image's current height.
 * @param previousWidth Image's previous width.
 * @param previousHeight Image's previous height.
 */
export function initImageResizedData (buffer: Buffer, mimeType: string, width: number, height: number, previousWidth: number, previousHeight: number): IImageResizedData {
  return ({
    buffer,
    dimensions: {
      width: width,
      height: height,
      toString: function (): string {
        return `${this.width}x${height}`
      }
    },
    type: mimeType,
    previousDimensions: {
      width: previousWidth,
      height: previousHeight,
      toString: function (): string {
        return `${this.width}x${height}`
      }
    }
  })
}

export interface IImageTag {
  key: RegExp;
  value: string;
  transform?: (value: string, applied: RegExpExecArray) => string;
}
