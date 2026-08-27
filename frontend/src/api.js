const API_BASE_URL = "https://srb-publication-backend.onrender.com/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  let data = {};
  try {
    data = await response.json();
  } catch {}

  if (!response.ok) {
    const error = new Error(data.message || "Request failed");
    error.data = data;
    throw error;
  }

  return data;
}

export const submitContact = (data) =>
  request("/contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const submitManuscript = (data) =>
  request("/submissions/", {
    method: "POST",
    body: data,
  });

export const getPublications = () =>
  request("/publications/");