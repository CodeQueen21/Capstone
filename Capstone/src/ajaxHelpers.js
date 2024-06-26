import userData from "./components/Register";
import userOrderData from "./components/MenuItem";

async function fetchFoodItems() {
  try {
    const response = await fetch("http://localhost:3000/api/foodItems");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

const fetchSingleFoodItem = async (foodItemId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/foodItems/${foodItemId}`
    );
    console.log("response: ", response);
    if (!response.ok) {
      console.log("API error", response.status);
      return;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// const createUserOrder = async (user_id, userOrderData) => {
//   try {
//     const response = await fetch(
//       `http://localhost:3000/api/userFoodItems/${user_id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userOrderData),
//       }
//     );
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

const fetchUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error", error);
  }
};

// const addToCart = async (id, token) => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         items: item,
//       }),
//     });
//     const result = await response.json();
//     return result;
//     // return result;
//   } catch (error) {
//     console.error("Error", error);
//   }
// };

// async function fetchUserFoodItems() {
//   try {
//     const response = await fetch("http://localhost:3000/api/userFoodItems");
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

export {
  fetchFoodItems,
  fetchSingleFoodItem,
  fetchUser,
  createUser,
  userData,
  userOrderData,
};
