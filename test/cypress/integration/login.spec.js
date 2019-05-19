describe('Login tests', () => {
    it('should load login page', () => {
        cy.visit('/#/login');
    });

    it('should login a user', () => {
        cy.visit('/#/login');
        cy.get('#input-username').type('Test User');
        cy.wait(2000);
        cy.get('#btn-login').click();
        cy.visit('/#');
    });
});