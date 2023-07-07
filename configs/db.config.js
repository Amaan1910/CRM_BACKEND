const username = "walkinlove02";
const password = "walkinlove";

module.exports = {
  DB_NAME: "crm_db",
  DB_URL:
    process.env.MONGODB_URI ||
    `mongodb+srv://${username}:${password}@cluster0.3l6vivj.mongodb.net/?retryWrites=true&w=majority`,
};
