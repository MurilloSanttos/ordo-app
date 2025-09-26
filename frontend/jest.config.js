/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',

  // 'jsdom' simula um ambiente de navegador (DOM) para testes de componentes React.
  testEnvironment: 'jsdom',

  // Arquivo de setup que roda antes de cada teste. Usado para estender os matchers do Jest.
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Mapeia importações de arquivos de estilo/imagem para um módulo de mock, evitando erros nos testes.
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
