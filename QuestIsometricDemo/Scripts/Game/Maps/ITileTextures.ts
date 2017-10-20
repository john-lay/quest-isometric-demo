interface ITileTextures {
    grass: ITileStyle;
    ground: ITileStyle;
    water: ITileStyle;
    current: ITileStyle;
    fire: ITileStyle;
    move: ITileStyle;
}

interface ITileStyle {
    fill: number;
    stroke: number;
}