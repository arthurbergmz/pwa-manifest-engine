import { IEngineIcon } from "../../config/icons";
import { IImageResizedData } from "../../processors/image";
import { imageResizer } from "../../processors/image/resizer";
import { formatSizesInput } from "../../utils";
import { imageFormatter } from "../../processors/image/formatter";
import { IEngineOptions } from "../../config/options";

const NO_DATA: Promise<IGeneratedEngineIcon[][]> = Promise.resolve([])

export interface IGeneratedEngineIcon {
  resizedImage: IImageResizedData;
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
  /**
   * Stores all other properties that are only relevant in the output object.
   */
  properties?: {};
}

/**
 * Creates a new IGeneratedEngineIcon object based on an ```IEngineIcon``` object and an ```IImageResizedData``` object.
 *
 * @param engineIcon
 * @param resizedImage
 */
function getGeneratedEngineIcon (engineOptions: IEngineOptions, engineIcon: IEngineIcon, resizedImage: IImageResizedData): IGeneratedEngineIcon {
  // TODO: generate filename and destination based on placeholders
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { src: _removedSrc, type: _removedType, sizes: _removedSizes, filename, destination, ...properties } = engineIcon
  return { resizedImage, filename: (filename || (engineOptions.icons || {}).filename), destination: (destination || (engineOptions.icons || {}).destination), properties }
}

export function generateCustomIcons (engineOptions: IEngineOptions, engineIcons?: IEngineIcon[]): Promise<IGeneratedEngineIcon[][]> {
  if (!engineIcons || engineIcons.length === 0) {
    return NO_DATA
  }
  const data = engineIcons.map(async (engineIcon): Promise<IGeneratedEngineIcon[]> => {
    let toProcessImages: Promise<IImageResizedData>[]
    if (engineIcon.sizes) {
      toProcessImages = engineIcon.sizes.map((size: (number | string)): Promise<IImageResizedData> => {
        let formattedSize = formatSizesInput(size)
        return imageResizer(engineIcon.src, engineIcon.type, formattedSize.x, formattedSize.y)
      })
    } else {
      toProcessImages = [imageFormatter(engineIcon.src, engineIcon.type)]
    }
    const processedImages = await Promise.all(toProcessImages);
    return processedImages.map((resizedImage): IGeneratedEngineIcon => getGeneratedEngineIcon(engineOptions, engineIcon, resizedImage))
  })
  return Promise.all(data)
}
