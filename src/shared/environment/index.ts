


export const Environment = {
  /**
   * Define a quantidade de linhas a ser carregada por padrão nas listagens
   */
  LIMITE_DE_LINHAS: 10,
  /**
   * Placeholder exibido nas inputs
   */
  INPUT_DE_BUSCA: 'Persquisar...',
  /**
   * Texto exibido quando nenhum registro é encontrado em uma listagem
   */
  LISTAGEM_VAZIA: 'Nenhum registro encontrado.',
  /**
   * Url base de consultado dos dados dessa aplicação
   */
  URL_BASE: (process.env.REACT_APP_API_ENDPOINT as string),
    /**
   * Key de criptografia do LocalStorage
   */
  PASSWORD_CRIPTO: (process.env.REACT_APP_PASSWORD_CRIPTO as string),
};