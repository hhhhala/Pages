import http from "@/utils/request"

// 获取歌单所有歌曲
export const getsearchlist = () => {
    return http.get('/playlist/detail?id=87629408&limit=20')
}

// 歌曲url
export const getmusicurl = (id) => {
    return http.get(`/song/url?id=${id}`)
}