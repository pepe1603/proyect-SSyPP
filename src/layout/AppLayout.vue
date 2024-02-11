<script setup>
import AppSidebar from './AppSidebar.vue'
import AppTopbar from './AppTopbar.vue'
import AppFooter from './AppFooter.vue'

</script>
<template>
    <div class="layout-container">
        <!--- AppTopbar -->
        <app-topbar></app-topbar>

        <div class="layout--sidebar">
            <!--- sidebar fija que se oculta mediante btnBars  falta por impmentar-->
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <!-- Renderizamos con router las vistas de cada compoente deacuerdo al Router -->
            <div class="layout-main">
                <router-view></router-view>
            </div>

            <!--  footer laous---> 
            <app-footer></app-footer>            
        </div>


    </div>
</template>
<style lang="scss" scoped>

</style>