import {DependencyList, useEffect} from "react"

export function useAsyncEffect <T>(fun: () => Promise<T>, deps: DependencyList) {
  useEffect(() => { fun() }, deps)
}
