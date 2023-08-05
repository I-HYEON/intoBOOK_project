import axiosInstance from './axiosConfig';

export const getBookHistory = async (userBookPk, page) => {
  try {
    const res = await axiosInstance.get(`/historys/userBook`, {
      params: {
        userBookPk: userBookPk,
        page: page,
      },
    });
    return res.data;
  } catch (err) {
    return err
  }
};