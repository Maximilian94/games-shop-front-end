/// <reference types="cypress" />

describe('Testes de ordenação de produtos', () => {
  it('Testa ordenação de produtos por preço ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Preço/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty Infinite Warfare');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '49.99');

    cy.findByRole('button', { name: /Preço/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty WWII');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '249.99');
  });

  it('Testa ordenação de produtos por avaliações ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Avaliações/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Terra Média: Sombras de Mordor');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '79.99');

    cy.findByRole('button', { name: /Avaliações/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Shards of Darkness');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '71.94');
  });

  it('Testa ordenação de produtos por ordem alfabetica ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Alfabética/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty Infinite Warfare');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '49.99');

    cy.findByRole('button', { name: /Alfabética/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'The Witcher III Wild Hunt');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '119.50');
  });

  it('Ordenação de produtos por com inputs zerados', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=min-price-range]').type('0');
    cy.get('[data-cy=max-price-range]').type('0');
    cy.get('[data-cy=filter-price-range]').click();
    cy.get('[data-cy=product-card-title]').its('length').should('eq', 9)
  });

  it('Ordenação de produtos com preço minimo maior que o maximo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=min-price-range]').type('50');
    cy.get('[data-cy=max-price-range]').type('0');
    cy.get('[data-cy=filter-price-range]').click();
    cy.get('[data-cy=product-card-title]').should('not.exist')
  });

  it('Testa ordenação de produtos por preço', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=min-price-range]').type('50');
    cy.get('[data-cy=max-price-range]').type('100');
    cy.get('[data-cy=filter-price-range]').click();
    cy.get('[data-cy=product-card-title]').its('length').should('eq', 3)
  });

  it('Buscar produtos pelo nome', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=search-product-input]').type('fifa');
    cy.get('[data-cy=search-product]').click();
    cy.get('[data-cy=product-card-title]').its('length').should('eq', 1);
    cy.get('[data-cy=product-card-title]').first().should('include.text', 'FIFA');
  });

  it('Recebe todos os produtos se a buscar por nome for vazia', () => {
    cy.get('[data-cy=search-product-input]').clear();
    cy.get('[data-cy=search-product]').click();
    cy.get('[data-cy=product-card-title]').its('length').should('eq', 9);
  });
});
