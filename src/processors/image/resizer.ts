import jimp from "jimp";
import { IImageResizedData, initImageResizedData } from ".";

export async function jimpImageResizer (jimpImage: jimp, mimeType: (string | undefined), width: number, height: number): Promise<IImageResizedData> {
  if (!mimeType) {
    mimeType = jimpImage.getMIME()
  }
  const currentWidth = jimpImage.bitmap.width
  const currentHeight = jimpImage.bitmap.height
  const resizedImage = jimpImage.resize(width, height)
  const buffer = await resizedImage.getBufferAsync(mimeType)
  return initImageResizedData(buffer, mimeType, jimpImage.bitmap.width, jimpImage.bitmap.height, currentWidth, currentHeight)
}

export async function imageResizer (src: string, mimeType: (string | undefined), width: number, height: number): Promise<IImageResizedData> {
  const image = await jimp.read(src)
  return jimpImageResizer(image, mimeType, width, height)
}
