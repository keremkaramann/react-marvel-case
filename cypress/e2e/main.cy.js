describe("Just visit e2e test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the title", () => {
    cy.get('[data-cy="label-title"]').should("have.text", "Search for heroes:");
  });

  const userInput = "deadpool";

  it("should have the value input", () => {
    cy.get('[data-cy="input-field"]')
      .type(userInput)
      .should("have.value", userInput);
  });
});
