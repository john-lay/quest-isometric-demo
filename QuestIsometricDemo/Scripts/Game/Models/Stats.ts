interface IDefense {
    def: number;
    magRst: number;
}

interface IAttack {
    atk: number;
    magPwr: number;
}

interface IPurchasable {
    cost: number;
}

interface IEntity extends IDefense, IAttack {
    atk: number;
    def: number;
    magPwr: number;
    magRst: number;
    spd: number;
    eva: number;
} 


// HELMET IDefense
// HAT IDefense, IAttack
// ARMOUR / CLOTHING / ROBES IAttack, IDefense
// SHIELD IDefense + evade