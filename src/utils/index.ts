/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto'
import { IImageDimensions, IImageTag } from '../processors/image';
import jimp = require('jimp');

export const supportedMimeTypes: string[] = [jimp.MIME_PNG, jimp.MIME_JPEG, jimp.MIME_BMP]

export function extendTemplate (defaultTemplate: any, instance: any): {} {
  if (!instance) return defaultTemplate
  return Object.keys(instance).reduce<any>((obj, property): object => {
    const instanceValue: any = instance[property]
    obj[property] = typeof instanceValue === 'object' && !Array.isArray(instanceValue) ? extendTemplate(defaultTemplate[property], instanceValue) : instanceValue
    return obj
  }, defaultTemplate)
}

export function generateFingerprint (input: string | Buffer): string {
  return crypto.createHash('md5').update(input).digest('hex')
}

export interface Dimension2D {
  x: number;
  y: number;
}

export function formatSizesInput (input: (string | number)): Dimension2D {
  const type = typeof input
  if (type === 'string') {
    const data = (input as string).split('x')
    return { x: +data[0], y: +data[1] }
  } else if (type === 'number') {
    const i = Math.round(input as number)
    return { x: i, y: i }
  }
  return { x: -1, y: -1 }
}

export function formatTemplateByImageTags (template: string, imageTags: IImageTag[]): string {
  return imageTags.reduce((output, tag) => {
    const applied = tag.key.exec(template)
    if (applied) {
      if (tag.transform) {
        return output.replace(applied[0], tag.transform(tag.value, applied))
      }
      return output.replace(applied[0], tag.value)
    }
    return output
  }, template)
}
