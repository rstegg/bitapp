#### `GET    /accounts/:userid/deposit/[USD|BTC|LTC]`
Returns a new address derived from the user id

#### `POST /accounts/:userid/send/[USD|BTC|LTC]/:address/:amountUSD`
Should initiate a payment process, with 2FA if enabled, or with email validation, or
some sort of fraud prevention, all transactions are final, so THIS IS IMPORTANT
this should also send some sort of secure token in the post data to make sure that the
user initiated this action from his device and it was actually him that did it

#### `GET /btc/request/:amountUSD`
bip21 url that frontend can turn into qr, and address to check status

#### `GET /ltc/request/:amountUSD`
bip21 url that frontend can turn into qr, and address to check status

#### `GET /check/address/:someAddress`
	{
		status: ["pending", "confirmed", "good_fee", "bad_amount"],
		amount: Number,
		currency: [LTC|BTC],
		requestId: Number
	}

#### `GET /btc/status`
	{
		balance: {
			confirmed: Number,
			unconfirmed: Number
		},
		requests: [list of results as in check/address]
	}

#### `GET /ltc/status`
	{
		balance: {
			confirmed: Number,
			unconfirmed: Number
		},
		requests: [list of results as in check/address]
	}
