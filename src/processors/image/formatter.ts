import jimp from "jimp";
import fs from "fs";
import { IImageResizedData, initImageResizedData } from ".";
import { promisify } from "util";
import mime from "mime";
import { supportedMimeTypes } from "../../utils";

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
  if (!mimeType) {
    mimeType = mime.getType(src) || ''
  }
  if (mimeType && supportedMimeTypes.indexOf(mimeType) === -1) {
    throw new Error(`You must specify sizes for ${mimeType} files.`)
  }
  const image = await jimp.read(src)
  return jimpImageFormatter(image, mimeType)
}

export async function fileFormatter (src: string, mimeType: (string | undefined), width: number, height: number): Promise<IImageResizedData> {
  if (!mimeType) {
    mimeType = mime.getType(src) || ''
  }
  const buffer = await promisify(fs.readFile)(src)
  return initImageResizedData(buffer, mimeType, width, height, width, height)
}
