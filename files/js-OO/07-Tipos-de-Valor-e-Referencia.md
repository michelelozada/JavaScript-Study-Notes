> **Tipos de valor e de referência**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
    
**1 - Recapitulando Tipos Primitivos e Não Primitivos**  
&nbsp;  

**1.1 - Tipos Primitivos**  
- Armazenam um único dado   
- São imutáveis  
- Exemplos:  
	- string  
	- number  
	- boolean  
	- null  
	- undefined  
	
&nbsp;   

**2.2 - Tipos Não Primitivos**  
- Armazenam coleções de dados  
- São mutáveis  
- Aqui a aplicação guarda o endereço em memória e não o valor em si    
- Exemplos:   
  - array   
  - object  

&nbsp;   

**2 - Diferenças entre o tipos de valor e tipos de referência**  
&nbsp;  

| **Tipos de valor**       | **Tipos de referência** |
| :---                     | :---                    |
| São os tipos primitivos  | São os tipos não primitivos |  
| Quando é passado um tipo primitivo por parâmetro, é passada uma cópia dele para o método | Quando é passado um tipo não-primitivo por parâmetro, é passada uma referência ao endereço de memória deste objeto |
| Não é passada uma referência, mas sim os valores diretamente | Não é passado objeto em si, mas sim a referência para um espaço em memória |  
| Caso seja alterado algo, o valor que está fora do método não sofre alteração |  Caso seja alterado algo, será realmente alterado o objeto original |

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>