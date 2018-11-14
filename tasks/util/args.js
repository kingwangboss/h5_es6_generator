import yargs from 'yargs';

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of scroucemaps'
    })

    .option('port', {
        string: true,
        default: 3000,
        describe: 'server port'
    })

    .argv

    export default args;