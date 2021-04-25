import hostURL from "../services/hostURL";

export default {
  async getMessages() {
    try {
      const res = await fetch(`${hostURL}`);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  },

  async postMessages(message) {
    console.log("senDMessage To server", message);
    return await fetch(hostURL, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
