define([], function () {

    let Index = {
        data() {
            return {
                message: "Select options",
                setmusic: "Set Music",
                getmusic: "Get Music"
            }
        },
        template: `
            <div>
                <h3>{{ message }}</h3>
                <router-link :to="{ name: 'set-music', params : { title: setmusic }}">
                    <a>{{ setmusic }}</a>
                </router-link>
                
                <router-link :to="{ name: 'get-music', params : { title: getmusic, nameMusic: nameMusic }}">
                    <a>{{ getmusic }}</a>
                </router-link>
            </div>
        `,
    }
    return { Index }

});
