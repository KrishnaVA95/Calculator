# Calculator

Calculadora responsiva.

Estrutura:
O HTML traz uma div .calculator responsável por abranger todo o projeto, dentro dele foi inserido o </span #resultado> a
tag </table> e suas colulas  </td>. Cada tag </td> leva uma tag </button>
responsável por chamar o JavaScript pelo método onkeypress ou onclick.

Através do JavaScript definimos nossas funções (insert, clean, back, calc e teclado)
1. A função insert sera acionada pelo método onclik="insert('parametro')" e imprime o botao clicado na tag span(resultado).
2. A função teclado sera acionada pelo método onkeypress ="teclado()" e imprime a tecla pressionada no teclado.
3. A função calc traz dentro dela a função eval, responsavel por calcular e retornar o valor para o nosso span(resultado).
4. A função back, acionada pelo botão < ou pressionando a tecla backspace, apaga o último valor numérico do span(resultado).
5. A função clean, acionada pelo botão C ou pressionando a tecla Del, faz com que o span(resultado) seja vazio.
