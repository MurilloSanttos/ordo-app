/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // O preset que informa ao Jest para usar o ts-jest para arquivos TypeScript.
  preset: 'ts-jest',

  // O ambiente de teste que será usado para a execução. 'node' é para o backend.
  testEnvironment: 'node',

  // O padrão ou padrões que o Jest usa para detectar arquivos de teste.
  testMatch: ['<rootDir>/tests/**/*.test.ts'],

  // Limpa mocks entre cada teste para garantir o isolamento.
  clearMocks: true,

  // Coleta de cobertura de testes.
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};
