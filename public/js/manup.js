var manUpObject, tagArray = [],
  linkArray = [],
  validMetaValues = [{
    name: "mobile-web-app-capable",
    manifestName: "display"
  }, {
    name: "apple-mobile-web-app-capable",
    manifestName: "display"
  }, {
    name: "apple-mobile-web-app-title",
    manifestName: "short_name"
  }, {
    name: "application-name",
    manifestName: "short_name"
  }, {
    name: "msapplication-TileColor",
    manifestName: "ms_TileColor"
  }, {
    name: "msapplication-square70x70logo",
    manifestName: "icons",
    imageSize: "70x70"
  }, {
    name: "msapplication-square150x150logo",
    manifestName: "icons",
    imageSize: "150x150"
  }, {
    name: "msapplication-wide310x150logo",
    manifestName: "icons",
    imageSize: "310x150"
  }, {
    name: "msapplication-square310x310logo",
    manifestName: "icons",
    imageSize: "310x310"
  }],
  validLinkValues = [{
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "152x152"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "120x120"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "76x76"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "60x60"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "57x57"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "72x72"
  }, {
    name: "apple-touch-icon",
    manifestName: "icons",
    imageSize: "114x114"
  }, {
    name: "icon",
    manifestName: "icons",
    imageSize: "128x128"
  }, {
    name: "icon",
    manifestName: "icons",
    imageSize: "192x192"
  }],
  generateFullMetaData = function() {
    for (var e = 0; e < validMetaValues.length; e++)
      if (manUpObject[validMetaValues[e].manifestName])
        if ("icons" == validMetaValues[e].manifestName)
          for (var a = manUpObject.icons, n = 0; n < a.length; n++) a[n].sizes == validMetaValues[e].imageSize && (validMetaValues[e].content = a[n].src);
        else validMetaValues[e].content = manUpObject[validMetaValues[e].manifestName], "display" == validMetaValues[e].manifestName && "standalone" == manUpObject.display && (validMetaValues[e].content = "yes");
    return validMetaValues
  },
  generateFullLinkData = function() {
    for (var e = 0; e < validLinkValues.length; e++)
      if (manUpObject[validLinkValues[e].manifestName])
        if ("icons" == validLinkValues[e].manifestName)
          for (var a = manUpObject.icons, n = 0; n < a.length; n++) a[n].sizes == validLinkValues[e].imageSize && (validLinkValues[e].content = a[n].src);
        else validLinkValues[e].content = manUpObject[validLinkValues[e].manifestName];
    return validLinkValues
  },
  generateMetaArray = function() {
    for (var e = generateFullMetaData(), a = document.getElementsByTagName("head")[0], n = 0; n < e.length; n++) {
      var i = document.createElement("meta");
      i.name = e[n].name, i.content = e[n].content, a.appendChild(i)
    }
  },
  generateLinkArray = function() {
    for (var e = generateFullLinkData(), a = document.getElementsByTagName("head")[0], n = 0; n < e.length; n++) {
      var i = document.createElement("link");
      i.setAttribute("rel", e[n].name), i.setAttribute("sizes", e[n].imageSize), i.setAttribute("href", e[n].content), a.appendChild(i)
    }
  },
  generateObj = function(e) {
    manUpObject = JSON.parse(e), generateLinkArray(), generateMetaArray()
  },
  makeAjax = function(e) {
    if (window.XMLHttpRequest) {
      var a, n = /^https?:\/\//i;
      n.test(e) ? fulURL = e : a = window.location.hostname + e;
      var i = new XMLHttpRequest;
      i.onreadystatechange = function() {
        4 == i.readyState && 200 == i.status && generateObj(i.responseText)
      }, i.open("GET", e, !0), i.send()
    }
  },
  collectManifestObj = function() {
    for (var e = document.getElementsByTagName("link"), a = 0; a < e.length; a++) e[a].rel && "manifest" == e[a].rel && makeAjax(e[a].href)
  },
  testForManifest = function() {
    collectManifestObj()
  }();