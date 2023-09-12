import Head from 'next/head'
import {createRef, useEffect, useState} from 'react'

const curlExample = `curl --request POST \\
  --url https://rpc.xn--nda.network/api \\
  --header 'Content-Type: application/json' \\
  --data '{
      "method": "sendrawtransaction",
      "params": ["somehex raw tx"],
      "id": "testing"
  }'`

export default function Home() {
    const [payload, setPayload] = useState({})
    const [values, setValues] = useState({})

    async function checkSpent() {
        const { txid, vout, testnet } = values
        const response = await (await fetch('/api/spent', {
            body: JSON.stringify({ txid, vout, testnet }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })).json()
        setPayload(response)
    }

    const updateValues = () => {
        const txid = document.getElementById('txid').value
        const vout = document.getElementById('vout').value
        const testnet = document.getElementById('network').value
        console.log({ txid, vout, testnet })
        setValues({ txid, vout, testnet })
    }

    return (
        <div className={'container'}>
            <Head>
                <title>sendrawtransaction</title>
                <meta name="description" content="Proxy for sendrawtransaction rpc calls" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={'main'}>
                <h1 className={'title'}>
                    check spent
                </h1>
                <h3>
                    Proxy for json rpc method to a well known Bitcoin SV node
                </h3>

                <input id='txid' type={'text'} placeholder={'txid'} onChange={updateValues}/>
                <input id='vout' type={'text'} placeholder={'vout'} onChange={updateValues} />
                <select id='network' onChange={updateValues}>
                    <option value='mainnet'>mainnet</option>
                    <option value='testnet'>testnet</option>
                </select>
                <button id='submit' onClick={checkSpent}>submit</button>
                <footer className={'footer'}>
                    <json className={'json'}><pre>{JSON.stringify(payload, null, 2)}</pre></json>
                </footer>
            </main>

        </div>
    )
}
