# sendrawtransaction
### Proxy for json rpc method to a well known Bitcoin SV node

If you normally run this command against your own node:
```bash
bitcoin-cli sendrawtransaction 01000...
```
then you can run it against this proxy instead.

```bash
curl --request POST \
  --url https://rpc.xn--nda.network/api \
  --header 'Content-Type: application/json' \
  --data '{
      "method": "sendrawtransaction",
      "params": ["somehex raw tx"],
      "id": "testing"
  }'
  ```

You can use the public service at: [https://rpc.ö.network](https://rpc.ö.network) or you can run your own instance of this server on vercel:
[Deploy](https://vercel.app)
