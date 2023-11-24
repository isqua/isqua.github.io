# isqua.github.io

In these times, to build this small website, you need to install the following tools:

1. Install [nodejs](https://nodejs.org/en)
1. Install [gohugo](https://gohugo.io/)
1. Install [dart-sass](https://gohugo.io/functions/resources/tocss/#dart-sass)

The exact versions of these tools can be found in [.github/workflows/publish.yml](./.github/workflows/publish.yml).

```bash
# Start development server
hugo serve

# Build files for production
hugo --minify
```
