# NFS-e Barra Mansa# Getting Started with Create React App



Sistema moderno e profissional para emissão de Notas Fiscais de Serviço eletrônicas em Barra Mansa.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## 🚀 Características## Available Scripts



- **Arquitetura Moderna**: Estrutura baseada em features com separação de responsabilidadesIn the project directory, you can run:

- **Design System**: Tema centralizado com paleta de cores verde e branco

- **Responsivo**: Interface adaptada para desktop e mobile### `npm start`

- **TypeScript**: Tipagem completa para maior segurança e produtividade

- **Testes**: Cobertura de testes com React Testing LibraryRuns the app in the development mode.\

- **Padronização**: ESLint e Prettier configurados para consistência do códigoOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.



## 🛠 TecnologiasThe page will reload if you make edits.\

You will also see any lint errors in the console.

- **React 18** com TypeScript

- **React Router DOM** para navegação### `npm test`

- **Styled Components** para estilização

- **React Testing Library** para testesLaunches the test runner in the interactive watch mode.\

- **ESLint + Prettier** para padronização de códigoSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## 📁 Estrutura do Projeto### `npm run build`



```Builds the app for production to the `build` folder.\

src/It correctly bundles React in production mode and optimizes the build for the best performance.

├── components/

│   └── shared/           # Componentes compartilhadosThe build is minified and the filenames include the hashes.\

│       ├── Header.tsxYour app is ready to be deployed!

│       ├── Footer.tsx

│       ├── Layout.tsxSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

│       └── index.ts

├── features/             # Features organizadas por domínio### `npm run eject`

│   ├── Home/

│   │   ├── Home.tsx**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

│   │   ├── __tests__/

│   │   └── index.tsIf you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

│   ├── Login/

│   │   ├── Login.tsxInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

│   │   ├── __tests__/

│   │   └── index.tsYou don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

│   └── Dashboard/

│       ├── Dashboard.tsx## Learn More

│       ├── __tests__/

│       └── index.tsYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

├── hooks/                # Custom hooks

├── styles/               # Sistema de design e temasTo learn React, check out the [React documentation](https://reactjs.org/).

│   ├── theme.ts
│   ├── GlobalStyle.ts
│   └── index.ts
├── types/                # Definições de tipos TypeScript
│   └── styled.d.ts
├── utils/                # Funções utilitárias
├── App.tsx
└── index.tsx
```

## 🎨 Design System

### Paleta de Cores

- **Primária**: Verde (#10B981) - Cor principal do sistema
- **Fundo**: Branco (#FFFFFF) - Cor de fundo principal
- **Fundo Secundário**: Cinza claro (#F9FAFB) - Cards e seções
- **Texto**: Tons de cinza para hierarquia visual

### Tipografia

- **Fonte Principal**: Inter (Google Fonts)
- **Tamanhos**: Sistema escalável de 12px a 36px
- **Pesos**: 300 (light) a 700 (bold)

### Responsividade

- **Breakpoints**: 640px, 768px, 1024px, 1280px, 1536px
- **Design Mobile-First**: Interface otimizada para dispositivos móveis

## 🚦 Scripts Disponíveis

### `npm start`
Inicia o servidor de desenvolvimento em modo watch.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Executa os testes em modo interativo.

### `npm run build`
Compila a aplicação para produção na pasta `build`.

### `npm run eject`
**Nota: Esta operação é irreversível!**
Remove as dependências do Create React App e expõe as configurações.

## 🧪 Testes

O projeto inclui testes unitários para:
- Componentes principais (Header, Home, Login)
- Renderização correta dos elementos
- Interações do usuário
- Navegação entre páginas

Execute os testes com:
```bash
npm test
```

## 🔧 Configuração

### ESLint
Configurado com regras para React, TypeScript e Prettier.

### Prettier
Formatação automática com:
- Single quotes
- Semicolons
- 2 espaços de indentação
- Linha máxima de 80 caracteres

## 📱 Features Implementadas

### Home
- Landing page com apresentação do sistema
- Cards de recursos principais
- Design responsivo e atrativo

### Login
- Formulário de autenticação
- Validação de campos
- Interface moderna e acessível

### Dashboard
- Visão geral com estatísticas
- Cards de ações rápidas
- Layout responsivo com grid

## 🚀 Como Começar

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd fed-nfse-barra-mansa
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📋 Próximos Passos

- [ ] Implementar autenticação real
- [ ] Conectar com APIs de backend
- [ ] Adicionar formulários de emissão de NFS-e
- [ ] Implementar relatórios e dashboard avançado
- [ ] Adicionar testes E2E
- [ ] Configurar CI/CD
- [ ] Implementar PWA

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Padrões de Código

- Use TypeScript para tipagem
- Siga as convenções do ESLint configurado
- Componentes devem ser funcionais com hooks
- Nomes de arquivos em PascalCase para componentes
- Testes na pasta `__tests__` dentro de cada feature
- CSS-in-JS com styled-components

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para a Prefeitura de Barra Mansa