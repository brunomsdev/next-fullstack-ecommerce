import { productsDetailsMocks } from "@/mocks/productsDetails";

interface getProductMockProps {
  id: number
}

export function getProductMock({ id }: getProductMockProps) {
  return productsDetailsMocks.find((product) => product.id === id)
}