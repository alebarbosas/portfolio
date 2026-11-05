# Portfólio de Alessandra Barbosa

Site estático, sem dependências e sem etapa de build.

## Executar localmente

Na pasta do projeto, rode:

```powershell
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

## Publicar na Vercel

Importe o repositório na Vercel como projeto **Other**. Não configure comando de build nem diretório de saída: a Vercel publica diretamente os arquivos desta pasta.

## Estrutura

- `index.html`: estrutura e conteúdo da página.
- `css/styles.css`: estilos e layout responsivo.
- `js/app.js`: dados dos projetos, desenhos, competências e interações.
- `assets/images/`: imagens usadas pelo site.
- `Alessandra_Barbosa_Curriculo.pdf`: currículo para download.

Para atualizar projetos, desenhos ou competências, edite as listas correspondentes no início de `js/app.js`.
