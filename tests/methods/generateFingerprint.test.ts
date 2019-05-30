import { getBufferFromAsset } from "../assets";
import { generateFingerprint } from "../../src/utils";

const localImage = getBufferFromAsset('icon-128x128.png')
const localImageFingerprint = 'bbd0f711fc8f12700f205bb798d69edd'

it('generates a fingerprint for a 128x128 image/png', async (): Promise<void> => {
  const generatedFingerprint = generateFingerprint(localImage)
  expect(generatedFingerprint).toBe(localImageFingerprint)
})
