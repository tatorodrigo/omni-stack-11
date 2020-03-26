const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where({ id })
      .select("name")
      .first();

    if (!ong) {
      return response.status(404).json({ error: "Not found" });
    }

    return response.json(ong);
  }
};
