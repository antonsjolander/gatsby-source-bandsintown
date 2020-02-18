# Gatsby Bandsintown Source
Dead simpel Gatsby plugin for sourcing events from Bandsintown API

## Usage

1. First you need a API-KEY from bandsintown. You can get it here: https://www.artists.bandsintown.com/support/api-installation

2. Configure gatsby-config.js

```js
    plugins: [
        {
            resolve: "gatsby-source-bandsintown",
            options: {
                key: "<YOUR-API-KEY>",
                // Add the name of the artist you want to source
                artist: "Viagra boys",
            },
        },
    ]
```

Enjoy!