module.exports = {
    async execute(req) {
        try {
            return "Não implementado devido a necessidade do uso da api ISBNdb"
        } catch (error) {
            client.release()
            return error
        }
    }
}