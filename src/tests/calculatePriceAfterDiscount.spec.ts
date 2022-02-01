import calculatePriceAfterDiscount from "../priceCalculator/calculatePriceAfterDiscount";
import { Brand, Product, ProductType } from "../types";

const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name",
};


describe("Calculate price after discount", () => {
	it("Returns a price with the discount applied", () => {
		const prodWithDiscount: Product = {
      name: "Nike Sport Shoes",
      id: "test-product-with-discount",
      net_price: 16,
      discount: {
        isEnabled: true,
        percentage: 12,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };
		const value = calculatePriceAfterDiscount(prodWithDiscount.net_price, prodWithDiscount.discount.percentage)
		expect(value).toEqual(16 * (1 - .12) )
	})
})