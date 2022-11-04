import mapiClient from '/mapiClient'
import {Tx} from 'openspv'

export default async function handler(req, res) {
  try {
    const rawtx = req.body?.params?.[0]
    if (!rawtx) return res.status(400).send({ error: 'No transaction param provided' })
    Tx.fromHex(rawtx)
    const mapi = new mapiClient({
      token: process.env.MAPI_TOKEN,
      merkleProofsRequired: false,
    })
    const response = await mapi.broadcast(rawtx)
    console.dir(response, { depth: null })
    return res.status(200).json({ id: req.body?.id, result: response?.txid })
  } catch (error) {
    console.log({ error })
    return res.json({ id: req.body?.id, error })
  }
}
