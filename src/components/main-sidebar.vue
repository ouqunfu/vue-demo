<template>
<aside class="main-sidebar">

  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <!-- Sidebar user panel (optional) -->
    <div class="user-panel">
      <div class="pull-left image">
        <img src="/static/img/user2-160x160.jpg" class="img-circle"
             alt="User Image">
      </div>
      <div class="pull-left info">
        <p>Jeffrey Ou</p>
        <!-- Status -->
        <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
      </div>
    </div>

    <!-- search form (Optional) -->
    <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
        <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
      </div>
    </form>
    <!-- /.search form -->

    <!-- Sidebar Menu -->
    <ul class="sidebar-menu" data-widget="tree">
      <li class="header">主导航</li>
      <!-- 首页 dashboard -->
      <li class='active'><a href="/"><i class="fa fa-dashboard"></i> <span>首页</span></a></li>
      <!--内容-->
      <li class="treeview">
        <a href="#"><i class="fa fa-list-alt"></i> <span>内容</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><router-link to="/columns-list">栏目管理</router-link></li>
          <li><a href="#cato-list">分类管理</a></li>
          <li><a href="#subjects-list">专题管理</a></li>
          <li><a href="#contents-list">内容管理</a></li>
          <li><a href="#url-manage-list">URL规则</a></li>
          <li><a href="#gallery-list-dir">图片库</a></li>
          <li><a href="#tags-list">标签管理</a></li>
        </ul>
      </li>
      <!--用户-->
      <li class="treeview">
        <a href="#"><i class="fa fa-users"></i> <span>用户</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#users-list">用户管理</a></li>
          <li><a href="#role-list">角色管理</a></li>
        </ul>
      </li>
      <!--功能-->
      <li class="treeview">
        <a href="#"><i class="fa fa-th"></i> <span>功能</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#notice-list-notice">公告管理</a></li>
          <li><a href="#notice-list-message">留言管理</a></li>
          <li><a href="#comments-list">评论管理</a></li>
          <li><a href="#data-manage-index">数据管理</a></li>
        </ul>
      </li>
      <!--营销-->
      <li class="treeview">
        <a href="#"><i class="fa fa-signal"></i> <span>营销</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#market-list-seo-rule">SEO管理</a></li>
          <li><a href="#market-list-links">友链管理</a></li>
        </ul>
      </li>
      <!--设置-->
      <li class="treeview">
        <a href="#"><i class="fa fa-cog"></i> <span>设置</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#settings-index">网站配置</a></li>
          <li><a href="#settings-watermark">水印设置</a></li>
          <li><a href="#settings-str-filter-list">敏感词管理</a></li>
          <li><a href="#settings-attachment">附件设置</a></li>
        </ul>
      </li>
      <!--自定义-->
      <li class="treeview ">
        <a href="#"><i class="fa fa-pencil-square-o"></i> <span>自定义</span>
          <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#customs-list-content-field">内容字段</a></li>
          <li><a href="#customs-list-user-field">用户字段</a></li>
        </ul>
      </li>
    </ul>
    <!-- /.sidebar-menu -->
  </section>
  <!-- /.sidebar -->
</aside>
</template>
<script>
export default {
  name: 'main-sidebar'
}
</script>
<style scoped>
</style>