function request(url, options={method: "GET", contentType: "Content-Type: application/json"}) {
  const req = new XMLHttpRequest();
  req.open(options.method, url);
  req.setRequestHeader(options.contentType.split(":")[0].trim(), options.contentType.split(":")[1].trim());
  req.send();
  return req.onload = () => {
    if(req.status === 200 || req.status === 304 && options.contentType === "Content-Type: application/json") {
      return JSON.parse(req.response)
    } else {
      return JSON.parse(req);
    }
  }
};