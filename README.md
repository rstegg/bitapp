# SERVER
# TODO

- [ ] Proxy for the backend endpoints
- [ ] When an user signs up a new account should be created in backend
- [ ] Order model
- [ ] Order detail
- [x] upload new image
- [x] delete image giving item id




# User Stories

## User sells some products
- User picks a bunch of products
  - App queries for products giving either keyword or barcode
  - App adds as many items as the clerk wants to cart
- User decides to checkout at some point
  - App shows the coin selection menu
  - App request a payment to server
  - Server replies with bitcoinURL, amountUSD, amountCurrency, and payment request id
  - App shows the bitcoinURL as a qrCode
  - Buyer scans and pays
  - App monitors the transaction until the payment is safe and user
  can leave



# Endpoints
-  **post** `/product/search/keyword`
  - **params** keyword, a string to match against
  - **returns** a list of products that match the keyword either in name, or description
-  **post** `/product/search/code`
  - **params** code: AlphaNumeric code
  - **returns** one product that have the exact code
-  **post** `/payment/request`
  - **params**  
    - **currency** LTC | BTC
    - **order** Array of {product, quantity}
  - **returns** {order, payment }
