> **Trabalhando com Módulos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**Módulos**
&nbsp; 

- Cada arquivo do JavaScript é um módulo individual, que protege e encapsula o que há dentro dele.      
&nbsp; 

- Com a integração de diferentes módulos, é possível compartilhar código entre diferentes arquivos de um sistema.  
&nbsp; 

- Quando uma classe é exportada, ela pode pode ser acessada por outro módulo que a importar.  
&nbsp; 

- Para isso, utiliza-se as keywords **`import`** e **`export`** para estabelecer comunicação entre os módulos.  

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

**Para que o HTML interprete que será trabalhado com módulos, deve ser inserida a seguinte informação na tag `script`**  
```html

<body>
  <script type="module" src="index.js"></script>
</body>	
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>