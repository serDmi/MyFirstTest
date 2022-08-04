import { AutoTeatFirst } from "../helpers/test"

describe('access ui test', () => {
    const firstMvid = new AutoTeatFirst()
    it('Test First', () => {
        cy.visit("")
        firstMvid.searchInput.type('Телефон')
        firstMvid.searchIconWrap.click()
        firstMvid.inscriptionCheck.should('contain', 'Найдено 11043 товара в 20 категориях')
        firstMvid.inscriptionScale
        firstMvid.additionProduct
           .first()
           .find('.card-button-block')
           .first()
           .click()
        firstMvid.searchTooltip
           .last()
           .find('mvid-header-icon-tooltip')
           .invoke('addClass', 'hover')
        firstMvid.searchTooltipVisible.should('exist').and('be.visible')
    })
   

})
let a =0
let b = 9
