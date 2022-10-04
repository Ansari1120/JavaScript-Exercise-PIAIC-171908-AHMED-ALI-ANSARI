function An_album(artist, title, tracks){  //parameter
    album = {
        'artist': artist,   //property
        'title': title,     //property
        }
        //optional 
    if (tracks){
        album['tracks'] = tracks
    }
    return album
}
   
var album ; album = An_album('Farhan saeed', 'Jhal') //arguments
console.log(album);

album = An_album('Ali zafar', 'Lightingale')
console.log(album);

album = An_album('Naeem abbas rufi', 'Tumsa Koi')
console.log(album);

album = An_album('Arif Lahori', 'Munda',8)
console.log(album);