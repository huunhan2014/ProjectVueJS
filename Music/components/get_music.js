define(['./store.js'], function ({ Store }) {

    let GetMusic = {
        props: ['title'],
        data() {
            return {
                exit: 'Exit',
                value: Store.value
            }
        },
        template: `
        <div>
            <p> {{ title }} Page:</p>

            <p>{{value}}</p>

            <router-link :to="{ name: 'index' }">
                <button>{{ exit }}</button>
            </router-link>
            
        </div>
          `,
    }
    return { GetMusic }

});