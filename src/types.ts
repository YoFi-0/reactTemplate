export type VoidFunc = (() => void) | (() => Promise<void>);
export type Func<T> = (() => T) | (() => Promise<T>)

