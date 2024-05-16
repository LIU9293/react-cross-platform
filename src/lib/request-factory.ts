import { useState, useEffect } from 'react'
import { request } from '@/lib/request'

type RequestObject<T, U> = {
  url?: string
  headers?: Record<string, string>
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: object | undefined
  transformFunction?: (data: T) => U
}

/***
  * T -> Type of the data returned by the request
  * U -> Type of the data returned by the hook
  **/
export function createRequestHook<T, U>(
  requestObject: RequestObject<T, U>
) {
  return function useRequestHook() {
    const [data, setData] = useState<U | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const serverData = await request({
            url: requestObject.url
              ? `https://prod.mogroom.com/api${requestObject.url}`
              : 'https://prod.mogroom.com/api/app/summary',
            method: requestObject.method || 'GET',
            header: requestObject.headers || {}
          }) as T

          if (!requestObject.transformFunction) {
            setData(serverData as unknown as U)
            return
          }

          const transformedData = requestObject.transformFunction(serverData)
          setData(transformedData)
        } catch (err) {
          setError(err as Error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }, [])

    return { data, loading, error }
  }
}