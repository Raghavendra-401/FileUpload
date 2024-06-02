const cds = require('@sap/cds');

class FileService extends cds.ApplicationService {
    init() {
        this.before('CREATE', 'Files', async (req, ...res) => {
            req.data.url = `/odata/v2/file-management/Files/${req.data.ID}/fileData`;
        })

        return super.init()
    }
}
module.exports = FileService