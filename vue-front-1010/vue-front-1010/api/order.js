import request from '@/utils/request'

export default {
    //生成订单
    createOrder(courseId){
      return request({
        url:'/order/createOrder/'+courseId,
        method:'post'
      })
    },

    //获取订单信息
    getOrderInfo(orderId){
      return request({
        url:'/order/getOrderInfo/'+orderId,
        method:'get'
      })
    },

    //生成支付二维码
    createWXPayCode(orderId){
      return request({
        url:'/order/paylog/createWXPayCode/'+orderId,
        method:'get'
      })
    },
    //查询订单状态
    queryPayStatus(orderId){
      return request({
        url:'/order/paylog/queryPayStatus/'+orderId,
        method:'get'
      })
    },

}