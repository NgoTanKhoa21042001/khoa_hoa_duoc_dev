import React, { ReactNode } from 'react'
import { debug, log } from '../constant'

// nhận tham số là component

export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

// T này đại diện cho TaskInputProp
export default function connect<T>(Component: React.ComponentType<T>) {
  return function (props: T) {
    return <Component {...props} debug={debug} log={log} />
  }
}
