const { username, password } = process.env;

export const connectionString =
  "mongodb+srv://" + username + ":" + password + "@cluster0.tglrx.mongodb.net/ChattyMiceDB?retryWrites=true&w=majority&appName=Cluster0"
