import { getTestingAssetPath, getBufferFromAsset } from "../assets";
import { imageResizer } from "../../src/image/resizer";
import { IImageResizedData, initImageResizedData } from "../../src/image";

const localResizedImage: IImageResizedData = initImageResizedData(getBufferFromAsset('icon-128x128.png'), 'image/png', 128, 128, 200, 200)

it('resizes image/png to 128x128', async (): Promise<void> => {
  const resizedImageBuffer = await imageResizer(getTestingAssetPath('icon.png'), 'image/png', 128, 128)
  expect(JSON.stringify(localResizedImage) === JSON.stringify(resizedImageBuffer)).toBeTruthy()
})
