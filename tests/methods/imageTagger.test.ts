import { getTestingAssetPath, getBufferFromAsset } from "../assets";
import { IImageResizedData, initImageResizedData } from "../../src/processors/image";
import { imageTagger } from "../../src/processors/image/tagger";

const localResizedImagePath: string = getTestingAssetPath('icon-128x128.png')
const localResizedImage: IImageResizedData = initImageResizedData(getBufferFromAsset('icon-128x128.png'), 'image/png', 128, 128, 200, 200)

const expectedOutcome = [
  {
    key: 'name',
    value: 'icon-128x128'
  },
  {
    key: 'ext',
    value: '.png'
  },
  {
    key: 'hash',
    value: 'bbd0f711fc8f12700f205bb798d69edd'
  },
  {
    key: 'size',
    value: '128x128'
  }
]

it('full tagging of an 128x128 image/png', (): void => {
  const tags = imageTagger(localResizedImagePath, localResizedImage)
  expect(tags).toEqual(expect.arrayContaining(expectedOutcome))
})
