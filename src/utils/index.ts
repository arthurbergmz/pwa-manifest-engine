/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto'

export function extendTemplate (defaultTemplate: any, instance: any): {} {
  return Object.keys(defaultTemplate).reduce<any>((obj, property): object => {
    const instanceValue: any = instance[property]
    if (instanceValue !== undefined) {
      obj[property] = typeof instanceValue === 'object' ? extendTemplate(defaultTemplate[property], instanceValue) : instanceValue
    }
    return obj
  }, {})
}

export function generateFingerprint (input: string | Buffer): string {
  return crypto.createHash('md5').update(input).digest('hex')
}
