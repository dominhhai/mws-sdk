var mws = require('./lib/mws.js'),
    client = new mws.Client('AKIAJGREBSMHBMKOVIJA', 'iXa9XSVUhxYoN9u/wsCjUEtLGXJawKhD7NC/Qb0z', 'A1G3C0ZGNICMNG', {});
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

