

export default async function handler(req, res) {
    const { txid, vout, testnet } = req.body
    const outpoints = [{ txid, n: vout }]
    const Authorization = testnet === 'testnet' ? 'Bearer ' + process.env.NEXT_PUBLIC_MAPI_TEST_TOKEN : 'Bearer ' + process.env.NEXT_PUBLIC_MAPI_TOKEN
    const checkSpentResponse = await (
        await fetch('https://api.taal.com/mapi/txouts', {
            body: JSON.stringify(outpoints),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization,
            },
        })
    ).json()
    const payload = JSON.parse(checkSpentResponse?.payload || {})
    return res.json(payload?.txouts || [])
}