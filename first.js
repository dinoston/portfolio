var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
    return `
    <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title> ${title} </title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        
            <div class="container">
            <header>
                <h1><a href="/">My KpopFriends</a></h1>
                <div class="register">
        
                <a href="Door3.html">News</a>
                <a href="/?id=cafe">Cafe</a>
                <a href="Door3.html">MeetingRoom</a>
        
                <a href="LoginPage.html">LogIn</a>
                <a href="RegisterPage.html">Register</a>
        
                <!--  <input class="login" type="button" value="Login" onclick="">
                <input class="login" type="button" value="Register" onclick=""> -->
                </div>
            </header>
            <section class="content">
                <nav>
                <ul>
                    <a href="kpfr.html" class="button-link"><strong>Search<br> Kpop-penpals</strong></a><br><br>
                    <a href="kofr.html" class="button-link"><strong>Search<br> Korean-penpals</strong></a><br><br>
                    <a href="wofr.html" class="korea_button-link"><strong>외국인 펜팔친구<br>찾아보기(한국인)</strong></a><br><br>
                </ul>
                </nav>
                <main>
                Let's make Kpop friends and Korean penpals!<br>
                Kpop과 함께 외국인 친구를 만들어 보세요!

                ${list}
                ${body}
                </main>
                <aside>
                AD
                </aside>
            </section>
            <footer>
                <a href="/">home</a>   │    support us      │    help      │    about
            </footer>
            <script>
            $('.button-link').css('color','red')
            </script>
            </div>
        </body>
        </html>
        `;
}
function templateList(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        i = i + 1;
    }
    list = list+'</ul>';
    return list;
}
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname ==='/'){
        if(queryData.id === undefined){
            fs.readdir('./data', function(error, filelist){
                var title = 'Welcome to KpopFriends';
                var description = 'Hello, KpopFriends';
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<h2>${title}</h2>
                ${description}`);
                response.writeHead(200);
                response.end(template);   
                })

        } else {
            fs.readdir('./data', function(error, filelist){
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
                    var title = queryData.id;
                    var list = templateList(filelist);
                    var template =  templateHTML(title, list, `<h2>${title}</h2>
                    ${description}`);
                    response.writeHead(200);
                    response.end(template);   
             });
          });
        }
    } else {
         response.writeHead(404);
         response.end('Not found');
    }   
});
app.listen(3000);