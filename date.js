const { format } = require('date-fns')

const codes = {
    formatHMMSDMY: "HH:mm:ss\tdd/MM/yyyy",
    formatDMYHMMS: "dd/MM/yyyy\tHH:mm:ss"

}

const date = function(Format) {
    return format(new Date(), Format)
}

module.exports = {codes, date}
