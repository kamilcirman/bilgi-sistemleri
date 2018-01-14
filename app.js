var Twit = require('twit')
var readline = require('readline');

var T = new Twit({
  consumer_key: 'pdE7D74JLwx9q9e4OWl0ig5Y5',
  consumer_secret: 'zrKkO0Tu0ETwZkzi1BTCaNGKBfiLKFffBv4g4Ynzq8VGfCPlbf',
  access_token: '3023556011-45ru2YiCk1f1EeTbE9Zhwg0wQ6v0he2Tvb8w4hT',
  access_token_secret: 'OkIHuQnLMLWgKliJ98kEDlwsmJvTsrZOJAEZk8zx18hQv',
  timeout_ms: 6*1000,
});

var prompts = readline.createInterface(process.stdin,process.stdout);

prompts.question('hashtag giriniz(örn = #[hastag]) = ',function (hashtag) {
    prompts.question('incelemek istediğiniz tweet sayısını giriniz(max=100) = ',function (count) {
        console.log(count + ' -- ' + hashtag);
        
        T.get('search/tweets', { q: hashtag,count:count,lang:'tr' }, function(err, data, response) {
            //bulunan tweet sayısı
            console.log('bulunan tweet sayısı = '+data.statuses.length);
            for(var i =0; i<data.statuses.length; i++){
                //console.log(JSON.stringify(data.statuses[i].user)+'\n');
                //screen_name 
                //location
                console.log('Adı = '+data.statuses[i].user.name+'\n');
                console.log('Kullanıcı Adı = '+ data.statuses[i].user.screen_name+'\n');
                console.log('Lokasyon = ' + data.statuses[i].user.location + '\n');
                console.log('Atılan Tweet = ' + data.statuses[i].text.trim()+'\n');
                console.log('Tweet in atılma günü ve saati = ' + data.statuses[i].created_at);
                console.log('----------------------------------------------------------');
            }
            process.exit();
        });
    });
})
/*
T.get('search/tweets', { q: '#tecavüz',count:10,lang:'tr' }, function(err, data, response) {
    //bulunan tweet sayısı
    console.log('data statuses len = '+data.statuses.length);
    
    for(var i =0; i<data.statuses.length; i++){
        console.log(data.statuses[i].user.name+'---->'+data.statuses[i].text.trim()+'\n');
        console.log('----------------------------------------------------------');        
    }
});
*/