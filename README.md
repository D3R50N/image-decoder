# Image Decoder by Max Dev ( _\_self_\_ )

## Decoding Image

The output is a .txt file with this structure :

```txt
{
  "w": IMAGE_WIDTH // DO NOT CHANGE MANUALLY OR ELSE YOU WILL GET AN ALTERED IMAGE
  "h": IMAGE_HEIGHT // DO NOT CHANGE MANUALLY OR ELSE YOU WILL GET AN ALTERED IMAGE
  "data":[[]] // ARRAY OF ARRAYS OF 4 INTS BETWEEN 0 and 255 (R,G,B,A) REPRESENTING EACH PIXEL COLOR
}
```

## Encoding Text to Get Image

The output is a image file with the specified width (w) and height (h).
