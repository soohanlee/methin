import axios from 'axios';

export const postNotice = async (data) => {
  return await axios.post(`api/admin/notice`, data);
};

export const getNotice = async () => {
  return await axios.get(`api/admin/notice`);
};

export const getNoticeId = async (id) => {
  return await axios.get(`api/admin/notice/${id}`);
};

export const patchNotice = async (id, data) => {
  return await axios.patch(`api/admin/notice/${id}`, data);
};

export const deleteNotice = async (id) => {
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
