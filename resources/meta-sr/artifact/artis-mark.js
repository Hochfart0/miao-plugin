/**
 * 角色的默认评分规则
 * 如character/${name}/artis.js下有角色自定义规则优先使用自定义
 */
export const usefulAttr = {
  '丹恒•饮月': { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  卡芙卡: { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 50, heal: 0, recharge: 50, effPct: 75, effDef: 0, dmg: 100 },
  刃: { hp: 100, atk: 50, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  罗刹: { hp: 0, atk: 100, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 100, recharge: 100, effPct: 0, effDef: 50, dmg: 100 },
  银狼: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 },
  景元: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  希儿: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  布洛妮娅: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 75, cdmg: 100, stance: 0, heal: 0, recharge: 100, effPct: 0, effDef: 0, dmg: 100 },
  杰帕德: { hp: 50, atk: 0, def: 100, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effPct: 50, effDef: 50, dmg: 0 },
  姬子: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 50, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  瓦尔特: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 100, effDef: 0, dmg: 100 },
  彦卿: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 0, effDef: 0, dmg: 100 },
  白露: { hp: 100, atk: 0, def: 50, speed: 75, cpct: 0, cdmg: 0, stance: 0, heal: 100, recharge: 100, effPct: 0, effDef: 50, dmg: 0 },
  克拉拉: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  三月七: { hp: 50, atk: 0, def: 100, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effPct: 50, effDef: 50, dmg: 0 },
  丹恒: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  阿兰: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  艾丝妲: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 75, cdmg: 75, stance: 100, heal: 0, recharge: 100, effPct: 0, effDef: 0, dmg: 100 },
  黑塔: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  希露瓦: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  娜塔莎: { hp: 100, atk: 0, def: 50, speed: 75, cpct: 0, cdmg: 0, stance: 0, heal: 100, recharge: 75, effPct: 0, effDef: 50, dmg: 0 },
  佩拉: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 100, effDef: 0, dmg: 100 },
  桑博: { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 100, effDef: 0, dmg: 100 },
  虎克: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  青雀: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  停云: { hp: 50, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effPct: 0, effDef: 0, dmg: 0 },
  素裳: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 50, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 },
  开拓者火: { hp: 50, atk: 0, def: 100, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 0, effPct: 100, effDef: 50, dmg: 0 },
  开拓者物理: { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100 }
}
