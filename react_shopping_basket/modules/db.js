export function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE";
  const url = "https://vixqydjnpjfivynbkcev.supabase.co";

  fetch(url + "/rest/v1/react_shopping_basket", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Prefer: "return=representation",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// The (payload) argument of the function here ---> Is the object in the callback function in CheckOutForm.jsx
// The body here sntringify that object.
