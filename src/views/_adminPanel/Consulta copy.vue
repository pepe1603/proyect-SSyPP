
<template>
    <div class="card">
        <TreeTable :value="nodes">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-3">
                        <Button type="button" icon="pi pi-search" rounded  style="margin-right: .5rem;"> </Button>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" ></Button>
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-content-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warning" ></Button>
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script >
import { NodeService } from '@/services/NodeService';
import TreeTable from 'primevue/treetable';
import { ref } from 'vue';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default{
    name:'Consultas',
    components:{
        TreeTable,
        Column,
        Button
    },
    data(){
        return{
            nodes: null,
        }

    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }

}

</script>
