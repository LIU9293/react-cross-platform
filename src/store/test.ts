import { createRequestFactory } from '@/lib/request-factory'

type NameObject = {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  }
}

export const testStore = createRequestFactory<
  { results: NameObject[] },
  string[],
  undefined
>({
  url: 'https://randomuser.me/api/?results=100',
  transformFunction: (data) => {
    return data.results.map((item: NameObject) => {
      return item.name.first + ' ' + item.name.last
    })
  }
})

// const { data, loading, error, fetch } = testStore()