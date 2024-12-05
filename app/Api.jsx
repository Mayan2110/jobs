// Job add,edit,delete,get API Start

export const fetchJobsApi = async () => {
  try {
    const response = await fetch(
      `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load job data.");
  }
};

export const fetchJobsApiByid = async ({ id }) => {
  try {
    const response = await fetch(
      `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load job data.");
  }
};

export const addJobsAPI = async ({ formData }) => {
  try {
    const response = await fetch(
      `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load job data.");
  }
};

export const editJobsAPI = async ({ formData, id }) => {
  try {
    const response = await fetch(
      `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load job data.");
  }
};

export const JobsDeleteApiByid = async ({ id }) => {
  try {
    const response = await fetch(
      `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load job data.");
  }
};

// Job add,edit,delete,get API End
