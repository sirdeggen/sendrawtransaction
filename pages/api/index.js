import mapiClient from '/mapiClient'
import {Tx} from 'openspv'

export default async function handler(req, res) {
  try {
    let rawtx = req.body?.params?.[0]
    let id = req.body?.id
    console.log({ b: req.body })
    let bodyType = 'json'
    if (!rawtx) {
      bodyType = 'plain'
      console.log('the body is plain')
      const unstring = JSON.parse(req.body)
      rawtx = unstring?.params?.[0]
      id = unstring?.id
      if (!rawtx) return res.status(400).send({ error: 'No transaction param provided' })
    } else {
      console.log('the body is json')
    }
    Tx.fromHex(rawtx)
    const mapi = new mapiClient({
      token: process.env.MAPI_TOKEN,
      merkleProofsRequired: false,
      doubleSpendCheck: false,
    })
    const response = await mapi.broadcast(rawtx)
    console.dir(response, { depth: null })
    if (bodyType === 'plain') return res.status(200).send(JSON.stringify({ id, result: response?.details?.txid || response?.txid }))
    return res.status(200).json({ id, result: response?.details?.txid || response?.txid })
  } catch (error) {
    console.log({ error })
    return res.json({ id: req.body?.id, error })
  }
}
