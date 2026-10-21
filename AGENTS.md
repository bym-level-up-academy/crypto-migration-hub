<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site images live as static files in public/images and are referenced via import.meta.env.BASE_URL, so the site works both on Lovable and on GitHub Pages (subpath base) without Metaforma.
- GitHub Pages build: GITHUB_PAGES=1 + BASE_PATH enable prerender and vite base in vite.config.ts; the workflow in .github/workflows/deploy.yml publishes dist/client.
