'use strict'

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework')
const { Alexa } = require('jovo-platform-alexa')
const { GoogleAssistant } = require('jovo-platform-googleassistant')
const { JovoDebugger } = require('jovo-plugin-debugger')
const { FileDb } = require('jovo-db-filedb')

const app = new App()

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
)

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

const audioFiles = [
    {
        url: 'https://od.lk/s/NjhfNjExMzUwNzJf/dio-wryyy.mp3',
        name: 'WRYYYYYYYY'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwNzVf/goodbye-jojo_mFPOAvO.mp3',
        name: 'Goodbye Jojo'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwNzlf/hey-baby_JAbLiIv.mp3',
        name: 'Hey baby'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwODNf/holy-shit-jojo.mp3',
        name: 'Holy shit'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwODRf/joseph-joestar-nice.mp3',
        name: 'Nice'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwODdf/kono-dio-da99.mp3',
        name: 'Kono Dio da!'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwOTFf/ringtone-jojo-jotaro-ora-ora-ora_-mp3cut.mp3',
        name: 'Ora ora ora'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwOTJf/sex-pistols.mp3',
        name: 'Sex pistols'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwOTRf/shizaaaaaa.mp3',
        name: 'Caesaaaaaaaaaaaaaaaaaaaaaar'
    },
    {
        url: 'https://od.lk/d/NjhfNjExMzUwOTZf/yareyaredaze.mp3',
        name: 'Yare yare daze'
    },
    {
        url: 'https://od.lk/s/NjhfNjExMzUwOTVf/untitled_1071.mp3',
        name: 'To be continued ...'
    },
    {
        url: 'https://od.lk/s/NjhfNjExNTI2ODdf/jjba-pillar-men2.mp3',
        name: 'Pillar Men AWAKEN!'
    }
]

const responses = {
    "en-US": ['Here!', 'Bye'],
    "pt-BR": ['Toma!', 'Adeus']
}

app.setHandler({

    LAUNCH() { return this.toIntent('PlayRandomSoundIntent') },

    PlayRandomSoundIntent() {
        const locale = this.$request.getLocale()
        const audio = audioFiles[Math.floor(Math.random() * audioFiles.length)]
        this.tell(responses[locale][0])
        this.$googleAction.$mediaResponse.play(audio.url, audio.name)
    },

    END() { this.tell(responses[locale][1]) }

})

module.exports.app = app;
