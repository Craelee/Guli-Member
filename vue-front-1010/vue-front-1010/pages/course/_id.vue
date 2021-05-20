<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">{{courseWebVo.subjectLevelOne}}</a>
        \
        <span class="c-333 fsize14">{{courseWebVo.subjectLevelTwo}}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
            <img :src="courseWebVo.cover" :alt="courseWebVo.title" class="dis c-v-pic">
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{courseWebVo.title}}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size:24px;">￥{{courseWebVo.price}}</b>
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14">主讲： {{courseWebVo.teacherName}}&nbsp;&nbsp;&nbsp;</span>
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#" >收藏</a>
              </span>
            </section>
            <section class="c-attr-mt" v-if="isBuy || Number(courseWebVo.price)===0">
              <a href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
            </section>
            <section class="c-attr-mt" v-else>
              <a @click="createOrder()" href="#" title="立即购买" class="comm-btn c-btn-3">立即购买</a>
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.buyCount}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.lessonNum}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.viewCount}}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description">{{courseWebVo.description}}</p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li class="lh-menu-stair" v-for="chapter in chapterVideoList" :key="chapter.id">
                            <a href="javascript: void(0)" :title="chapter.title" class="current-1">
                              <em class="lh-menu-i-1 icon18 mr10"></em>{{chapter.title}}
                            </a>

                            <ol class="lh-menu-ol" style="display: block;">
                              <li class="lh-menu-second ml30" v-for="video in chapter.children" :key="video.id">
                                <a :href="'/player/'+video.videoSourceId" target="_blank">
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </a>
                              </li>
                              
                            </ol>

                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto;">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img :src="courseWebVo.avatar" width="50" height="50" alt>
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{courseWebVo.teacherName}}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{courseWebVo.intro}}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
<!-- 课程评论开始 -->
    <!-- 如果未登陆，先登陆再评论 -->
    <div v-if="Number(isLogin)==0">
    <h2 class="toLogin" >
        您尚未登录！请点击<a class="commentTitle" href="/login">登陆</a>后再对该课程进行评论吧！
    </h2>
      <h4 class="c-c-content c-infor-title" id="i-art-comment">
        <span class="commentTitle">课程评论</span>
      </h4>
    </div>
     <!-- 登陆才能，添加评论 -->
    <div v-if="Number(isLogin)!=0">
      <h4 class="c-c-content c-infor-title" id="i-art-comment">
        <span class="commentTitle">课程评论</span>
      </h4>
    <section class="lh-bj-list pr mt20 replyhtml comt">
        <ul>
          <li class="unBr">
            <aside class="noter-pic">
              <img width="50" height="50" class="picImg" :src="userInfo.avatar">
              </aside>
            <div class="of">
              <section class="n-reply-wrap">
                <fieldset>
                  <textarea name="" v-model="comment.content" placeholder="输入您要评论的文字" id="commentContent"></textarea>
                </fieldset>
                <p class="of mt5 tar pl10 pr10">
                  <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"></tt></span>
                  <input type="button" @click="addComment()" value="回复" class="lh-reply-btn">
                </p>
              </section>
            </div>
          </li>
        </ul>
      </section>
      </div>
    <!-- /无数据提示 开始-->
      <section class="no-data-wrap" v-if="data.total == 0">
        <em class="icon30 no-data-ico">&nbsp;</em>
        <span class="c-666 fsize14 ml10 vam">还没有人评论过，快来评论吧...</span>
      </section>
      <div>
        <section class="commsec" v-if="data.total > 0">
          <section class="question-list lh-bj-list pr">
            <ul class="pr10">
              <li v-for="(comment,index) in data.commentList" v-bind:key="index">
                  <aside class="noter-pic">
                    <img width="50" height="50" class="picImg" :src="comment.avatar">
                    </aside>
                  <div class="of">
                    <span class="fl"> 
                    <font class="fsize12 c-blue"> 
                      {{comment.nickname}}</font>
                    <font class="fsize12 c-999 ml5">评论：</font></span>
                  </div>
                  <div class="noter-txt mt5">
                    <p>{{comment.content}}</p>
                  </div>
                  <div class="of mt5">
                    <span class="fr"><font class="fsize12 c-999 ml5">{{comment.gmtCreate}}</font></span>
                  </div>
                </li>
              </ul>
          </section>
        </section>
        <!-- 公共分页 开始 -->
        <div class="paging" v-if="data.total > 0">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="首页"
            @click.prevent="gotoPage(1)">首</a>
            <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="前一页"
            @click.prevent="gotoPage(data.current-1)">&lt;</a>
            <a
            v-for="page in data.pages"
            :key="page"
            :class="{current: data.current == page, undisable: data.current == page}"
            :title="'第'+page+'页'"
            href="#"
            @click.prevent="gotoPage(page)">{{ page }}</a>
            <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="后一页"
            @click.prevent="gotoPage(data.current+1)">&gt;</a>
            <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="末页"
            @click.prevent="gotoPage(data.pages)">末</a>
            <div class="clear"/>
        </div>
        <!-- 公共分页 结束 -->
      </div>
  </div>
</template>
<script>
import courseApi from '@/api/course'
import commentApi from '@/api/comment'
import memberApi from '@/api/login'
import orderApi from '@/api/order'
import cookie from 'js-cookie'
export default {

   data() {
     return{
       //课程列表及分页数据
       data:{},
       page:1,
       limit:4,
       //课程信息
       courseWebVo:{},
       //章节和小节
       chapterVideoList:[],
       //课程id
       courseId:'',
       //评论
       comment:{
         courseId:'',
         content:'',
       },
       //查询对象
       seacherOj:{},
       userInfo:{},
       isLogin: 0,
       isBuy:false,
     }
   },
   created() {
     this.initCourseInfo()
     this.initComment()
     this.initUserInfo()
   },
   methods:{
     // 1.初始化课程详情
     initCourseInfo(){
      this.courseId = this.$route.params.id
      this.seacherOj.courseId = this.courseId
      this.comment.courseId = this.courseId
      
       courseApi.getCourseInfo(this.courseId)
          .then(response=>{
            this.courseWebVo=response.data.data.courseWebFrontVO
            this.chapterVideoList=response.data.data.chapterVideoList
            this.isBuy=response.data.data.isBuy
            this.isLogin=response.data.data.isLogin
            })
     },
     //初始化评论
     initComment(){
       this.gotoPage(this.page,this.limit,this.seacherOj)
     },
     //评论分页跳转
     gotoPage(page){
       commentApi.getPageList(page,4,this.seacherOj).then(response=>{
         this.data=response.data.data
       })
     },
     addComment(){
       if(this.comment.content==''){
         alert("评论内容不能为空！")
       }else{
       commentApi.addComment(this.comment)
          .then(response=>{
            this.$message({
            type: 'success',
            message: '添加评论成功!'
        })      
    //清除评论
        this.comment.content = ''
        this.gotoPage(1)
   })
       } 
   },
   //初始得到用户信息
     initUserInfo() {
       var token=cookie.get('guli_token')
       if(token){
        this.isLogin = 1 //标识用户已登录
        memberApi.getLoginUserInfo()
        .then(response => {
          this.userInfo = response.data.data.userInfo
        })
      }
     },

     //生成订单
     createOrder(){
       var isLogin = this.isUserLogin()
       if(isLogin==false){
        //跳转到登录页面
        window.location.href="/login?redirectUrl=/course/"+this.courseId
      }
       orderApi.createOrder(this.courseId)
          .then(response =>{
            //获取返回订单号
            //生成订单之后，跳转订单显示页面
          //  window.location.href="/order/"+response.data.data.orderId
            this.$router.push({path:'/order/'+response.data.data.orderId})
          })
     },
     isUserLogin(){ //用户是否登录
      //取cookie中的token
      var token = cookie.get('guli_token')

      //如果token有值，则发送请求拿到用户头像信息
      if(token){
        this.isLogin = 1 //标识用户已登录
        return true
      }
      return false
    }
   }
};
</script>
<style scoped>
  .commsec {
    padding-left: 100px;
  }
  .toLogin{
    text-align: center;
    margin-top: 20px
  }
  .toLogin a{
    color: #0000bb;
    cursor: pointer;
    text-decoration: none;
  }
  .comt{
    margin-left: 70px;
  }
</style>