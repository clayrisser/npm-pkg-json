import path from 'path';
import pkgDir from 'pkg-dir';

export interface Pkg {
  [key: string]: any;
}

const importPaths = Object.keys(require.cache);
const callerPath =
  importPaths.length > 1 ? importPaths[importPaths.length - 2] : process.cwd();

export default require(path.resolve(
  pkgDir.sync(callerPath) || path.dirname(callerPath),
  'package.json'
)) as Pkg;
