# pwa-manifest-engine

## Filename Placeholders

```javascript
...
filename: '[name]_[size].[hash][ext]'
...
```

**[name]**

Represents the file's name, without its extension.

**[size]**

Represents the width and height of the image, in `[width]x[height]`.

**[hash]**

Represents a signature hash of the file's content. You can specify the hash's length by adding `:LENGTH` (e.g. `[hash:16]` produces a signature hash of 16 characters).

**[ext]**

Represents the file's extension.
