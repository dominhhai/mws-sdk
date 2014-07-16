var mws = require('./lib/mws.js'),
    client = new mws.Client( ................
var mwsFeedsAPI = require('./lib/feeds.js');

// Submit a feed!
var sf = new mwsFeedsAPI.requests.SubmitFeed();
sf.params.FeedContents.value = '<?xml version="1.0" encoding="utf-8" ?><AmazonEnvelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="amzn-envelope.xsd"><Header>  <DocumentVersion>1.01</DocumentVersion>  <MerchantIdentifier>A1G3C0ZGNICMNG</MerchantIdentifier></Header><MessageType>Product</MessageType><PurgeAndReplace>false</PurgeAndReplace><Message>  <MessageID>1</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>ABE-1409663511</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9782841355662</Value>    </StandardProductID>    <DescriptionData>      <Title>LALSACE par la route des villages fleuris</Title>    </DescriptionData>  </Product></Message><Message>  <MessageID>2</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9780066210810</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9780066210810</Value>    </StandardProductID>    <DescriptionData>      <Title>Brave Men, Gentle Heroes - American Fathers and Sons in WW2</Title>    </DescriptionData>  </Product></Message><Message>  <MessageID>3</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9780375844461</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9780375844461</Value>    </StandardProductID>    <DescriptionData>      <Title>Surface Tension: A Novel in Four Summers</Title>    </DescriptionData>  </Product></Message><Message>r  <MessageID>4</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9780374166854</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9780374166854</Value>    </StandardProductID>    <DescriptionData>      <Title>Hot, Flat, and Crowded: Why We Need a Green Revolution--and How It Can Renew America</Title>    </DescriptionData>  </Product></Message><Message>  <MessageID>5</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9780495826392</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9780495826392</Value>    </StandardProductID>    <DescriptionData>      <Title>Coloring Book for Sherwoods Human Physiology: From Cells to Systems, 7th (Paperback)</Title>    </DescriptionData>  </Product></Message><Message>  <MessageID>6</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9781557885227</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9781557885227</Value>    </StandardProductID>    <DescriptionData>      <Title>Extreme Pumpkins</Title>    </DescriptionData>  </Product></Message><Message>  <MessageID>7</MessageID>  <OperationType>Update</OperationType>  <Product>    <SKU>BKL9780670020522</SKU>    <StandardProductID>      <Type>UPC</Type>      <Value>9780670020522</Value>    </StandardProductID>    <DescriptionData>      <Title>Wandering Stars</Title>    </DescriptionData>  </Product></Message></AmazonEnvelope>';
sf.params.FeedType.value = "_POST_PRODUCT_DATA_";
client.invoke(sf, function(RESULT){
  console.log(JSON.stringify(RESULT));
  console.log("--------");
  console.log(RESULT["SubmitFeedResult"]);
  console.log("--------");
  console.log(RESULT.SubmitFeedResult);
  console.log("--------");
  console.log(RESULT.SubmitFeedResult.FeedSubmissionInfo.FeedSubmissionId);
});

/*
// Get a submission status:
var sf = new mwsFeedsAPI.requests.GetFeedSubmissionResult();
sf.params.FeedSubmissionId.value = '10348658344';
client.invoke(sf, function(RESULT){
  console.log(JSON.stringify(RESULT));
});
*/
