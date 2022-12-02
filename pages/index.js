import Head from 'next/head'
import styles from '../styles/Home.module.css'

const curlExample = `curl --request POST \\
  --url https://rpc.xn--nda.network/api \\
  --header 'Content-Type: application/json' \\
  --data '{
      "method": "sendrawtransaction",
      "params": ["somehex raw tx"],
      "id": "testing"
  }'`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sendrawtransaction</title>
        <meta name="description" content="Proxy for sendrawtransaction rpc calls" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            sendrawtransaction
        </h1>
        <h3>
            Proxy for json rpc method to a well known Bitcoin SV node
        </h3>

        <p className={styles.description}>
            If you normally run this command against your own node:
        <br />
        <code className={styles.codeSnip}>bitcoin-cli sendrawtransaction 01000...</code>
        <br />
            you can run it against this proxy instead.
        </p>
          <code className={styles.code}><pre>{curlExample}</pre></code>
      </main>

      <footer className={styles.footer}>
        Run by Bitcoin Association Engineering Team as an interim solution.
        Please adopt an SPV LiteClient approach for the proper scaling architecture.
        <a href={'https://docs.bitcoinsv.io'}>LiteClient Documentation</a>
      </footer>
    </div>
  )
}
