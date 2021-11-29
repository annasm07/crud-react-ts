describe('Restaurant App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Will render Best Restaurants', () => {
        cy.contains('Best Restaurants');
        cy.contains('Museo Chicote').click();
        cy.get('button').last()
        .contains('Go Back')
    })
})