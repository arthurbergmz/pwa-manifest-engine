import jimp = require("jimp");
import { IImageResizedData, initImageResizedData } from ".";

export async function jimpImageResizer (jimpImage: jimp, mimeType: string, width: number, height: number): Promise<IImageResizedData> {
  const currentWidth = jimpImage.bitmap.width
  const currentHeight = jimpImage.bitmap.height
  const resizedImage = await jimpImage.resize(width, height).getBufferAsync(mimeType)
  return initImageResizedData(resizedImage, mimeType, jimpImage.bitmap.width, jimpImage.bitmap.height, currentWidth, currentHeight)
}

export async function imageResizer (src: string, mimeType: string, width: number, height: number): Promise<IImageResizedData> {
  const image = await jimp.read(src)
  return jimpImageResizer(image, mimeType, width, height)
}
