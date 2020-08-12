define([
    './index.js',
    './set_music.js',
    './get_music.js'
], function ({ Index }, { SetMusic }, { GetMusic }) {

    let Music = {
        data() {
            return {
                message: "test"
            }
        },
        template: `
            <router-view></router-view>
        `,
        router: new VueRouter({
            routes: [
                { path: '/', name: 'index', component: Index },
                { path: '/set-music', name: 'set-music', component: SetMusic, props: true },
                { path: '/get-music', name: 'get-music', component: GetMusic, props: true },
            ]
        })
    }
    return { Music }

});