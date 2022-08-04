export class AutoTeatFirst {
    get headerNavbar(){
        return  cy.get('.app-header-navbar').eq(1)
    }
    get searchInput(){
        return this.headerNavbar.find('input')
    }
    get searchIconWrap(){
        return this.headerNavbar.find('.search-icon-wrap')
    }
    get inscriptionCheck(){
        return cy.get('.srp-title')
    }
    get inscriptionScale(){
        return cy
        .viewport('iphone-6')
        .viewport(1920, 1080)
    }
    get additionProduct(){
        return cy.get('.plp__card-grid').find('.product-cards-row')
    }
    
    get searchTooltip(){
        return cy.get('.app-header-middle')
    }
   
    get searchTooltipVisible(){
        return cy.get('.tooltip__item')
    }
}