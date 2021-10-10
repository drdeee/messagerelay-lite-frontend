export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    target: 'server',
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'MessageRelay',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'quill/dist/quill.core.css',
        'quill/dist/quill.snow.css',
        'quill-emoji/dist/quill-emoji.css',
        '~/assets/css/bootstrap.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~plugins/quill', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    auth: {
        strategies: {
            local: false,
            cloud: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://auth.asklios.de/auth/realms/test/protocol/openid-connect/auth',
                    token: 'https://auth.asklios.de/auth/realms/test/protocol/openid-connect/token',
                    userInfo: 'https://auth.asklios.de/auth/realms/test/protocol/openid-connect/userinfo',
                },
                token: {
                    maxAge: 600,
                },
                responseType: 'code',
                grantType: 'authorization_code',
                clientId: 'test',
                scope: ['openid'],
                codeChallengeMethod: 'plain',
            },
        }

    },


    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'http://localhost/api/v1/frontend'
    },

    router: {
        middleware: ['auth']
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}