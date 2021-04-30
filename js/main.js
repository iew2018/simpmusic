var app = new Vue({
    el: "#app",
    data: {
        //搜索歌曲
        query: '',
        //歌曲数组
        musiclist: [],
        //歌曲路径
        musicUrl: ''
    },
    methods: {
        searchMusic: function () {
            var that = this;
            //歌曲搜索
            axios.get('https://autumnfish.cn/search?keywords=' + this.query)
                .then(function (res) {
                    // console.log(res)
                    that.musiclist = res.data.result.songs;
                })
                .then(function (err) {

                })
        },
        Musciplay: function (musicId) {
            var that = this;
            //歌曲路径
            axios.get('https://autumnfish.cn/song/url?id=' + musicId)
                .then(function (res) {
                    // console.log(res)
                    that.musicUrl = res.data.data[0].url
                })
                .then(function (err) {

                })
        }
    }
})