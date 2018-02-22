var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

    var counter=0;
    app.get('/counter', function(req, res){
        counter = counter + 1;
        res.send(counter.toString());
    });
    
    
            var articles = 
            {
            'article_one':{
                title:'article one',
                heading:'ARTICLE ONE',
                date:'Feb 20,2017',
                content:`<p>
                        This is the actual content for article one.I will make changes in this field later.
                        </p>`
            },
            'article_two':{
                title:'article two',
                heading:'ARTICLE TWO',
                date:'Feb 20,2017',
                content:`<p>
                        This is the actual content for article two.I will make changes in this field later.
                        </p>`
            },
            'article_three':{
                title:'article three',
                heading:'CONTACT US:-',
               
                content:`<p>
                       <h1> Infodesk:-</h1><br>
Toll Free (India) : 1800 2094545<br>
Available from: 8 am to 8 pm IST
<br><br>
International : +91 22 6177 4200 <br>
Available from: 2.30 am to 2.30 pm GMT
<br><br>
Send us a mail:
<br>
Infodesk@bigdealfinance.com
<br>

                        </p>`
            }
            };


    function createTemplate (data){
        var title = data.title;
      
        var heading = data.heading;
        var content = data.content;
      var htmlTemplate =`
          <html>
            <head>
                <title>
                   ${title}
                </title>
                <meta name="viewport" content="width-device-width,initial-scale=1" />
             <link rel="stylesheet" href="/ui/style.css" />
                </head>
            <body>
              <div class="container">
                   <div>
                    <a href="/"> HOME </a>
                </div>
                <hr/>
                <div>
                <h1>
                  ${heading}
                </h1>
                </div>
               
                <div>
                    
                </div>
                <div>
                    ${content}
                </div> 
              </div>
            </body>
           </html>
           `;
           return htmlTemplate;
}

 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
//articleName == article_one
//articles[articleName] == {}content object for article_one 
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
