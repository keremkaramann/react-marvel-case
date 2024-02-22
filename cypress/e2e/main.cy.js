describe("should visit main page", () => {
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

    cy.get('[data-cy="search-btn"]').click();

    cy.get('[href="/detail/1009268"] > .rounded-t-3xl > .rounded-t-xl').click();

    cy.get('[data-cy="detail-header"]').should(
      "have.text",
      "Hero Name: Deadpool"
    );
  });
});
