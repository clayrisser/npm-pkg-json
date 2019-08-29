import path from 'path';
import pkgDir from 'pkg-dir';

export interface Pkg {
  [key: string]: any;
}

export default require(path.resolve(
  pkgDir.sync(process.cwd()) || process.cwd(),
  'package.json'
)) as Pkg;
