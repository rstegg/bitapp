# Endpoints
#### `POST /accounts/:accid/send/:currency/:address/:amountUSD`
Should initiate a payment process, with 2FA if enabled, or with email validation, or
some sort of fraud prevention, all transactions are final, so THIS IS IMPORTANT
this should also send some sort of secure token in the post data to make sure that the
user initiated this action from his device and it was actually him that did it

#### `GET /accounts/:accid/:currency/request/:amountUSD`
bip21 url that frontend can turn into qr, and address to check status

#### `GET /accounts/:accid/:currency/check/address/:someAddress`
	{
		status: ["pending", "confirmed", "good_fee", "bad_amount"],
		amount: Number,
		currency: [LTC|BTC],
		requestId: Number
	}

#### `GET /accounts/:accid/:currency/status`
	{
		balance: {
			confirmed: Number,
			unconfirmed: Number
		},
		requests: [list of results as in check/address]
	}

#### `POST /accounts/new`
	{
		accid: Number
	}

# Models

	Account

	id: Number
	ltcPrivKey: String WIF String
	btcPrivKey: String WIF String

# Items


# Units
