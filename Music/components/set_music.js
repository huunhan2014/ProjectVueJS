define(['./store.js'], function ({ Store }) {

    let SetMusic = {
        props: ['title'],
        data() {
            return {
                exit: 'Exit',
                value: '',
            }
        },
        template: `
        <fieldset>
            <legend>{{ title }}:</legend>

            <label for="name-music">Name music:</label>

            <input type="text" id="name-music" name="nameMusic" v-model="value"><br><br>
            
            <button @click="saveStore">Submit</button>

            <router-link :to="{ name: 'index' }">
                <button>{{ exit }}</button>
            </router-link>
       </fieldset>
          `,
        methods: {
            saveStore() {
                Store.value = this.value;
                this.value = ''
            }
        },
    }
    return { SetMusic }

});