const yargs = require('yargs');
yargs.command({
    command: "testcommand",
    builder: {
        name: { demandOption: true },
        age: { demandOption: true }
    },
    handler: function (argv) {
        console.log("hello");
        console.log(argv);
    }
})
yargs.argv