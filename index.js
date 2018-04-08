async function client() {
    let lotion = require('lotion')
    let client = await
        lotion.connect('a533dc019af1ef3cceccc8061670b25d830409ab6d0dd95d1cec615a2ce756b2')

    let waiVote = await
        client.send({
            from: [
                // tx inputs. each must include an amount:
                {amount: 25, type: 'vote', price: 0.99, senderAddress: 'wai'}
            ],
            to: [
                // tx outputs. sum of amounts must equal sum of amounts of inputs.
                {amount: 25, type: 'vote', price: 1.01}
            ]
        })

    console.log(waiVote)

}

client()
