import path from 'path'
import { IImageData, IImageTag } from '.';
import { generateFingerprint } from '../../utils';

/**
 * Generates tags/placehoders from an image input.
 * @param src Full path of the file.
 * @param imageData Image's data (buffer, dimensions, mime type...)
 */
export function imageTagger (src: string, imageData?: IImageData): IImageTag[] {
  const parsedPath = path.parse(src)
  const tags = [{
    key: 'name',
    value: parsedPath.name
  },
  {
    key: 'ext',
    value: parsedPath.ext
  }]
  if (imageData) {
    tags.push({
      key: 'size',
      value: imageData.dimensions.toString()
    },
    {
      key: 'hash',
      value: generateFingerprint(imageData.buffer)
    })
  }
  return tags
}
