mws-sdk
======

Originally forked from [dfsklar/mws-js](https://github.com/dfsklar/mws-js). This is another continuation of mws-js with a more standarized node module setup.


Examples
--------------------

```javascript
var mwsOrderAPI = require('./lib/orders.js');

var marketplaceId = "ATVPDKIKX0DER";

var sf = new mwsOrderAPI.requests.ListOrders({"marketplaceId": marketplaceId});
sf.params.MarketplaceId.value = marketplaceId;
sf.params.CreatedAfter.value = "2014-07-13";
client.invoke(sf, function(RESULT){
  console.log("--------");
  console.log(JSON.stringify(RESULT));
  console.log("--------");
});
```

```javascript
var mwsOrderAPI = require('./lib/orders.js');

var marketplaceId = "ATVPDKIKX0DER";

var sf = new mwsOrderAPI.requests.ListOrderItems();
sf.params.AmazonOrderId.value = "111-1715221-5800265";
client.invoke(sf, function(RESULT){
  console.log("--------");
  console.log(JSON.stringify(RESULT));
  console.log("--------");
});
```
