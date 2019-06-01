/* eslint-disable @typescript-eslint/camelcase */
import { PwaManifestEngine } from '../../dist'
import { getTestingAssetPath } from '../assets';

const manifestEngine = new PwaManifestEngine({
  manifest: {
    name: 'ThisIsMyApp',
    short_name: 'MyApp'
  },
  icons: [
    {
      src: getTestingAssetPath('icon.png'),
      sizes: [16, 24],
      platform: 'android'
    },
    {
      src: getTestingAssetPath('icon.png'),
      sizes: [32],
      platform: 'android'
    }
  ]
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
manifestEngine.run().then((output) => {
  console.log(JSON.stringify(output))
})
