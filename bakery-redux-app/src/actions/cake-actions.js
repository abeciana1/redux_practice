export const SELL_CAKE = "SELL_CAKE";
export const BAKE_CAKE = "BAKE_CAKE";

export const sellCake = () => {
    return {
        type: SELL_CAKE,
    };
};

export const bakeCake = () => {
    return {
        type: BAKE_CAKE,
    };
};