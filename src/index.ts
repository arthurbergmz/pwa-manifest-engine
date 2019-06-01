import { IEngineConfig, defaultConfig } from './config'
import { extendTemplate } from './utils';
import { IEngineOutput } from './output';
import { EngineCache } from './cache';
import { generateCustomIcons } from './output/generators/icons'

export class PwaManifestEngine {
  private _engineConfig: IEngineConfig;
  private _cache: EngineCache;

  public constructor (engineConfig?: IEngineConfig) {
    this._engineConfig = extendTemplate(defaultConfig, engineConfig)
    this._cache = new EngineCache()
  }

  public async run (): Promise<IEngineOutput> {
    const engineOptions = this._engineConfig.options || defaultConfig.options || {}
    const customIcons = await generateCustomIcons(engineOptions, this._engineConfig.icons)
    return {}
  }
}