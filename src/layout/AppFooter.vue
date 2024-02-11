<script>



</script>

<template>
    <footer class="layuot-footer">
        <div class="group-1">
         <div class="box">  
                <figure>
                    <a href="#">
                        <img src="../assets/images/logo_unach.png" alt="" srcset="">
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>Sobre Nosostros</h2>
                <p>Boulevard Belisario Domínguez, Km. 1081, Sin Número, Terán, Tuxtla Gutiérrez, Chiapas, México, 29050.</p>
                <div class="red-social d-flex">
                    <a target="_blank" class="custom-icon" href="#">
                        <i class="pi pi-facebook"></i>
                    </a>
                    <a target="_blank" class="custom-icon" href="#">
                        <i class="pi pi-youtube"></i>
                    </a>
                    <a target="_blank" class="custom-icon" href="#">
                        <i class="pi pi-twitter"></i>
                    </a>
                </div>

            </div>
            <div class="box">
                <h2>Mas informacion</h2>

                <p>Profesional uni</p>
                <p>Calendario Escolar</p>
                <p>acentro de eAtencion uni</p>
                <p>Telefonos: Tel:52 (961) 617-8000</p>

            </div>
        </div>
        <div class="group-2">
            <small>&copy; 2024 <b>Unach</b> - Todos Los derechos Reservados.</small>

        </div>
       
        
    </footer>
</template>

<style scoped>

.layout-footer{
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
}

.group-1{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.5rem;
    padding: 3rem 0;
}

.group-1 .box figure{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.group-1 .box figure img{
    width: 250px;
}
.d-flex{
    display: flex;
    align-items: center;
    

}

.custom-icon {
  display: inline-block;
  text-align: center;
  margin-right: 10px; /* Espacio entre los iconos */
  transition: all 300ms ease;
}

.custom-icon i {
  font-size: 24px; /* Tamaño del icono */
  color: rgb(141, 130, 27); /* Color del icono */
}
.custom-icon:hover i{
    color: #fff;
}
.group-2{
    text-align: center;
}
.group-2 small{
    font-size: 15px;
}

@media (max-width: 800px){

    .group-1{
        width: 90%;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1.8rem;
        padding: 2rem 0;
    }
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

</style>