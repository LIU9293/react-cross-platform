// Just to test the API in node environment
import { createStore } from 'zustand/vanilla'

async function request({
  url,
  method,
  header = {},
  payload = {}
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  header?: Record<string, string>
  payload?: Record<string, any>
}) {
  const response = await fetch(url, {
    method,
    headers: header,
    body: method === 'GET' ? undefined : JSON.stringify(payload)
  })
  
  const json = await response.json()
  return json
}

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

export function createRequestFactory<T, U, P>(requestObject: RequestObject<T, U, P>, initialState?: U) 
{
  return createStore<RequestStore<U>>((set) => ({
    data: initialState || null,
    loading: false,
    error: null,
    fetch: async () => {
      set({ loading: true })

      try {
        const serverData = await request({
          url: requestObject.url
            ? `https://prod.mogroom.com/api${requestObject.url}`
            : 'https://prod.mogroom.com/api/app/summary',
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