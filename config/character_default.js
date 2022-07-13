/*
* 请不要直接修改此或删除此文件，防止后续更新冲突
* 如需新增自定义角色可【复制】此文件，改名为character.js
* 复制的character.js中可按格式及自己需求进行配置
* 最终character.js character_default.js两份配置会叠加生效
*
* 暂未做热更新，修改完毕请重启yunzai
* */

/*
* 角色列表，别名的第一个是标准名字，后面的为别名
* 实装的角色需要以数字roleid为key，自定义的角色及非实装角色请以英文为key
* */
export const customCharacters = {

  // 已有角色添加别名示例：为魈增加新的别名
  // roleid请参见Yunzai roleId.js
  10000026: ["魈", "风夜叉"],
  10000059: ["鹿野院平藏", "小鹿"],
  10000100: ["提纳里", "驴"], // ID暂无
  10000101: ["柯莱", "柯来", "科莱", "科来"],
  10000102: ["多莉", "多利", "多力"],
  // 以下为新增自定义角色，角色id请以小写英文定义
  paimon: ["派蒙", "应急食物", "应急食品", "吉祥物", "宠物", "外置器官", "会说话的动物", "矮堇瓜", "飞行矮堇瓜", "最好的伙伴"],
  sb: ["散兵", "国崩", "雷电国崩", "大炮", "雷电大炮", "雷大炮", "伞兵"],
  nvshi: ["女士", "炽热的炎之魔女", "炎之魔女"],
  baizhu: ["白术", "长生"],
  yaoyao: ["瑶瑶", "遥遥", "遥遥无期"],
  fanan: ["伐难", "水夜叉"],
  yingda: ["应达", "火夜叉", "火鼠大将"],
  ping: ["萍姥姥", "歌尘浪市真君", "歌尘浪市", "萍儿"]
}

/*
* 追加设置每个关系的可选角色，会与yunzai的设置同时起作用
* 一个角色可以在多个关系中
* */
export const wifeData = {
  // 老婆&女朋友：成女、少女
  girlfriend: "伐难, 女士, 萍姥姥, 柯莱, 多莉",

  // 老公&男朋友：成男、少男
  boyfriend: "散兵, 白术, 提纳里",

  // 女儿：萝莉
  daughter: "派蒙, 瑶瑶",
  // 儿子：正太
  son: ""
}