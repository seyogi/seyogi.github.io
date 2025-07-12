import { axios } from '../../axios'

var id = "AKfycbyVWlQMV7aLVTU2N8ytErayYXAj1fzWsO95C4q99oVtW9s8f_t8ZcLkxMNlpj8J-1Vk"
var url = 'https://script.google.com/macros/s/' + id + '/exec'

const options ={
    headers: {
        "content-type": "multipart/form-data",
    }
}

export default {
    getCSV: async function (IIDX_ID) {
        const contents = {
            IIDX_ID: IIDX_ID
        }
        return await axios.post(url, contents, options)
            .then(function (res) {
                console.log(res);
                if (res.data == "error") {
                    alert("テキストが入力されていません")
                    return;
                }
                else {
                    return res.data.message
                }
            }).catch(function (res) {
                alert("ネットワークエラー");
                console.log(res);
                return;
            });
    }
}