


  const clientId = "9f3fc5be18c342579782804dfc3f399c";
  const clientSecret = "27c439805b9c4fd58760fe87b30b3156";
  const redirect_uri = "http://localhost:3000/";

  var scope = "user-read-private user-read-email";


  export const yoururl = ()=>{
    var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(clientId);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return url
  }
  

  


  