module.exports = {
    default: {
        require: ['stepDefinitions/*.js'],   // Path to Step Definitions
        format: ['html:cucumber-report.html'],
        publishQuiet: true
    }
};
