import { Product } from "../types";

/**
 * Filters a list of products and returns products with discount only.
 * The results is sorted, ascending:from lowest to higher net discount value.
 * The net discount value for a product is calculated with the following formula:
 * net_discount = net_price * (100 - discount.percentage) / 100
 * @param {Product[]} productList
 * @returns {Product[]} the list of filtered products
 */
export default function filterAndSortByDiscount(productList:Product[]):Product[]{
	if (productList.length === 0) return []
	const returnList = []
	for(let i = 0; i < productList.length; i++) {
		if (productList[i].discount.percentage > 0) {
			returnList.push(productList[i])
		}
	}
  return returnList.sort((a, b) => a.discount.percentage - b.discount.percentage)
}