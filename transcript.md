# Transcrição

## O que não testar ?

- Detalhes de Implementação
  - São coisas que os usuário não usarão, verão ou conheçerão.
  - Por exemplo dar um setState
  - Fragiliza nosso teste
  - Fica longe da realidade, pois o usuário não vai fazer certo tipos de coisas
  - Deixa o teste sensivel
    - Can break when refactor application code; **False negatives**
    - May not fail when you break application code; **False positives**

## O que Testar ?

- Propriedades (Programador)
  - O programador interage com as propriedades passadas para o componente.
- Renderização (Usuário)
  - Usuário interage com componentes visuais, clicando em botões e inputando dados

## Cobertura (Coverage)

- Será que realizei testes o suficiente ?
  - Relatório sobre o quanto nós estamos testando

## Módulos Nativos e Mocks

- Como "mockar" módulos nativos (RN Gesture Handler)

## Separação de Responsabilidades (Camadas)

- Apresentação (UI - Screen Components) -> API (Back-end)
- Apresentação (UI - Screen Components) -> Async Storage

  - Com isso sua UI precisa conhecer detalhes de como: uma API, Storage ou Serviço de terceiro funciona.

- Apresentação (UI - Screen Components) -> (Funções ou Hooks) -> Service -> Funções -> API (Back-end)
- Apresentação (UI - Screen Components) -> (Funções ou Hooks) -> Service -> Funções -> Async Storage
  - Criamos uma camada intermediária, uma camada de serviço.
  - Podemos fazer transformação de dados para preparar para a exibição na UI

## Tópicos

- Jest x React Native Testing Library
- Configurar libs e setup
- Estrutura de pasta e arquivos
- Jest CLI
- Jest Runner
- Debug Testes
- Coverage Report
- Suit de testes
- Tipos de Usuário
- Queries e Variants
- Enzyme e Detalhes de Implementação
- Lidar com módulos nativos
- Lida com Side Effect com act
- Usar TextMatch, Regex
- Usar fireEvent
- Mock com Jest.fn
- Mock de API
- Usar spyOn para espionar funções internas
- Usar mockImplementation para dar um override em funções internas
- Usar mockResolvedValue como sendo uma forma resumida do mockImplementation
- Usuar mockResolvedValueOnce para realizar um mock uma única vez
- Usar beforeAll para realizar alguma ação no inicio da suit de test
- Usar beforeEach para realizar alguma ação antes de cada test
