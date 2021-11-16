import axios from 'axios';


const baseUrl = '/api/admin/category';
export const getCategory = async () => {
  return await axios.get(`${baseUrl}`);
};


export const getCategoryAsTreeArray = async () => {

  const result = await axios.get(`${baseUrl}`);

  if (result.status == 200) {
    const { message, data } = result.data;
    let menuState = [];
    let menuArr_depth = [[], [], []]; //너비 우선 삽입을 위해 뎁스별로 배열 분리
    data.forEach(m => {
      menuArr_depth[m.depth].push(m);
    });

    const find = (root, pKey) => {
      return root.find((item) => {
        return item.key === pKey
      })
    }

    menuArr_depth.forEach((arr) => {
      arr.forEach(menu => {
        var target = menuState;
        if (menu.root_parent_id !== null &&
          menu.root_parent_id !== menu.parent_id) //니가 뎁스 3이냐?
          target = find(target, menu.root_parent_id).children;

        if (menu.parent_id !== null) target = find(target, menu.parent_id).children; // 니가 뎁스 2냐?

        target.push({
          key: menu.id,
          name: menu.full_name,
          isDisplay: menu.preview_status === 1,
          children: []
        })
      })
    })

    return menuState;
  }
}