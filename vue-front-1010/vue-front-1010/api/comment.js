import request from '@/utils/request'

export default {
  getPageList(page, limit,commentQueryVo) {
    return request({
      url: `/eduService/comment/pageComment/${page}/${limit}`,
      method: 'post',
      data:commentQueryVo
    })
  },
  addComment(comment) {
    return request({
      url: `/eduService/comment/addComment`,
      method: 'post',
      data: comment
    })
  },
}