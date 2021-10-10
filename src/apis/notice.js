import axios from 'axios';

export const postNotice = async (data) => {
  return await axios.post(`api/admin/notice`, data);
};

export const getNotice = async (offset) => {
  return await axios.get(`api/admin/notice?offset=${offset}`);
};

export const getNoticeId = async (id) => {
  return await axios.get(`api/admin/notice/${id}`);
};

export const patchNotice = async (id, data) => {
  return await axios.patch(`api/admin/notice/${id}`, data);
};

export const deleteNotice = async (id) => {
  console.log('api/admin/notice/' + id);
  return await axios.delete(`api/admin/notice/${id}`);
};
///////////////////////////////////////////////////////////////////
export const postFaq = async (data) => {
  return await axios.post(`api/admin/faq`, data);
};

export const getFaq = async () => {
  return await axios.get(`api/admin/faq`);
};

export const patchFaq = async (id, data) => {
  return await axios.patch(`api/admin/faq/${id}`, data);
};

export const deleteFaq = async (id) => {
  return await axios.delete(`api/admin/faq/${id}`);
};

export const getClientPageNotice = async (offset, limit, category) => {
  return await axios.get(
    `api/notice?offset=${offset}?limit=${limit}?category=${category}`,
  );
};

export const getClientPageNoticeDetail = async (id) => {
  return await axios.get(`api/notice/${id}`);
};

export const getClientPageFaq = async (offset, limit) => {
  return await axios.get(`api/faq?offset=${offset}?limit=${limit}`);
};
