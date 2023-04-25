const express = require("express");
const app = express();


const PORT = 9000
view_dir = __dirname + '/views/'
app.get('/',function(req, res){
    res.sendFile( view_dir + 'firsthint.html');
  });

app.listen(80);

for(let i=50;i<180;i+=10) {
    port = PORT + i
    const app_temp = express();

    if(port == 9110) {
        app_temp.get('/', (req, res) => {
            res.sendFile(view_dir + 'secondhint.html');
        })

        app_temp.get('/userlabftc', (req, res) => {
            if(req.query.q) {
                try {
                    eval(req.query.q)
                } catch (error) {

                }
                res.sendFile(view_dir + 'finalhintsuccess.html');
            } else {
                res.sendFile(view_dir + 'finalhint.html');
            }
        })

    } else {
        app_temp.get('/', (req, res) => {
            res.sendFile(view_dir + 'tryagain.html');
        })
    }
    app_temp.listen(port)

}

console.log("done")