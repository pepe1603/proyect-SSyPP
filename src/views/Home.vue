<script setup>
import { ref } from "vue";
import C_PracticaDatos from '@/components/c_practicasDatos.vue'
import C_ServicioDatos from '@/components/c_servicioDatos.vue'

const date = ref(new Date("2000-01-01")); // Establecer la fecha por defecto

const items = ref([

    {
    label: 'Documentos',
    icon: 'pi pi-copy',
    items: [
        {
            label: 'Requisitoas',
            icon: 'pi pi-comments'
            
        },
        {
            label: 'INE',
            icon: 'pi pi-id-card'
            
        },
        {
            label: 'Telefono Personal',
            icon: 'pi pi-whatsapp'
            
        },
        {
            label: 'coreo Unach',
            icon: 'pi pi-envelope'
            
        }
        
    ]

    

    }

])
</script>

<template>
<Panel class="Header">

    <PanelMenu :model="items" class="w-full md:w-15rem "/>
    
    <Card>
        <template #content>
            <C_PracticaDatos></C_PracticaDatos>
        </template>
    </Card>

    <Card>
        <template #content>
            <C_ServicioDatos></C_ServicioDatos>
        </template>
    </Card>

    


</Panel>


</template>
<style scoped>

</style>