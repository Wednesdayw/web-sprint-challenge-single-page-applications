//tests
describe("Inputs and submit button", () => {
    it("can navigate to the site", () => {
    
      cy.visit("http://localhost:3000/pizza");
    
      cy.url().should("include", "localhost");
    });
    it("submit button is disabled", () => {
     
      cy.get("#submitBtn").should("be.disabled");
    });
  
    it("can type a new name", () => {
     
      cy.get('input[name="name"]').type("Meow").should("have.value", "Meow");
    });
    it("can add new address checkbox", () => {
      cy.get('input[name="address"]')
        .type("45 address blah meow 33144")
        .should("have.value", "45 address blah meow 33144");
    });
    it("can add new insructions", () => {
      cy.get('input[name="specialInstructions"]')
        .type("I want more cheeeeeze")
        .should("have.value", "I want more cheeeeeze");
    });
  
    it("can click the checkbox", () => {
      cy.get('[id="checkbox"]').check();
    });
    it("can submit the form new", () => {
      cy.get("#submitBtn").click();
    });
  
    it("can go back to reorder page",()=>{
        cy.get("#reOrder").click()
    })
  });