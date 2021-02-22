export default {
    data() {
        return {
            globalConfig: {
                siteName: 'SITE NAME',
                siteLogo: 'http://dev.schatex.com/wp-content/uploads/2020/05/logo.png',
                languages: {
                    de: {
                        label: 'Deutsch',
                        value: 'de'
                    },
                    en: {
                        label: 'English',
                        value: 'en'
                    },
                    fr: {
                        label: 'Français',
                        value: 'fr'
                    },
                    it: {
                        label: 'Italiano',
                        value: 'it'
                    }
                },
                conditions: 'http://dev.schatex.com/wp-content/uploads/2021/01/SCHATEX-AGB.pdf'
            }
        }
    },

    created() {
        window.globalConfig = this.globalConfig;
    }
}
