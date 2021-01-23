var loadingContent = false;
var lastResponseId = -1;

const HMM_URL = "https://szy.wtf/sslapi/hmm-wtf/";
const PROJ_URL = "https://szy.wtf/sslapi/hmm-projects/";

var providerUrl;

function InitialContentRequest()
{
    console.log("Sending: " + providerUrl + "request/init");

    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        //loadingContent = false;
    };
    xhttp.open("GET", providerUrl + "request/init", true);
    xhttp.send();
}

function NextContentRequest(lastReceivedId)
{
    console.log("Sending: " + providerUrl + "request/next/" + (lastReceivedId - 1));
    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        //loadingContent = false;
    };
    xhttp.open("GET", providerUrl + "request/next/" + (lastReceivedId - 1), true);
    xhttp.send();
}

function GetLastIdInContent(content)
{
    var splitArray = content.split("\0");
    for (var idIterator = 0; idIterator < splitArray.length; idIterator += 4)
    {
        var postId = splitArray[idIterator];

        if (postId.length > 0 && !isNaN(postId))
        {
            lastResponseId = parseInt(postId);
        }
    }
}

function RequestNewContent()
{
    // No more content
    if (loadingContent || lastResponseId == 0) return;

    //var content;
    loadingContent = true;
    if (lastResponseId == -1) // Initial content request
    {
        InitialContentRequest();
    }
    else // Next content request
    {
        NextContentRequest(lastResponseId);
    }
}

function AllContentLoaded()
{
    return lastResponseId == 0;
}
