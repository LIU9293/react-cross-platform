
import { create } from 'zustand'
import { request } from '@/lib/request'

type RequestObject<T, U, P> = {
  url?: string
  headers?: Record<string, string>
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: object | undefined
  transformFunction?: (data: T) => U
  payload?: P
}

type RequestStore<U> = {
  data: null | U
  loading: boolean
  error: null | Error
  fetch (): Promise<void>
}

/***
  * T -> Type of the data returned by the request
  * U -> Type of the data returned by the hook
  * P -> Request payload
  **/
export function createRequestFactory<T, U, P>(requestObject: RequestObject<T, U, P>, initialState?: U)
{
  return create<RequestStore<U>>((set) => ({
    data: initialState || null,
    loading: false,
    error: null,
    
    fetch: async () => {
      set({ loading: true })

      try {
        const serverData = await request({
          url: requestObject.url as string,
          method: requestObject.method || 'GET',
          header: requestObject.headers || {},
          payload: requestObject.payload as (Record<string, any> | undefined),
        }) as T

        if (!requestObject.transformFunction) {
          set({ data: serverData as unknown as U, loading: false, error: null })
          return
        }

        const transformedData = requestObject.transformFunction(serverData)
        set({ data: transformedData, loading: false, error: null })
      } catch (err) {
        set({
          error: err as Error,
          loading: false
        })
      }
    }
  }))
}