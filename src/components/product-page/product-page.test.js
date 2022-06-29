import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ProductPage from "./ProductPage";
//1 - crear un test que falle
//2 - crear lo minimo necesario para que el test pase
//3 - Refactorizar lo que ya tenemos

//Estos test validan el comportamiento de mi componente

//setup vendria a representar el renderizado del componente para
//poder ser utilizado en el o los tests
const setup = () => render(<ProductPage></ProductPage>);
const actionButtonGetProduct = () => {
  //fireEvent simula hacer un click
  fireEvent.click(screen.getByText(/get products/i));
};
describe("ProductPage", () => {
  it("must render a title", () => {
    setup();
    //este test lo que espera es que el componente tenga
    //el texto "Pagina de productos" rnederizado en el dom
    expect(screen.getByText(/Pagina de productos/i)).toBeInTheDocument();
  });

  it("must display the product at start", async () => {
    setup();
    const product = screen.getByText(/pelota/i);
    expect(product).toBeInTheDocument();
  });
  it("product must display quantity 0 at start", async () => {
    setup();
    const product = screen.getByText(/0/i);
    expect(product).toBeInTheDocument();
  });
  it("must display more product after click button get again", async () => {
    setup();
    actionButtonGetProduct();
    actionButtonGetProduct();
    const products = await screen.findAllByText(/Item #[0-9]:/i);
    expect(products).toHaveLength(3);
  });
});
