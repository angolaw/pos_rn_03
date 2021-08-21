import api from '../api';
import {Person} from '../utils/person';

async function createUser(data: Person) {
  return api.post('http://192.168.2.110:3333/persons', data);
}
async function getAll() {
  const response = await api.get('http://192.168.2.110:3333/persons');

  return response.data;
}
async function updateData(updatedData: Person) {
  return await api.put(
    `http://192.168.2.110:3333/persons/${updatedData.data.id}`,
    updatedData.data,
  );
}
async function deleteUser(id: string) {
  return await api.delete(`http://192.168.2.110:3333/persons/${id}`);
}

export {createUser, getAll, updateData, deleteUser};
