export type DefineCustomsMethods = {
  [key: string]: {
    action         : Function
    useOnFirstStart: boolean
  }
}