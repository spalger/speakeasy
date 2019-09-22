interface RequireContext {
  keys(): string[]
  (id: string): any
  <T>(id: string): T
  resolve(id: string): string
  /** The module id of the context module. This may be useful for module.hot.accept. */
  id: string
}

export interface WebpackRequire {
  /**
   * Returns the exports from a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
   */
  (path: string): any
  <T>(path: string): T
  /**
   * Behaves similar to require.ensure, but the callback is called with the exports of each dependency in the paths array. There is no option to provide a chunk name.
   */
  (paths: string[], callback: (...modules: any[]) => void): void
  /**
   * Download additional dependencies on demand. The paths array lists modules that should be available. When they are, callback is called. If the callback is a function expression, dependencies in that source part are extracted and also loaded on demand. A single request is fired to the server, except if all modules are already available.
   *
   * This creates a chunk. The chunk can be named. If a chunk with this name already exists, the dependencies are merged into that chunk and that chunk is used.
   */
  ensure(
    paths: string[],
    callback: (require: NodeRequire) => void,
    errorCallback?: (error: any) => void,
    chunkName?: string,
  ): void
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
    mode?: 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once',
  ): RequireContext
  /**
   * Returns the module id of a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
   *
   * The module id is a number in webpack (in contrast to node.js where it is a string, the filename).
   */
  resolve(path: string): number | string
  /**
   * Like require.resolve, but doesn’t include the module into the bundle. It’s a weak dependency.
   */
  resolveWeak(path: string): number | string
  /**
   * Ensures that the dependency is available, but don’t execute it. This can be use for optimizing the position of a module in the chunks.
   */
  include(path: string): void
  /**
   * Multiple requires to the same module result in only one module execution and only one export. Therefore a cache in the runtime exists. Removing values from this cache cause new module execution and a new export. This is only needed in rare cases (for compatibility!).
   */
  cache: {
    [id: string]: any
  }
}
