<template>
<div class="wrapper">

  <!-- Main Header -->
  <main-header></main-header>

  <!-- Left side column. contains the logo and sidebar -->
  <main-sidebar></main-sidebar>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        分类管理
        <small>添加分类</small>
      </h1>
      <ol class="breadcrumb">
        <li><i class="fa fa-dashboard"></i> 内容</li>
        <li class="active"><router-link to="cato-add">添加分类</router-link></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <form class="form-horizontal">
              <div class="box-body">
                <!-- Custom Tabs -->
                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_1" data-toggle="tab">基本信息</a></li>
                    <li><a href="#tab_2" data-toggle="tab">SEO信息</a></li>
                    <li><a href="#tab_3" data-toggle="tab">属性设置</a></li>
                    <li><a href="#tab_4" data-toggle="tab">扩展信息</a></li>
                    <li><a href="#tab_5" data-toggle="tab">权限设置</a></li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="tab_1">
                      <div class="form-group">
                        <label for="parent" class="col-sm-2 control-label">所属分类</label>
                        <div class="col-sm-8 col-md-5">
                          <select class="form-control" id="parent">
                            <option value="0" selected="">请选择...</option>
                          </select>
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="如果为顶级分类，不需要选择！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="columnName" class="col-sm-2 control-label">分类名称</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="text" class="form-control" id="columnName" placeholder="">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="请填写分类名称！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="alias" class="col-sm-2 control-label">别名</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="text" class="form-control" id="alias" placeholder="">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="“别名”是在URL中使用的别称，它可以令URL更美观。通常使用小写，只能包含字母，数字和连字符（-）。">!</span>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_2">
                      <div class="form-group">
                        <label for="keywords" class="col-sm-2 control-label">页面标题</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="text" class="form-control" id="keywords" placeholder="">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="可填写不同于内容名称的关键词，有利于搜索优化！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="keywords" class="col-sm-2 control-label">关键词</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="text" class="form-control" id="keywords" placeholder="">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="网页META信息中的keywords信息，可填写与内容相关的关键词，以英文逗号相隔，有利于搜索优化！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="description" class="col-sm-2 control-label">页面描述</label>
                        <div class="col-sm-8 col-md-5">
                          <textarea class="form-control" id="description" placeholder=""></textarea>
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="网页META信息中的description信息，可填写与内容相关的简介，有利于搜索优化！">!</span>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_3">
                      <div class="form-group">
                        <label for="isshow" class="col-sm-2 control-label">是否启用</label>
                        <div class="col-sm-8 col-md-5">
                          <label class="radio-inline">
                            <input id="isshow" type="radio" name="isshow" class="minimal" value="1">
                            正常显示
                          </label>
                          <label class="radio-inline">
                            <input id="isshow" type="radio" name="isshow" class="minimal" value="0">
                            禁用
                          </label>
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="选择栏目是否启用！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="keywords" class="col-sm-2 control-label">外部链接</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="text" class="form-control" id="keywords" placeholder="">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="填写外部链接地址后，访问栏目将跳转到填写的地址！">!</span>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_4">
                      <div class="form-group">
                        <label for="editor" class="col-sm-2 control-label">封面内容</label>
                        <div class="col-sm-8 col-md-8">
                          <textarea id="editor" name="editor" rows="50" cols="80"></textarea>
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="如使用设置栏目封面，请在模板处选择本栏目应用list_page.html模板！">!</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="img" class="col-sm-2 control-label">分类说明图片</label>
                        <div class="col-sm-8 col-md-5">
                          <input type="file" name="img" id="img" class="file" data-show-preview="false">
                        </div>
                        <div class="col-sm-1 custom-input-icon">
                              <span data-toggle="tooltip" data-placement="top"
                                    class="badge bg-yellow-gradient custom-tooltip"
                                    data-original-title="栏目banner功能,需在模板中调用显示！">!</span>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_5">
                      <div class="row">
                        <div class="col-sm-12 col-md-12">
                          <div class="alert alert-warning alert-dismissible" style="">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <i class="icon fa fa-warning"></i>
                            勾选为该用户组禁止浏览或下载
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-12"><p></p></div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-12"><p></p></div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-12">
                          <div class="box-body table-responsive no-padding">
                            <table class="table table-condensed">
                              <tbody>
                              <tr>
                                <th width="30%">用户组</th>
                                <th width="30%">浏览</th>
                                <th width="30%">下载</th>
                              </tr>
                              <tr>
                                <td>管理员</td>
                                <td><input type="checkbox"></td>
                                <td><input type="checkbox"></td>
                              </tr>
                              <tr>
                                <td>文章管理员</td>
                                <td><input type="checkbox"></td>
                                <td><input type="checkbox"></td>
                              </tr>
                              <tr>
                                <td>一般会员</td>
                                <td><input type="checkbox"></td>
                                <td><input type="checkbox"></td>
                              </tr>
                              <tr>
                                <td>游客</td>
                                <td><input type="checkbox"></td>
                                <td><input type="checkbox"></td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- /.box-body -->
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                  </div>
                  <!-- /.tab-content -->
                </div>
              </div>
              <div class="box-footer">
                <div class="col-sm-2 col-md-1">
                  <button type="submit" class="btn btn-block btn-primary">提交</button>
                </div>
              </div>
            </form>
            <!-- <div class="overlay">
              <i class="fa fa-spinner fa-spin"></i>
            </div> -->
          </div>
        </div>
      </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <main-footer></main-footer>

</div>
</template>
<script>
import mainHeader from "../main-header";
import mainSidebar from "../main-sidebar";
import mainFooter from "../main-footer";
import CKEDITOR from "CKEDITOR";

export default {
  mounted() {
      CKEDITOR.replace('editor', { height: '400px'});
  },
  components: {
    mainHeader,
    mainSidebar,
    mainFooter
  }
}
</script>
<style scoped>
.nav-tabs-custom{box-shadow: none;}
</style>
