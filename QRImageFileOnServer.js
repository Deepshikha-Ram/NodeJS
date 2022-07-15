const qr = require('qrcode');
let data ={
    id: 1,
    name: 'user',
    email: 'user@gamil.com'
}

let strData = JSON.stringify(data)

qr.toString (strData, {type: 'terminal'}, function (err, code){
    if (err){
        return console.log("error occured!")
        console.log(code)
    }
});
qr.toDataURL(strData, function(err, code){
    if(err) return console.log("error occured")
    console.log(code)
})
