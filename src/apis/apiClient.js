import axios from "axios";

class ApiClient {
  #userToken;
  #options = {};

  constructor(options) {
    this.#options.HOST = options.HOST.replace(/(.*)(\/$)/, "$1"); // remove trailing slash
  }

  get userToken() {
    return this.#userToken;
  }

  set userToken(userToken) {
    this.#userToken = userToken;
  }

  async #request(method, path, data) {
    let url = `${this.#options.HOST}/${path}`;

    const config = {
      url,
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.data = JSON.stringify(data);

    if (this.#userToken) {
      config.headers.Authorization = `Bearer ${this.#userToken}`;
    }

    try {
      const response = await axios.request(config);
      return response.data;
    } catch (e) {
      if (e.response) throw e.response;
      throw e;
    }
  }
  async #get(path) {
    return await this.#request("GET", path);
  }
  async #post(path, data) {
    return await this.#request("POST", path, data);
  }
  async #put(path, data) {
    return await this.#request("PUT", path, data);
  }
  async #delete(path) {
    return await this.#request("DELETE", path);
  }
  async postSignup(data) {
    return await this.#post("auth/signup", data);
  }

  async postSignin(data) {
    return await this.#post("auth/signin", data);
  }

  async getTodos() {
    return await this.#get("todos");
  }

  async createTodo(data) {
    return await this.#post("todos", data);
  }

  async updateTodo(id, data) {
    return await this.#put(`todos/${id}`, data);
  }

  async deleteTodo(id) {
    return await this.#delete(`todos/${id}`);
  }
}

export const apiClient = new ApiClient({
  HOST: "https://www.pre-onboarding-selection-task.shop/",
});
