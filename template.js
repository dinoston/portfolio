
var template = {
    HTML: function (title, list, description, control){
      return  `
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
              <h1>   My KpopFriends!!! ${title} </h1>
              <div class="register">
    
                <a href="/?id=news">News</a>
                <a href="/?id=cafe">Cafe</a>
                <a href="/?id=meetingroom">MeetingRoom</a>
    
                <a href="/?id=login">LogIn</a>
                <a href="/?=register">Register</a>
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
                <p>${description}</p>
                ${list}
                ${control}
              </main>
              <aside>
                AD
              </aside>
            </section>
              <footer>
                <a href="/">home    |</a>
                <a href="/?id=supportus">support us    |</a>
                <a href="/?id=help">help    |</a>
                <a href="/?id=about">about    </a>
              </footer>
                <script>
                 $('.button-link').css('color','red')
                </script>
          </div>
        </body>
      </html>
      `;
    }, list: function (topics){
      var list = '<ul>';
                var i = 0;
                while(i < topics.length){
                  list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
                  i = i + 1;
                }
    
                list = list+'</ul>';
                return list;
    }, authorSelect: function(authors){
       var tag = '';
        var i = 0;
        while(i < authors.length){
           tag += `<option value="${authors[i].id}">${authors[i].name}</option>`;
           i++;
          }
          return `
          <Select name="author">
           ${tag}
          </select>
          `
          

    }
  }

  module.exports = template;