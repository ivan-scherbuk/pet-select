import axios from "axios";

const instance = axios.create({
  baseURL: "https://private-anon-caaec96a2c-pizzaapp.apiary-mock.com/",
});

export const pizzaAPI = {
  getAllRestaurants() {
    return instance.get(
      'restaurants/'
    );
  },
  getPizzasById(id) {
    return instance.get(`restaurants/${id}/menu?category=Pizza&orderBy=rank`);
  },
};
