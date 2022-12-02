export default async function mapiCallback(req, res) {
    try {
        // Store the mapi Callback somewhere useful
        console.dir({ b: req.body }, { depth: null })
        res.status(200).send()
    } catch (error) {
        console.log({ error })
        res.json({ error })
    }
}