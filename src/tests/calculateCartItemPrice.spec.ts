import calculateCartItemPrice from '../priceCalculator/calculateCartItemPrice'
import { CartItem, CartPrice, Product, Brand, ProductType } from "../types";

const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name",
}

describe("Given the method calculateCartItemPrice", () => {
	describe("when the discount of a cart item is enabled", () => {
		it("the gross price discounted is less than the gross price", () => {
			const prod: Product = {
				id: "test-product",
				name: "Fish",
				net_price: 10,
				discount: {
					isEnabled: true,
					percentage: 20,
				},
				brand: testBrand,
				type: ProductType.FOOD,
			}
			const cartItem:CartItem = {
				product: prod,
				quantity: 1
			}
			const calculateGrossPrice = jest.fn()
			calculateGrossPrice.mockReturnValue(10.07)
			const calculatePriceAfterDiscount = jest.fn()
			calculatePriceAfterDiscount.mockReturnValue(8.056)
			const calculatedItemPrice = calculateCartItemPrice(cartItem)
			expect(calculatedItemPrice.gross_price_discounted).toBeLessThan(calculatedItemPrice.gross_price)
		})
	})
	describe("when the discount of a cart item is not enabled", () => {
		it("the gross price discounted is the same as the gross price", () => {
			const prod: Product = {
				id: "test-product",
				name: "Fish",
				net_price: 10,
				discount: {
					isEnabled: false,
					percentage: 20,
				},
				brand: testBrand,
				type: ProductType.FOOD,
			}
			const cartItem:CartItem = {
				product: prod,
				quantity: 1
			}
			const calculateGrossPrice = jest.fn()
			calculateGrossPrice.mockReturnValue(10.07)
			const calculatedItemPrice:CartPrice = calculateCartItemPrice(cartItem)
			expect(calculatedItemPrice.gross_price_discounted).toEqual(calculatedItemPrice.gross_price)
		})
	})
})