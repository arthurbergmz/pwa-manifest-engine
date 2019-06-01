/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto'
import { IImageDimensions } from '../processors/image';

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
    return { x: (input as number), y: (input as number) }
  }
  return { x: -1, y: -1 }
}
