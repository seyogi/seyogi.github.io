
import { axios } from "../../axios/index";

const options ={
    headers: {
        "content-type": "multipart/form-data",
    }
}

export default {
    sendemail: function (subject,name,text) {
        const contents = {
            subject: subject,
            name: name,
            text: text
        }
        axios.post("", contents, options)
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