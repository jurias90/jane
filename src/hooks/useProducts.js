import { useState, useEffect } from 'react'
import data from '../../src/products.json'

const useProducts = ({ search }) => {
  const [products, setProducts] = useState([])
  const searchTopics = {
    name: '',
    brand: '',
    category: '',
    kind: '',
    kind_subtype: '',
    description: '',
  }

  useEffect(() => {
    setProducts(data.products)
    if (search) {
      let searchTerm = search.toLowerCase()
      let tempTopic = ''
      let tempProducts = []
      products.map(element => {
        for (const key in searchTopics) {
          tempTopic = element[key]
          if (!tempTopic) {
            continue
          } else if (tempTopic.toLowerCase().includes(searchTerm)) {
            tempProducts.push(element)
            break
          }
        }
      })
      setProducts(tempProducts)
    }
  }, [search])

  return products
}

export default useProducts
