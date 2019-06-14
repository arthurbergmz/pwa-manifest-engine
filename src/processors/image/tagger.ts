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
  const tags: IImageTag[] = [{
    key: /\[name\]/gi,
    value: parsedPath.name
  },
  {
    key: /\[ext\]/gi,
    value: parsedPath.ext
  }]
  if (imageData) {
    tags.push({
      key: /\[size\]/gi,
      value: imageData.dimensions.toString()
    },
    {
      key: /\[hash(\:\d{1,2})?\]/gi,
      value: generateFingerprint(imageData.buffer),
      transform: (value: string, applied: RegExpExecArray): string => {
        const length = applied[1]
        return value.substr(0, Math.min((length && +length) || 32, 32))
      }
    })
  }
  return tags
}
