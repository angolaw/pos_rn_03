import api from '../api';

async function createUser(data) {
  return api.post('http://192.168.2.110:3333/persons', data);
}
async function getAll() {
  const response = await api.get('http://192.168.2.110:3333/persons');

  return response.data;
}
async function updateData(updatedData) {
  return await api.put(
    `http://192.168.2.110:3333/persons/${updatedData.data.id}`,
    updatedData.data,
  );
}

export {createUser, getAll, updateData};
