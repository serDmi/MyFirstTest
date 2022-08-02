describe('access ui test', () => {
    it('Test First', () => {
        cy.visit("")
        cy.get('.app-header-navbar').eq(1).find('input').type('Телефон')
        cy.get('.app-header-navbar').eq(1).find('.search-icon-wrap').click()
        cy.get('.srp-title').should('contain', 'Найдено 11036 товаров в 19 категориях')
    })
})