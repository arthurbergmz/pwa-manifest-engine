import { IEngineConfig, defaultConfig } from './config'
import { extendTemplate, generatedIconsToAsset, generateManifest } from './utils';
import { IEngineOutput, IEngineAssetOutput } from './output';
import { EngineCache } from './cache';
import { generateCustomIcons } from './output/generators/icons'

export class PwaManifestEngine {
  private _engineConfig: IEngineConfig;
  private _cache: EngineCache;

  public constructor (engineConfig?: IEngineConfig) {
    this._engineConfig = extendTemplate(defaultConfig, engineConfig)
    this._cache = new EngineCache()
  }

  public setPublicPath (publicPath: string | undefined): void {
    (this._engineConfig.options || (this._engineConfig.options = {})).publicPath = publicPath
  }

  public getPublicPath (): string {
    return (this._engineConfig.options || {}).publicPath || ''
  }

  public async run (): Promise<IEngineOutput> {
    const engineOptions = this._engineConfig.options || defaultConfig.options || {}
    const engineManifest = this._engineConfig.manifest || defaultConfig.manifest || {}
    const customIcons = await generateCustomIcons(engineOptions, this._engineConfig.icons)
    console.log(customIcons)
    return {
      manifest: {
        filename: (engineOptions.manifest || {}).filename || 'manifest.webmanifest', // TODO: placeholders/tags
        content: generateManifest(engineManifest, customIcons),
        assets: generatedIconsToAsset(customIcons),
        crossOrigin: (engineOptions.manifest || {}).crossOrigin
      }
    }
  }
}
