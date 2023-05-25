auth_url = "https://accounts.spotify.com/authorize"
client_id = "client_id=7bf7e7feb3234fb781f0c404b9c7cb8d"
response_type = "response_type=code"
redirect_uri = "redirect_uri=https://developer.spotify.com/"
scope = "scope=streaming%20user-read-playback-state%20user-modify-playback-state%20user-read-\
currently-playing%20playlist-read-private%20playlist-modify-private%20playlist-read-collaborative\
%20playlist-modify-public%20user-read-playback-position%20user-top-read%20user-read-recently-played\
%20user-library-modify%20user-library-read%20user-read-email%20user-read-private"

auth_url = auth_url + "?" + client_id + "&" + response_type + "&" + redirect_uri + "&" + scope
print(auth_url)