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
          <li><router-link to="/cato-list">分类管理</router-link></li>
          <li><router-link to="/subjects-list">专题管理</router-link></li>
          <li><router-link to="/contents-list">内容管理</router-link></li>
          <li><router-link to="/url-manage-list">URL规则</router-link></li>
          <li><router-link to="/gallery-list-dir">图片库</router-link></li>
          <li><router-link to="/tags-list">标签管理</router-link></li>
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
          <li><router-link to="/users-list">用户管理</router-link></li>
          <li><router-link to="/role-list">角色管理</router-link></li>
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
          <li><router-link to="/notice-list-notice">公告管理</router-link></li>
          <li><router-link to="/notice-list-message">留言管理</router-link></li>
          <li><router-link to="/comments-list">评论管理</router-link></li>
          <li><router-link to="/data-manage-index">数据管理</router-link></li>
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
          <li><router-link to="/market-list-seo-rule">SEO管理</router-link></li>
          <li><router-link to="/market-list-links">友链管理</router-link></li>
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
          <li><router-link to="/settings-index">网站配置</router-link></li>
          <li><router-link to="/settings-watermark">水印设置</router-link></li>
          <li><router-link to="/settings-str-filter-list">敏感词管理</router-link></li>
          <li><router-link to="/settings-attachment">附件设置</router-link></li>
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
          <li><router-link to="/customs-list-content-field">内容字段</router-link></li>
          <li><router-link to="/customs-list-user-field">用户字段</router-link></li>
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