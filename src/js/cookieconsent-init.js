import "../../node_modules/vanilla-cookieconsent";
import "../../node_modules/vanilla-cookieconsent/src/cookieconsent.css";


function CookiesConsent() {
// obtain plugin
let cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'cs',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false
    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom right',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: true,            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        "cs": {
            consent_modal: {
                title: "Informace o cookies",
                description: "Kliknut??m na tla????tko Souhlas??m se v????m se ulo???? technick??, analytick?? a marketingov?? soubory cookie, abychom v??m mohli umo??nit pohodln?? pou????v??n?? str??nek, m????it funk??nost na??ich str??nek a c??lit na v??s reklamu. Sv?? preference m????ete snadno upravit kliknut??m na Nastaven?? soubor?? cookie.",
                primary_btn: {
                    text: "Souhlas??m se v????m",
                    role: "accept_all"
                },
                secondary_btn: {
                    text: "Nastaven?? cookies",
                    role: "settings"
                }
            },
            settings_modal: {
                title: 'Nastaven?? cookies',
                save_settings_btn: 'Ulo??it nastaven??',
                accept_all_btn: 'Povolit v??e',
                reject_all_btn: 'Zak??zat v??e',
                close_btn_label: 'Zav????t',
                cookie_table_headers: [
                    {col1: 'Cookie'},
                    {col2: 'Popis'},
                ],
                blocks: [
                    {
                        title: "Pou????v??me cookies",
                        description: "Soubory cookie pou????v??me k anal??ze ??daj?? o na??ich n??v??t??vn??c??ch, ke zlep??en?? na??ich webov??ch str??nek, zobrazen?? personalizovan??ho obsahu a k tomu, abychom v??m poskytli skv??l?? z????itek z webu. Pou????v??n??m tohoto webu s t??mto pou????v??n??m souhlas??te."
                    },
                    {
                        title: "Nezbytn?? soubory cookies",
                        description: "Tyto soubory cookie jsou nezbytn?? pro fungov??n?? webov??ch str??nek, nen?? tedy mo??n?? je zak??zat. Obvykle se nastavuj?? v reakci na akci, kterou na webu sami provedete, jako je nastaven?? zabezpe??en??, p??ihl????en?? a vypl??ov??n?? formul??????. Sv??j prohl????e?? m????ete nastavit tak, aby blokoval soubory cookie nebo o nich zas??lal upozorn??n??. M??jte na pam??ti, ??e n??kter?? str??nky nebudou bez t??chto soubor?? fungovat. Tyto soubory cookie neukl??daj?? ????dn?? informace, kter?? lze p??i??adit konkr??tn?? osob??. Tyto soubory cookie m????eme nastavit my nebo poskytovatel?? t??et??ch stran, jejich?? slu??by na webu vyu????v??me.",
                        toggle: {
                            value: "necessary",
                            enabled: true,
                            readonly: true,
                        },
                        cookie_table: [
                            {
                                col1: "cc_cookie",
                                col2: "Va??e nastaven?? cookies z tohoto webu"
                            }
                        ]
                    },
                    {
                        title: "Analytick?? cookies",
                        description: "Tyto soubory cookie se pou????vaj?? ke zlep??en?? fungov??n?? webov??ch str??nek. Umo????uj?? n??m rozpoznat a sledovat po??et n??v??t??vn??k?? a sledovat, jak n??v??t??vn??ci web pou????vaj??. Pom??haj?? n??m zlep??ovat zp??sob, jak??m webov?? str??nky funguj??, nap????klad t??m, ??e u??ivatel??m umo????uj?? snadno naj??t to, co hledaj??. Tyto soubory cookie neshroma????uj?? informace, kter?? by v??s mohly identifikovat. Pomoc?? t??chto n??stroj?? analyzujeme a pravideln?? zlep??ujeme funk??nost na??ich webov??ch str??nek. Z??skan?? statistiky m????eme vyu????t ke zlep??en?? u??ivatelsk??ho komfortu a k tomu, aby byla n??v??t??va Webu pro v??s jako u??ivatele zaj??mav??j????.",
                        toggle: {
                            value: "analytics",
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: "_ga/_ga*, _gid, _ut*",
                                col2: "Google Analytics - ukl??d?? a po????t?? n??v??t??vnost str??nek a chov??n?? webu."
                            }
                        ]
                    }
                ]
            }
        },
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage ????',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                    }
                ]
            }
        }
    }
});
}

export default CookiesConsent;