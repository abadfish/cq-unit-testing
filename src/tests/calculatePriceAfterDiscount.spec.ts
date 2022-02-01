import calculatePriceAfterDiscount from "../priceCalculator/calculatePriceAfterDiscount";

describe("Calculate price after discount", () => {
	it("Returns a price with the discount applied", () => {
		const price = 50
		const discount = 50
		const value = calculatePriceAfterDiscount(price, discount)
		expect(value).toEqual(25)
	})
})