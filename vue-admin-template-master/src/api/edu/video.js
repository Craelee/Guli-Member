import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request({
            url: '/eduService/video/addVideo',
            method: 'post',
            data: video
          })
    },
    
    //删除小节
    deleteVideo(id) {
        return request({
            url: '/eduService/video/'+id,
            method: 'delete'
          })
    },

    //查询小节
    getVideoInfo(id){
      return request({
        url: '/eduService/video/getVideoInfo/'+id,
        method: 'get'
      })
    },
    //修改小节
    updateVideo(video) {
      return request({
          url: '/eduService/video/updateVideo',
          method: 'post',
          data: video
        })
  },
  //删除小节中的视频
  removeVodVideo(id){
    return request({
      url: '/eduVod/video/removeVideo/'+id,
      method: 'delete',
    })
  }
}