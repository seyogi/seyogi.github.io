export default {
    _Header: [
        'Version',
        'Title',
        'Genre',
        'Artist',
        'PLAY_TIME',
        'BEGINNER_LEVEL',
        'BEGINNER_SCORE',
        'BEGINNER_PGreat',
        'BEGINNER_Great',
        'BEGINNER_BP',
        'BEGINNER_CREARLAMP',
        'BEGINNER_DJ_LEVEL',
        'NORMAL_LEVEL',
        'NORMAL_SCORE',
        'NORMAL_PGreat',
        'NORMAL_Great',
        'NORMAL_BP',
        'NORMAL_CREARLAMP',
        'NORMAL_DJ_LEVEL',
        'HYPER_LEVEL',
        'HYPER_SCORE',
        'HYPER_PGreat',
        'HYPER_Great',
        'HYPER_BP',
        'HYPER_CREARLAMP',
        'HYPER_DJ_LEVEL',
        'ANOTHER_LEVEL',
        'ANOTHER_SCORE',
        'ANOTHER_PGreat',
        'ANOTHER_Great',
        'ANOTHER_BP',
        'ANOTHER_CREARLAMP',
        'ANOTHER_DJ_LEVEL',
        'LEGGENDARIA_LEVEL',
        'LEGGENDARIA_SCORE',
        'LEGGENDARIA_PGreat',
        'LEGGENDARIA_Great',
        'LEGGENDARIA_BP',
        'LEGGENDARIA_CREARLAMP',
        'LEGGENDARIA_DJ_LEVEL',
        'LAST_PLAY_TIME\r'],
    _CATEGORY: [
        'CHARGE',
        'CHORD',
        'NOTES',
        'PEAK',
        'SCRATCH',
        'SOF-LAN'
    ],
    methods: {
        getRANK: function (per_num) {
            per_num *= 0.01;
            if (per_num > 8 / 9) return "AAA";
            else if (per_num > 7 / 9) return "AA";
            else if (per_num > 6 / 9) return "A";
            else if (per_num > 5 / 9) return "B";
            else if (per_num > 4 / 9) return "C";
            else return "D";
        }
    }

}