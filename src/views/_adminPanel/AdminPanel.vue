<template>
    <div class="wrapper">
        <aside id="asidebar">
            <div class="d-flex">
                <button id="toggle-btn" type="buton" @click="toggleSidebar">
                    <i class="pi pi-th-large"></i>
                </button>
                <div class="sidebar-logo">
                    <router-link to="/cPanelAdmin" class="link-logo">
                       <!--- <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="medium" shape="circle" /> -->
                      <span>Unach 2024</span>
                    </router-link>
                </div>
            </div>

            <ul class="sidebar-nav" >

                <li class="sidebar-item">
                    <router-link to="/home" class="sidebar-link">
                        <i class="pi pi-home" label="Perfil" ></i>
                        <span  class="span-text">Home</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link to="/Formulario" class="sidebar-link">
                        <i class="pi pi-check" label="Perfil" ></i>
                        <span  class="span-text">Formulario</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link to="/Consultas"  class="sidebar-link">
                        <i class="pi pi-list" ></i>
                        <span  class="span-text">Consultas</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link to="/Empresas"  class="sidebar-link">
                        <i class="pi pi-users" ></i>
                        <span  class="span-text">Empresas</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link to="/Documentacion"  class="sidebar-link">
                        <i class="pi pi-paperclip" ></i>
                        <span  class="span-text">Documentacion</span>
                    </router-link>
                </li>
                <li class="sidebar-item">
                    
                        
                            <router-link to="/Exportar"  class="sidebar-link">
                                <i class="pi pi-file-export" ></i>
                                <span class="span-text">Exportar</span>
                            </router-link>
                            
                    
                </li>   

                
            </ul>
                <div class="item-sign-out">
                        <router-link to="/cPanelAdmin" style="color: #fff;">
                            <i class="pi pi-sign-out"></i>
                        </router-link>
                    </div> 
        </aside>
        <div class="container-main p-3">
            <div class="header">
                <app-topbar></app-topbar>

            </div>
            <div class="content-main">

                
                <router-view></router-view>

            </div>
            <div class="footer">
                <app-footer></app-footer>
                
            </div>

        </div>
    </div>
    
</template>

<script>

import AppTopbar from '@/layout/AppTopbar.vue';
import AppFooter from '@/layout/AppFooter.vue';

    export default {
  components: { AppTopbar, AppFooter },
  
        name:'cPanelAdmin',
        data(){
            return{
                
            }
        },
        
        mounted () {/*
            this.redirectToCpanel();*/
            
            this.toggleSidebar();
            // Ejecuta las funciones al cargar el documento
            document.addEventListener('DOMContentLoaded', () => {
                this.hideSidebarOnLinkClick();
            });

        },
        methods: {
            toggleSidebar() {
                const sidebar = document.querySelector('#asidebar');
                sidebar.classList.toggle("expand");

                const spanTexts = document.querySelectorAll('.span-text');
                spanTexts.forEach(spanText => {
                    if (! sidebar.classList.contains("expand")) {
                        // Si la clase 'expand' no está presente, oculta el elemento '.span-text'
                        spanText.style.display = "none";
                    } else {
                        // Si la clase 'expand' está presente, muestra el elemento '.span-text'
                        spanText.style.display = "";
                    }
                });

            },

// Oculta el sidebar cuando se hace clic en un enlace dentro del sidebar en dispositivos móviles
hideSidebarOnLinkClick() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sidebar = document.querySelector('#asidebar');
            sidebar.classList.remove("expand");
        });
    });

    
}

/*
            redirectToCpanel(){
                //redirigimos al panel del admin, es decir al Home
                this.$router.push('/cPanelAdmin');
            }*/
        }
        
    }
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');




.wrapper{
    display: flex;
    height: 100vh;
    overflow: hidden;

}
.container-main{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    transition: all .7s ease;
    
}

#asidebar{
    height: 100%;
    width: 60px;
    z-index: 1000;
    transition: all .4s ease;
    display: flex;
    flex-direction: column;
    background: #242424;
    box-shadow: 0 5px 8px #fff;
    /*border-radius: 15px;*/
    padding-top: .5rem;

}

#asidebar.expand{
    width: 260px;/* ancho del sidebar expandido*/

}

#toggle-btn{
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: .5rem 1rem;
}

#toggle-btn i{
    font-size: 1.5rem;
    color: #fff;  
}

.sidebar-logo i{
text-align: center;
    color: #fff;
    font-weight: 600;
}
.d-flex{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.link-logo{
font-weight: 600;

}
.link-logo span{
    
    color: #ddcf05bd;
    text-wrap: nowrap;
    white-space: nowrap;

}

.sidebar-nav{
    margin: 2.3rem 0;
    margin-top: 7rem;
    padding: .5rem 0;
    flex: 1 1 auto;
}
.sidebar-item.hidden{
    display: none;
    margin-left: .5rem;

}
.sidebar-link{
    
    padding: .65rem 1.1rem;
    color: #fff;
    text-decoration: none;
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    white-space: nowrap;
    border-left: 3px solid  transparent;
}
.sidebar-link i{
    font-style: 1.5rem;
    margin-right: .74rem;
    line-height: 25px;
}

.sidebar-link:hover{
    background-color: rgba(255, 255, 255, 0.918);
    color: rgb(0, 0, 0); 
    text-decoration: underline;
    
    border-left: 4px solid rgb(183, 185, 67);
}
.sidebar-item{
    position: relative;
}
/*vcuando no tenga la clase esxpanded*/
#asidebar:not(.expand) .sidebar-logo{
    display: none;
}

.header{
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;

}

.footer{
    position: relative;
    padding-bottom: 1rem;
    background: #242424;
    color: white;
}

.content-main{
    padding: 1rem;
    min-height: calc(100vh - 50px);/*restamos el alto del footer*/
    margin-bottom:  50px;/*esopacio para el footer */

}
.item-sign-out{
    margin: 0 auto;
    padding: 1rem;

}

@media (max-width: 768px){
    .content-main{
        padding: 0;
        margin: 0;
    }
    #asidebar{
        position: absolute;
        width: 60px;
        height: 100%;
    }
    .container-main{
        margin-left: 50px;
    }
    .sidebar-nav{
        margin: 0 auto;
        list-style-type: none;
        margin-top: 3rem;
        
    }
    .sidebar-link{
        text-decoration: none;
    }
    .header{
        
        font-size: small;
    }
    @media (max-width: 450px){
        
        .sidebar-logo{
            display: none;
        }
        #asidebar{
            width: 60px;
        }

        .spant-text{
            display: none;
        }
    }

}
/* Estilos para el link activo */
.sidebar-item.active {
    background-color: #ccc; /* Color de fondo para el enlace activo */
}
</style>
