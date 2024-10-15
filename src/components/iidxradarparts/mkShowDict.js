import iidxRadarJson from "./iidxRadar.json";
import tmp from "./tmp.js";

function mkArrayFromCSV(csvText) {
    let [header, ...csvRows] = csvText.split('\n').filter(function (row) {
        if (row !== '') {
            return row;
        }
    }).map(function (row) {
        return row.split(',');
    });
    header = tmp._Header
    let arrayInKeyAndValue;
    let tmpResultArray;
    tmpResultArray = csvRows.map(function (r) {
        arrayInKeyAndValue = header.map(function (_, index) {
            return ({ key: header[index].replace(/\s+/g, ''), value: r[index] });
        });
        arrayInKeyAndValue = arrayInKeyAndValue.reduce(function (previous, current) {
            previous[current.key] = current.value;
            return previous;
        }, {});
        return arrayInKeyAndValue;
    });
    return tmpResultArray;
}

function calcRadarScore(rawArray) {
    const radardata = rawArray.map(
        ({ Title, Artist, HYPER_SCORE, HYPER_LEVEL, ANOTHER_SCORE, ANOTHER_LEVEL, LEGGENDARIA_SCORE, LEGGENDARIA_LEVEL }) => {
            if (Title in iidxRadarJson) {
                var tmpRadarDict = iidxRadarJson[Title];
                var tmpRaderScores = {};
                var dict = ''
                var per = 0
                if ('HYPER' in tmpRadarDict) {
                    dict = tmpRadarDict['HYPER'];
                    per = HYPER_SCORE / (dict['NOTES_NUM'] * 2);
                    tmpRaderScores['HYPER'] = {};
                    tmpRaderScores['HYPER']['SCORE'] = HYPER_SCORE;
                    tmpRaderScores['HYPER']['SCORE_per'] = per;
                    tmpRaderScores['HYPER']['LEVEL'] = HYPER_LEVEL;
                    for (var i = 0; i < 6; i++) {
                        tmpRaderScores['HYPER'][tmp._CATEGORY[i]] = dict[tmp._CATEGORY[i]] * per
                        tmpRaderScores['HYPER'][tmp._CATEGORY[i] + '_MAX'] = dict[tmp._CATEGORY[i]]
                    }
                }
                if ('ANOTHER' in tmpRadarDict) {
                    dict = tmpRadarDict['ANOTHER'];
                    per = ANOTHER_SCORE / (dict['NOTES_NUM'] * 2);
                    tmpRaderScores['ANOTHER'] = {};
                    tmpRaderScores['ANOTHER']['SCORE'] = ANOTHER_SCORE;
                    tmpRaderScores['ANOTHER']['SCORE_per'] = per;
                    tmpRaderScores['ANOTHER']['LEVEL'] = ANOTHER_LEVEL;
                    for (var j = 0; j < 6; j++) {
                        tmpRaderScores['ANOTHER'][tmp._CATEGORY[j]] = dict[tmp._CATEGORY[j]] * per
                        tmpRaderScores['ANOTHER'][tmp._CATEGORY[j] + '_MAX'] = dict[tmp._CATEGORY[j]]
                    }
                }
                if ('LEGGENDARIA' in tmpRadarDict) {
                    dict = tmpRadarDict['LEGGENDARIA'];
                    per = LEGGENDARIA_SCORE / (dict['NOTES_NUM'] * 2);
                    tmpRaderScores['LEGGENDARIA'] = {};
                    tmpRaderScores['LEGGENDARIA']['SCORE'] = LEGGENDARIA_SCORE;
                    tmpRaderScores['LEGGENDARIA']['SCORE_per'] = per;
                    tmpRaderScores['LEGGENDARIA']['LEVEL'] = LEGGENDARIA_LEVEL;
                    for (var k = 0; k < 6; k++) {
                        tmpRaderScores['LEGGENDARIA'][tmp._CATEGORY[k]] = dict[tmp._CATEGORY[k]] * per
                        tmpRaderScores['LEGGENDARIA'][tmp._CATEGORY[k] + '_MAX'] = dict[tmp._CATEGORY[k]]
                    }
                }
                return (
                    {
                        Title: Title,
                        Artist: Artist,
                        Score: tmpRaderScores
                    }
                )
            }
        }
    ).filter(Boolean);
    return radardata
}



export default {
    mkDictFromText(csvText) {
        var rawArray = mkArrayFromCSV(csvText);
        var radardata = calcRadarScore(rawArray);
        return radardata;
    },
    async mkDictFromFile(File) {
        var reader = new FileReader();
        reader.readAsText(File);
        await new Promise(resolve => reader.onload = () => resolve());
        var csvText = reader.result;
        var rawArray = mkArrayFromCSV(csvText);
        var radardata = calcRadarScore(rawArray);
        return radardata;
    },
    _mkShowData(radardata, Theme, isvis) {
        var tmp = []
        for (var i in radardata) {
            if(isvis){
                for (var key in radardata[i]['Score']) {
                    if (radardata[i]['Score'][key][Theme] != 0)
                        tmp.push({
                            Diff: key,
                            Level: radardata[i]['Score'][key]['LEVEL'],
                            Title: radardata[i]['Title'],
                            Artist: radardata[i]['Artist'],
                            RawScore: radardata[i]['Score'][key]['SCORE'],
                            PerScore: radardata[i]['Score'][key]['SCORE_per'],
                            RadarScore: radardata[i]['Score'][key][Theme],
                            MAXRadarScore:radardata[i]['Score'][key][Theme + '_MAX']
                        })
                }
            }
            else{
                var tmpnum = 0;
                var tmpDiff = '';
                for (var key2 in radardata[i]['Score']) {
                    if(radardata[i]['Score'][key2][Theme]>=tmpnum){
                        tmpnum = radardata[i]['Score'][key2][Theme];
                        tmpDiff = key2;
                    }
                }
                if (radardata[i]['Score'][tmpDiff][Theme] != 0)
                    tmp.push({
                        Diff: tmpDiff,
                        Level: radardata[i]['Score'][tmpDiff]['LEVEL'],
                        Title: radardata[i]['Title'],
                        Artist: radardata[i]['Artist'],
                        RawScore: radardata[i]['Score'][tmpDiff]['SCORE'],
                        PerScore: radardata[i]['Score'][tmpDiff]['SCORE_per'],
                        RadarScore: radardata[i]['Score'][tmpDiff][Theme],
                        MAXRadarScore:radardata[i]['Score'][tmpDiff][Theme + '_MAX']
                    })
            }
        }
        tmp.sort((a, b) => {
            return (
                b["RadarScore"] -
                a["RadarScore"]
            );
        });
        var avRadarScore = 0
        var num = 10
        if(tmp.length < 10){
            num = tmp.length
        }
        for(var j = 0;  j < num;  j++){
            avRadarScore += Math.floor( (tmp[j]['RadarScore']) * Math.pow(10, 2)) / Math.pow(10, 2)
        }
        avRadarScore = Math.floor( (avRadarScore / 10) * Math.pow(10, 2)) / Math.pow(10, 2)
        return [tmp, avRadarScore]
    }
}