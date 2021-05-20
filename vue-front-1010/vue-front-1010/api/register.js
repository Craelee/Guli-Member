import request from '@/utils/request'

export default {
    //根据手机号发验证码
  sendCode(phoneNum) {
    return request({
      url: `/eduMsm/msm/send/${phoneNum}`,
      method: 'get'
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/center/member/register`,
      method: 'post',
      data: formItem
    })
  }

}