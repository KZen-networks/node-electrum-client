const ElectrumClient = require('..')

const main = async () => {
    const ecl = new ElectrumClient(50001, '127.0.0.1', 'tcp')
    await ecl.connect()
    try {
        const ver = await ecl.server_version("0", "1.2")
        console.log(ver)
        const unspent = await ecl.blockchainAddress_listunspent("1LcgGw9r2FJMGPCLGtWeQRNcAwHfXjzNTm")
        console.log(unspent)
        const balance = await ecl.blockchainAddress_getBalance("1LcgGw9r2FJMGPCLGtWeQRNcAwHfXjzNTm")
        console.log(balance)
        const tx = await ecl.blockchainTransaction_get("949bd856593a9dce310db3063898cde8fc8de548e20b9890294a16b3f384fef4", false)
        console.log(tx)
        const vtx = await ecl.blockchainTransaction_get("949bd856593a9dce310db3063898cde8fc8de548e20b9890294a16b3f384fef4", true)
        console.log(vtx)
    } catch(e){
        console.log(e)
    }
    await ecl.close()
}
main().catch(console.log)
