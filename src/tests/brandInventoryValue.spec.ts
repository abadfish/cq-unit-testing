import { Brand } from "../types";
import { foodBrand, foodBrandPremium, muffin, bagelsDiscounted, chocolatePremium } from './mocksExample'
import { brandInventoryValue } from "../priceCalculator/brandInventoryValue";

// Arrange
const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name",
};
describe("Brand inventory value", () => {
  describe("when the inventory contains one brand item", () => {
    it("returns the price of the item", () => {
      // ACT
      const value = brandInventoryValue([chocolatePremium], foodBrandPremium);
      // ASSERT
      expect(value).toEqual(120);
    });
    it("returns the correct brand of the item", () => {
        const value = brandInventoryValue([], testBrand);
        expect(value).toEqual(0);
      });
  });
	describe("when a brand is chosen", () => {
    it("returns zero if there are no products with a brand id that matches the chosen brand", () => {
      const value = brandInventoryValue([muffin, bagelsDiscounted], testBrand);
      expect(value).toEqual(0);
    });
    
    it("returns the sum of the prices of the products with a brand id that matches the chosen brand", () => {
			const value = brandInventoryValue([muffin, bagelsDiscounted], foodBrand);
      expect(value).toEqual(120);
    });
  });
});
