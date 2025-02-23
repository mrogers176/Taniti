(function(window, undefined) {
  var dictionary = {
    "96903c9a-8a1a-415f-ade0-06a06d2fefa5": "Entertainment",
    "79a492ff-44de-425f-bfde-ff21750a92ff": "About",
    "faf7dcd3-8240-446a-b3f9-8b6a13cb6d57": "Dining",
    "c47106a3-d4f1-4318-849a-43842417d38d": "Home",
    "68ab49c0-e7df-4480-9f6e-3781f17726d5": "Transportation",
    "75ee964a-1ca7-43dc-be7f-d97b4e980ffb": "Lodging",
    "cbe6dcf4-692e-403c-9b54-67228f8da3b7": "Contact",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);