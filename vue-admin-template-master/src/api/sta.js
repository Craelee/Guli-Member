import request from '@/utils/request'

export default {
  //生成统计数据
   createStatistics(day){
    return request({
    url: '/statistics/daily/registerCount/'+day,
    method: 'post'
    })   
  },
  //生成图标统计数据
  getDataSta(serachObj){
    return request({
      url: `/statistics/daily/showData/${serachObj.type}/${serachObj.begin}/${serachObj.end}`,
      method: 'get'
      }) 
  }
}
