import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENT_URL = `${API_BASE}/assignments`;

export const deleteAssignment = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENT_URL}/asssignments/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment) => {
    const response = await axios.
      put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
    return response.data;
  };

  
export const addAssignment = async (assignmentId, assignment) => {
    const response = await axios.post(
      `${ASSIGNMENT_URL}/${assignmentId}/assignments`,
      assignment
    );
    return response.data;
  };
  
export const setAssignment = async (assignmentId) => {
  const response = await axios
    .get(`${ASSIGNMENT_URL}/assignments/${assignmentId}`);
  return response.data;
};
