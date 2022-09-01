export default class HttpStatusError extends Error {
  constructor(message, response) {
    super(message);
    this.name = "HttpStatusError";

    if (response) {
      this.status = response.status;
      this.response = response;
    }
  }
}