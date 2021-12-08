describe('Restaurant App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Will find the favorite icon', () => {
        cy.contains('Best Restaurants');
        cy.contains('Museo Chicote').click();
        cy.get('button')
        .first().get('figure').find('img')
        .should('have.attr', 'alt')
        .and('include', 'favorite-icon');
        
    });

    it.only('Will render Best Restaurants', () => {
        cy.contains('Find a Restaurant').click();
        // cy.contains()
        
    });
})