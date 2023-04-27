> **Trabalhando com Módulos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**Módulos**
&nbsp; 

\- Cada arquivo do JavaScript é um módulo individual, que protege e encapsula o que há dentro dele.      
\- Com a integração de diferentes módulos, é possível compartilhar código entre diferentes arquivos de um sistema.  
\- Quando uma classe é exportada, ela pode pode ser acessada por outro módulo que a importar.  
\- Para isso, utilizam-se as keywords **`import`** e **`export`** para estabelecer comunicação entre os módulos.  
- **`export`** expõe uma classe ou função para que seja utilizado em outra parte do código.  
- **`import`** chama esta classe ou função para a utilização neste outro arquivo.  

&nbsp;  

**Exportando uma classe**   
```js

export class Cliente {
  (...)
}
```

&nbsp;  

**Importando esta classe**    
```js

import { Cliente } from "./Cliente.js";
```

&nbsp;

**Para que o Node interprete que será trabalhado com módulos, deve ser inserida a seguinte chave e valor no arquivo package.json**
```json

"type": "module" 
```

&nbsp;

**Para que o HTML interprete que será trabalhado com módulos, deve ser inserida a seguinte informação dentro das tags `script`**  
```html

<body>
  <script type="module" src="index.js"></script>
</body>	
```

&nbsp;

**Export default**

```js

export default function funcaoDeExemplo() {
  console.log('Testando export default...');
}
```
```js

import funcaoDeExemplo from './modulo.js';

funcaoDeExemplo();
```


&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>