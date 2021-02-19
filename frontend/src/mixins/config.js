export default {
    data() {
        return {
            globalConfig: {
                siteName: 'SITE NAME',
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
        console.log('CREATED', this.globalConfig);
        window.globalConfig = this.globalConfig;
    }
}
