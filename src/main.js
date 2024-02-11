import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { loadFonts } from './plugins/webfontloader'
import '@/assets/styles.scss'

//Cargamos Css y js de Botstrap 

//iport Themes /
//import 'primevue/resources/themes/aura-light-green/theme.css'
import "primevue/resources/themes/aura-light-amber/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

//A
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

//B
import Button from 'primevue/button';
//C

import Card from 'primevue/card/Card.vue';
import Checkbox from 'primevue/checkbox'
import  InputText  from 'primevue/inputtext';
import  Dropdown  from 'primevue/dropdown';

//I
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputSwitch from 'primevue/inputswitch';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';

import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';



loadFonts()


const app = createApp(App)



app.use(PrimeVue, { ripple: true  });
  app.use(router)

  //importtamos Componmetes Prime - A
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
//B
app.component('Button', Button);
//C

app.component('Card', Card);
app.component('Checkbox', Checkbox);
//I
app.component('IconField', IconField);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputIcon', InputIcon);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('Dropdown', Dropdown);
app.component('Inputtext', InputText )

//l
app.component('FloatLabel', FloatLabel)
//P
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);



  app.mount('#app')
