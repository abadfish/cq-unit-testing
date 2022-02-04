import productListFilter from '../filterFunctions/productListFilter'
import { muffin, chocolatePremium } from './mocksExample'
import { FilterProperty, ProductType } from "../types";


describe("Product list filter behavior", () => {
	const productList = [muffin, chocolatePremium]
	describe("when no filter or an empty product list is provided", () => {
		const productFilter = {
			property: FilterProperty.NAME,
		}
		const filterList = [productFilter]

		it("returns an empty array", () => {
			const filteredList = productListFilter(productList, [])
			expect(filteredList).toEqual([])
			const noProducts = productListFilter([], filterList)
			expect(noProducts).toEqual([])
		})
	})
	describe("when a brand is provided as a filter", () => {
		const productFilter = {
			property: FilterProperty.BRAND,
			search: "Food Inc",
		}
		const filterList = [productFilter]
		it("returns a list of products with the brand that matches the filter", () => {
			const filteredList = productListFilter(productList, filterList)
			expect(filteredList.length).toBe(1)
			expect(filteredList[0].brand.name).toEqual("Food Inc")
		})
	})
	describe("when a product type is provided as a filter", () => {
		const productFilter = {
			property: FilterProperty.TYPE,
			value: ProductType.FOOD
		}
		const filterList = [productFilter]
		it("returns a list of products that match that type", () => {
			const filteredList = productListFilter(productList, filterList)
			expect(filteredList.length).toBe(2)
			expect(filteredList[0].type).toEqual(ProductType.FOOD)
		})
	})
	describe("when a product name is provided as a filter", () => {
		const productFilter = {
			property: FilterProperty.NAME,
			search: "Muffin",
		}
		const filterList = [productFilter]
		it("returns a list of products with that name", () => {
			const filteredList = productListFilter(productList, filterList)
			expect(filteredList.length).toBe(1)
			expect(filteredList[0].name).toEqual('Muffin')
		})
	})
	describe("when a product discount is provided as a filter", () => {
		const productFilter = {
			property: FilterProperty.DISCOUNT,
			value: false
		}
		const filterList = [productFilter]
		it("returns a list of products with that discount", () => {
			const filteredList = productListFilter(productList, filterList)
			expect(filteredList.length).toBe(2)
			expect(filteredList[0].discount.isEnabled).toEqual(false)
		})
	})
})