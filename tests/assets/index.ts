import path from "path";
import { createWriteStream, createReadStream, readFileSync } from "fs";

/**
 * Returns resolved path for an asset used in tests.
 *
 * @param filename File path, name and extension. {projectRoot}/tests/assets/{filename}
 */
export function getTestingAssetPath (filename: string): string {
  return path.resolve(path.join('tests', 'assets', ...filename.split('/')))
}

export function saveBufferOfAsset (buffer: Buffer, destination: string): void {
  const writeStream = createWriteStream(getTestingAssetPath(destination), { flags: 'w' })
  writeStream.write(buffer)
  writeStream.end()
}

export function getBufferFromAsset (filename: string): Buffer {
  return readFileSync(getTestingAssetPath(filename))
}
