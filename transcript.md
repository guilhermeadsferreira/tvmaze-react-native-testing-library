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
