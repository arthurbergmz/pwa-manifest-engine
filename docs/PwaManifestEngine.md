# pwa-manifest-engine

> Work in progress

## PwaManifestEngine (engineConfig)

**engineConfig**

Type: `IEngineConfig`

Properties: `options`, `manifest`, `icons`, `favicons` and `safari`.

### `options`

Type: `IEngineOptions`

Engine settings.

### `manifest`

Type: `IWebAppManifest`

Regular manifest options.
If you don't want it to be processed anyhow, set its value to `undefined`.

### `icons`

Type: Array of `IEngineIcon`

Icons to be processed by the engine.

### `favicons`

Type: Array of `IEngineFavicon`

Favicons to be processed by the engine.

### `safari`

Type: `ISafariOptions`

Safari-specific options.
If you don't want it to be processed anyhow, set its value to `undefined`.

### Default value

```javascript
{
  options: {
    publicPath: undefined,
    injectHtml: true,
    includeDirectory: true,
    manifest: {
      crossOrigin: 'none',
      filename: 'manifest.webmanifest',
      destination: '/'
    },
    icons: {
      filename: '[name]_[size].[hash][ext]',
      destination: '/'
    }
  },
  manifest: {
    name: 'App',
    dir: 'auto',
    display: 'browser',
    prefer_related_applications: false
  },
  safari: {
    webAppCapable: 'yes',
    webAppTitle: 'App',
    webAppStatusBarStyle: 'default'
  }
}
```

## Full Example

```javascript
import { PwaManifestEngine } from 'pwa-manifest-engine'

export const pwaManifest = new PwaManifestEngine({
  options: { // default values, plugin config
    publicPath: null, // default value, plugin config
    injectHtml: true, // default value, plugin config
    includeDirectory: true, // default value, plugin config
    manifest: {
      crossOrigin: 'none', // default value, plugin config
      filename: 'manifest.webmanifest',
      destination: '/manifest'
    },
    icons: {
      filename: '[name]_[size].[hash][ext]',
      destination: '/manifest/icons'
    }
  },
  manifest: {
    name: 'App', // default value
    orientation: 'portrait', // default value
    display: 'standalone', // default value
    start_url: '.', // default value
    // ... any other properties
    icons: [ // these icons will not be processed, just copied, so it is exactly like writing a regular Manifest file, following W3C's specification.
      {
        src: 'src/assets/icons/default_512.png',
        sizes: ['512x512'],
        type: 'image/png',
        purpose: 'badge',
        platform: 'windows'
      }
    ]
  },
  icons: [ // these icons are going to be processed, so it follows this API's requirements for "src", "sizes", "filename" and "destination". Other properties are just like writing a regular Manifest file, following W3C's specification.
    {
      src: 'src/assets/icons/default.png',
      sizes: [120, 152, 167, 180, 1024],
      filename: '[name]_[size].[hash][ext]', // optional
      destination: 'icons/default', // optional, default value is iconDestination in pluginOptions
      purpose: 'badge', // optional
      platform: 'play', // optional
      density: 1.0 // optional
    }
  ],
  favicons: [
    {
      src: 'src/assets/icons/favicon_small.png',
      sizes: [16, 32, 48, 64],
      filename: '[name]_[size].[hash][ext]', // optional
      destination: '/favicons' // optional, default value is iconDestination in pluginOptions
    },
    {
      src: 'src/assets/icons/favicon_large.png',
      sizes: [128, 256, 512],
      filename: '[name]_[size].[hash][ext]', // optional
      destination: '/favicons' // optional, default value is iconDestination in pluginOptions
    }
  ],
  safari: {
    webAppCapable: 'yes', // true/false. true as default. renders to 'apple-mobile-web-app-capable'
    webAppTitle: 'App', // default value. renders to 'apple-mobile-web-app-title'
    webAppStatusBarStyle: 'default', // default value. renders to 'apple-mobile-web-app-status-bar-style'
    startupImage: { // renders to 'apple-touch-startup-image'
      src: 'src/assets/icons/ios-startup.png',
      sizes: [1024],
      filename: '[name].[hash][ext]', // optional
      destination: 'icons/ios' // optional, default value is iconDestination in pluginOptions
    },
    maskIcon: { // renders to 'mask-icon'
      src: 'src/assets/icons/ios-pinned.png',
      filename: '[name].[hash][ext]', // optional
      destination: 'icons/ios', // optional, default value is iconDestination in pluginOptions,
      color: '#ffffff'
    },
    icons: [ // renders to 'apple-touch-icons'
      {
        src: 'src/assets/icons/ios-icon.png',
        sizes: [120, 152, 167, 180, 1024],
        filename: '[name]_[size].[hash][ext]', // optional
        destination: 'icons/ios' // optional, default value is iconDestination in pluginOptions
      }
    ]
  }
})
```

> Work in progress
