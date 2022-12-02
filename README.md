# sendrawtransaction
## Proxy for json rpc method to a well known Bitcoin SV node

### Public Server
[https://rpc.ö.network](https://rpc.ö.network)

### Run Your Own
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsirdeggen%2Fsendrawtransaction&env=MAPI_TOKEN&envDescription=Requires%20that%20you%20register%20with%20TAAL%20(a%20well%20known%20miner).&envLink=https%3A%2F%2Fconsole.taal.com&demo-title=Send%20Raw%20Transaction%20Proxy&demo-description=This%20is%20a%20working%20service%20which%20you%20may%20use%20free%20of%20charge.&demo-url=https%3A%2F%2Frpc.xn--nda.network&demo-image=https%3A%2F%2Fimgur.com%2FGiweLOX.jpeg)
  
### Usage
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
