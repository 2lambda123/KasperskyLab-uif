# After Open Source publish checklist

1. Repair npm links

    ```
    (https://registry.npmjs.org)/(@[a-zA-Z\-_\.\d]+)/([a-zA-Z\-_\.\d]+)/([a-zA-Z\-_\.\d]+)

    $1/$2/$3/-/$4

    (https://registry.npmjs.org)/(@[a-zA-Z\-_\.\d]{2,})/([a-zA-Z\-_\.\d]{2,})/([a-zA-Z\-_\.\d]{2,})

    $1/$2/$3/-/$4

    (https://registry.npmjs.org)/([a-zA-Z\-_\.\d]{2,})/([a-zA-Z\-_\.\d]{2,})

    $1/$2/-/$3
    ```

2. Setup author, license, repo url correctly in `package.json`

3. Publish package and replace it in current usages

    ```
    npm publish --access public
    ```
