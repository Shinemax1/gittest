/**
 * 实名认证
 */
module.exports = ({ router, controller }) => {
  // pages
  router.get('/personal/authentication.html', controller.auth.pc.index); // pc个人中心实名认证
  router.get('/personal/invoicetitle.html', controller.auth.pc.invoicetitle); // pc个人中心我的发票抬头
  router.get('/authenticate/toConsigneeAuth.html', controller.auth.wap.realname1); // 收货人带照片实名认证页面(该页面已移除)
  router.get('/order/inconsistent/list.html', controller.auth.wap.realname2); // 支付信息与是名人不一致页面
  router.get('/order/inconsistent/supply.html', controller.auth.wap.realname3); // 支付信息与是名人不一致补充身份信息页面
  router.get('/authenticate/authentication.html', controller.auth.wap.realnameList); //实名人列表页面
  
  // apis wap
  router.all('/authenticate/doAuth.html', controller.proxy.wap);
  router.all('/authenticate/list', controller.proxy.wap);
  router.all('/order/inconsistent/data.html', controller.proxy.wap);
  router.all('/order/inconsistent/resubmit.html', controller.proxy.wap);

  /**
   * 原先到m.kaola.com/www.kaola.com的请求都是直接发域名
   * 但是在服务化拆分实名认证的紧张过程中 m.kaola.com图片上传接口跨域
   * 怎么弄都调不通 后端研究了一个晚上也没成功 只能临时改变方案通过node proxy
   * 因此在本工程增加了kaolaWap kaolaWeb 2个proxy
   */
  router.post('/personal/authenticate/imageInfo.html', controller.proxy.kaolaWap); // 实名认证上传照片接口
};
