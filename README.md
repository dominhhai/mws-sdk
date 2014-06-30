mws-js
======

I find Node.js an absolute pleasure to work with and made this rough
Marketplace web services client as one of my first projects. I still find it
beats the snot out of PHP, Java, or C# packages Amazon publishes.  
I use it for real-time integration and/or dashboards for e-commerce clients.
Note: there may be tons of bugs since I updated the formatting to be a lot
more user-friendly, but almost all of the documented functions and objects
should work fine and dandy like cotton candy.

Usage
=====

Super simple example
--------------------

This example submits a product upload (using the XML format, known as
feed type _POST_PRODUCT_DATA):

```javascript
var mws = require('mws'),
    client = new AmazonMwsClient('accessKeyId', 'secretAccessKey', 'merchantId', {});

var sf = new mwsFeedsAPI.requests.SubmitFeed();
sf.params.FeedContents.value = "XML-FORMAT PRODUCT DESCRIPTIONS";
sf.params.FeedType.value = "_POST_PRODUCT_DATA_";
client.invoke(sf, console.log);
```

