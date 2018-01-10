<template>
<div class="wrapper">

  <!-- Main Header -->
  <main-header></main-header>

  <!-- Left side column. contains the logo and sidebar -->
  <main-sidebar></main-sidebar>

  <!-- Content Wrapper. Contains page content -->
  <content-wrapper></content-wrapper>
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <main-footer></main-footer>

</div>
</template>
<script>
import mainHeader from "./main-header";
import mainSidebar from "./main-sidebar";
import contentWrapper from "./content-wrapper";
import mainFooter from "./main-footer";

export default {
  name: 'starter',
  components: {
    mainHeader,
    mainSidebar,
    contentWrapper,
    mainFooter
  }
}
</script>
