import request from '@/utils/request'

export default{
  getBannerList(){
    return request({
      url: `/cms/bannerfront/getAllBanner`,
      method: 'get'
    })
  }
}