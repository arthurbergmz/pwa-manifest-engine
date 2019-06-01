import jimp from "jimp";
import { IImageResizedData, initImageResizedData } from ".";

export async function jimpImageFormatter(jimpImage: jimp, mimeType: (string | undefined)): Promise<IImageResizedData> {
  if (!mimeType) {
    mimeType = jimpImage.getMIME()
  }
  const currentWidth = jimpImage.bitmap.width
  const currentHeight = jimpImage.bitmap.height
  const buffer = await jimpImage.getBufferAsync(mimeType)
  return initImageResizedData(buffer, mimeType, currentWidth, currentHeight, currentWidth, currentHeight)
}

export async function imageFormatter (src: string, mimeType: (string | undefined)): Promise<IImageResizedData> {
  const image = await jimp.read(src)
  return jimpImageFormatter(image, mimeType)
}
