const { envs } = require('./config/env')
const { startServer } = require('./server/server')



const main = () => {
    startServer(
        {
            port: envs.PORT,
            public_path: envs.PUBLIC_PATH
        }
    )
}


// FUNCION AGNOSTICA AUTO INVOCADA
( async () => {
    main()    
})()