import { axios } from '../../axios'

var id = "AKfycbwiWOq68d5digDAOCgVI9bDzpukiiX3_-dhcVqrQGafWvNw2YxLHLQ6LuBEnGzoyQeg"
var url = 'https://script.google.com/macros/s/' + id + '/exec'

const options ={
    headers: {
        "content-type": "text/plain",
    }
}

export default {
    sendemail: function (subject,name,text) {
        console.log({ axios: this.axios });
        const contents = {
            subject: subject,
            name: name,
            text: text
        }
        axios.post(url, contents, options)
            .then(function (res) {
                console.log(res);
                if (res.data == "error")
                    alert("テキストが入力されていません")
                else
                    alert("送信しました")
            }).catch(function (res) {
                alert("ネットワークエラー");
                console.log(res);
            });
    }
}