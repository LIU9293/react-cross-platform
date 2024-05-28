export async function request({
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